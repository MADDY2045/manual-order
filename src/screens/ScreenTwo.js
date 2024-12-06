// src/components/ScreenTwo.js
import React from 'react';
import ScreenTwoLeft from '../components/ScreenTwoLeft';
import ScreenTwoRight from '../components/ScreenTwoRight';
import data from '../data/masterData.json';

const ScreenTwo = () => {
  const screenData = data.screenTwo;

  return (
    <div>
      <div className="header">
        <h2>{screenData.header}</h2>
        <div className="header-buttons">
          {screenData.buttons.map((button, index) => (
            <button key={index}>{button}</button>
          ))}
        </div>
      </div>
      <div className="screen-container">
        <div className="left-component">
          <ScreenTwoLeft data={screenData.left} />
        </div>
        <div className="right-component">
          <ScreenTwoRight data={screenData} />
        </div>
      </div>
    </div>
  );
};

export default ScreenTwo;
