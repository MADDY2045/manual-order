// src/components/ScreenOneRight.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const TabContent = ({ sectionData, onCardClick }) => {
  return (
    <div className="wrapper_tabcontent">
      {sectionData.map((section, index) => (
        <div key={index} className="section">
          {section.type === 'dropdown' && (
            <select>
              {section.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {section.type === 'cards' &&
            section.cards.map((card, idx) => (
              <div key={idx} className="card" onClick={onCardClick}>
                {card}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

const ScreenOneRight = ({ data }) => {
  const [tabs, setTabs] = useState([{ id: 1, sections: data.sections }]);
  const [activeTab, setActiveTab] = useState(1);
  const history = useHistory();

  const addTab = () => {
    const newTab = {
      id: tabs.length + 1,
      sections: data.sections,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const handleCardClick = () => {
    history.push('/screen2');
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
          {activeTab === tab.id && (
            <TabContent
              sectionData={tab.sections}
              onCardClick={handleCardClick}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ScreenOneRight;
