import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { API_URL } from '../constants/defaults';
import _ from 'lodash';
import styled from 'styled-components';

const Fragment = React.Fragment;

const MapDiv = styled.div`
  width: calc(100vw - 80px);
  height: calc(100vh - 40px);
`;


class MapContainer extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
    window.mapboxgl.accessToken = "pk.eyJ1IjoiZGF0YXBsdXNmZW1pbmlzbSIsImEiOiJjazl6aHc4cjQwNnRwM2xwZHJxZ2F4dm9vIn0.T9pZe5G7wOLEFLwdDlGBdg";//process.env.MAPBOX_TOKEN;

    this.map = new window.mapboxgl.Map({
      container: this.refsMapContainer,
      style: 'mapbox://styles/dataplusfeminism/ckbyelidz303i1hqr6cqsjgj6',
      zoom: 13,
      minZoom: 13,
      center: [ -73.935242, 40.730610],
      // interactive: false
    });


    window.map = this.map;
    this.map.on('style.load', this.handleStyleLoad.bind(this));
  
  }

  async handleStyleLoad(e) {

    // this.map.addSource('osm_points', {
    //   "type": 'vector',
    //   "tiles": [`${API_URL}/tiles/osm_points/{z}/{x}/{y}.pbf`],
    //   "minZoom": 3
    // });

    // this.map.addLayer({
    //   'id': 'osm_points_layer',
    //   'source': 'osm_points',
    //   'source-layer': 'public.planet_osm_point',
    //   'type': 'circle',
    //   "minzoom": 3,
    //   'paint': {
    //     'circle-radius': 2,
    //     'circle-color': "#FFFFFF"        
    //   }
    // });


  }

  

  render() {
    return (
      <MapDiv ref={c => { this.refsMapContainer = c; }} className="map-container">
      </MapDiv>
    );
  }
}

let mapStateToProps = state => {

  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight
  }
}

export default connect(mapStateToProps)(MapContainer);