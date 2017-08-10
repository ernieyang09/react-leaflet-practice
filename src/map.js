import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';


class MyMap extends Component {

  render() {
    return(
      <Map
        center={[25.03375633, 121.5351444]}
        zoom={12}
        style={{height:'100%'}}
        ref={(node)=> window.map = node.leafletElement}
        zoomControl={false}
      >
        <TileLayer
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png'
          // url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/pitney-bowes-grey/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          detectRetina
        />
      </Map>
    )
  }
}

export default MyMap;
