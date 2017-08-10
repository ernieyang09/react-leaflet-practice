import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MyMap from './map';
import Nav from './nav';

import './main.scss';

const App = () => (
    <div style={{height:'100%'}}>
      <Nav />
      <MyMap />
    </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
