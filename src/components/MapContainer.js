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

  componentDidUpdate(prevProps){
    if (prevProps.data.features.length === 0 && this.props.data.features.length > 0) {
      this.updateData(this.props.data);
    }
  }

  updateData(data){
    console.log(data);
    this.map.getSource('responses').setData(data);
  }

  async handleStyleLoad(e) {

    this.map.addSource('responses', {
      "type": 'geojson',
      "data": this.props.data
    });

    this.map.addLayer({
      'id': 'responses_layer',
      'source': 'responses',
      'type': 'circle',
      "minzoom": 10,
      'paint': {
        'circle-radius': 5,
        'circle-color': "#FFFFFF"        
      }
    });

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
    windowHeight: state.windowHeight,
    data: state.data
  }
}

export default connect(mapStateToProps)(MapContainer);