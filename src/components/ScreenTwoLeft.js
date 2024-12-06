// src/components/ScreenTwoLeft.js
import React from 'react';

const ScreenTwoLeft = ({ data }) => {
  return (
    <div>
      <input type="text" placeholder={data.search.placeholder} />
      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
      {data.dropdowns.map((dropdown, index) => (
        <select key={index}>
          {dropdown.options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      ))}
      <div className="flexbox">
        {data.flexbox.map((item, index) => (
          <div key={index} className="flexbox-item">
            <label>{item.label}</label>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
      <div>
        {data.radioOptions.map((option, index) => (
          <div key={index}>
            <input type="radio" name="radioOptions" />
            <label>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenTwoLeft;
