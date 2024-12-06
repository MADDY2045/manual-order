// src/hoc/withLayout.js
import React from 'react';

const withLayout = (HeaderComponent, LeftComponent, RightComponent) => {
  return () => (
    <div>
      <HeaderComponent />
      <div className="screen-container">
        <div className="left-component">
          <LeftComponent />
        </div>
        <div className="right-component">
          <RightComponent />
        </div>
      </div>
    </div>
  );
};

export default withLayout;
