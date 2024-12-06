// src/screens/ScreenOne.js
import React from 'react';
import withLayout from '../hoc/withLayout';
import ScreenOneLeft from '../components/ScreenOneLeft';
import ScreenOneRight from '../components/ScreenOneRight';
import data from '../data/screenOneData.json';

const HeaderComponent = () => (
  <div className="dynamic-header">Screen One Header</div>
);
const LeftComponent = () => <ScreenOneLeft data={data.left} />;
const RightComponent = (props) => (
  <ScreenOneRight data={data.right} {...props} />
);
const Layout = withLayout(HeaderComponent, LeftComponent, RightComponent);

export default Layout;
