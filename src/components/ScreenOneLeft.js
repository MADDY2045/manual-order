// src/components/ScreenOneLeft.js
import React, { useState } from 'react';

const ScreenOneLeft = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className="header">
        <h2>Settings</h2>
        <button className="settings-icon" onClick={togglePopup}>
          ⚙️
        </button>
      </div>
      {showPopup && (
        <div className="popup-backdrop" onClick={togglePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button onClick={togglePopup}>Close</button>
            <p>Settings Popup</p>
          </div>
        </div>
      )}
      {data.inputs.map((input, index) => (
        <div key={index}>
          <input type="text" placeholder={input.placeholder} />
        </div>
      ))}
      {data.dropdowns.map((dropdown, index) => (
        <div key={index}>
          <select multiple>
            {dropdown.options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default ScreenOneLeft;
