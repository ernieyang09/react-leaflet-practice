import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';

import './nav.scss';

class Nav extends Component {
  state = {
    isOpen: true,
  }

  onClick = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return(
      <div id='nav_wrap'>

        <ul id='nav'>
          <div style={{ padding:'10px', cursor: 'pointer' }} onClick={this.onClick}> {`<<`} </div>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    )
  }
}

export default Nav;
