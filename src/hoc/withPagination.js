// src/hoc/withPagination.js
import React, { useState } from 'react';

const withPagination = (Component) => {
  return ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const currentData = data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    return (
      <div>
        <Component data={currentData} />
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
};

export default withPagination;
