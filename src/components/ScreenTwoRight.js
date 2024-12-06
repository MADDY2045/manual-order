// src/components/ScreenTwoRight.js
import React, { useState } from 'react';

const AccordionTable = ({ columns, rows }) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };

  return (
    <div>
      <table className="accordion-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr onClick={() => handleRowClick(rowIndex)}>
                {row.data.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
              {expandedRowIndex === rowIndex && (
                <tr className="expanded-row">
                  <td colSpan={columns.length}>
                    <table>
                      <thead>
                        <tr>
                          {row.details[0].map((detailColumn, detailIndex) => (
                            <th key={detailIndex}>{detailColumn}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {row.details.map((detailRow, detailRowIndex) => (
                          <tr key={detailRowIndex}>
                            {detailRow.map((detailCell, detailCellIndex) => (
                              <td key={detailCellIndex}>{detailCell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="pagination">
      <button>&laquo; Prev</button>
      <button>Next &raquo;</button>
    </div>
  );
};

const ScreenTwoRight = ({ data }) => {
  const [tabs, setTabs] = useState([{ id: 1, data: data.right }]);
  const [activeTab, setActiveTab] = useState(1);

  const addTab = () => {
    const newTab = { id: tabs.length + 1, data: data.right };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="right-component">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <p data-title={`Tab ${tab.id}`}>Tab {tab.id}</p>
          </button>
        ))}
        <button onClick={addTab} className="add-tab">
          +
        </button>
      </div>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tabcontent ${activeTab === tab.id ? 'active' : ''}`}
        >
          <div>
            <h3>{tab.data.status}</h3>
            <div className="labels">
              {tab.data.labels.map((label, idx) => (
                <span key={idx}>{label}</span>
              ))}
            </div>
            <AccordionTable
              columns={tab.data.table.columns}
              rows={tab.data.table.rows}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScreenTwoRight;
