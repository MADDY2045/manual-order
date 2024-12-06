// src/hoc/withHeader.js
import React from 'react';

const withHeader = (Component, title) => {
  return () => (
    <div className="header">
      <h1>{title}</h1>
      <Component />
    </div>
  );
};

export default withHeader;
