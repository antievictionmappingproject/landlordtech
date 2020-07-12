import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TECH_SELECT_VALUES } from '../constants/defaults';
import _ from 'lodash';
import styled from 'styled-components';
import { point, bbox, buffer } from '@turf/turf';

const Fragment = React.Fragment;

const MapDiv = styled.div`
  width: ${props => props.isFullScreen ? "100vw" : "calc(100vw - 80px)"};
  height: ${props => props.isFullScreen ? "100vh" : "calc(100vh - 100px)"};
`;


class MapContainer extends Component {
  constructor(props){
    super(props);
    this.hoveredStateId = null;
  }
  componentDidMount() {
    window.mapboxgl.accessToken = "pk.eyJ1IjoiZGF0YXBsdXNmZW1pbmlzbSIsImEiOiJjazl6aHc4cjQwNnRwM2xwZHJxZ2F4dm9vIn0.T9pZe5G7wOLEFLwdDlGBdg";//process.env.MAPBOX_TOKEN;

    this.map = new window.mapboxgl.Map({
      container: this.refsMapContainer,
      style: 'mapbox://styles/dataplusfeminism/ckbyelidz303i1hqr6cqsjgj6',
      zoom: 11,
      minZoom: 11,
      center: [ -73.935242, 40.730610],
      scrollZoom: false
      // interactive: false
    });

    this.map.addControl(new window.mapboxgl.NavigationControl());

    window.map = this.map;
    this.map.on('style.load', this.handleStyleLoad.bind(this));
  
  }

  componentDidUpdate(prevProps){
    if (prevProps.data.features.length === 0 && this.props.data.features.length > 0) {
      this.updateData(this.props.data);
    }

    if (prevProps.currentTechType.value !== this.props.currentTechType.value) {
      this.updateFilter(this.props.currentTechType.value);
    }

    if (prevProps.isFullScreen !== this.props.isFullScreen) {
      if (this.props.isFullScreen) {
        this.map.scrollZoom.enable();
      } else {
        this.map.scrollZoom.disable();
      }
    }

    this.map.resize();
  }

  renderCircleColors(){
    let circleColors = ["case"];

    _.each([...TECH_SELECT_VALUES].splice(1, TECH_SELECT_VALUES.length), v => {
      circleColors.push(["in", v.value, ['get', 'techType']], v.color);
    });

    circleColors.push("#ccc");
    
    return circleColors;
  }

  updateFilter(currentTechTypeValue) {

    if (currentTechTypeValue === "All"){

      this.map.setFilter('responses_layer', null);
    
      this.map.setPaintProperty('responses_layer', 'circle-color', this.renderCircleColors());
    } else {  

      this.map.setFilter('responses_layer', [
        'in',
        currentTechTypeValue,
        ['get', 'techType']
      ]);

      let color = _.find(TECH_SELECT_VALUES, v => v.value === currentTechTypeValue).color;
      this.map.setPaintProperty('responses_layer', 'circle-color', [
        'case',
        ["in", currentTechTypeValue, ['get', 'techType']], color,
        "#ccc"
      ]);

      // console.log(this.map.getFilter('responses_layer'))
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
        'circle-radius': {
          'base': 5,
          'stops': [
          [12, 10],
          [22, 180]
          ]
        },
        'circle-color': this.renderCircleColors(),
        'circle-stroke-width': 1,
        'circle-opacity': [
          'case',
          ['boolean', ['feature-state', 'hover'], false],
          1,
          0.7
        ]
      }
    }, "admin-0-boundary-disputed");

    this.map.on('click', 'responses_layer', e => {
      if (e.features.length > 0) {
        let feature = e.features[0];
        let featurePoint = point([Number(feature.properties.Longitude), Number(feature.properties.Latitude)]);
        let bufferedArea = buffer(featurePoint, 0.1, {units: 'kilometers'});
        var bboxed = bbox(bufferedArea);

        this.map.fitBounds(
          [
            [bboxed[0], bboxed[1]], 
            [bboxed[2], bboxed[3]]
          ]
        )
      }
    });

    this.map.on('mousemove', 'responses_layer', e => {
      if (e.features.length > 0) {
        if (this.hoveredStateId) {
       
          this.map.setFeatureState(
            { source: 'responses', id: this.hoveredStateId },
            { hover: false }
          );
       
        }

        this.hoveredStateId = e.features[0].id;
        
        this.map.setFeatureState(
          { source: 'responses', id: this.hoveredStateId },
          { hover: true }
        );


        this.map.getCanvas().style.cursor = 'pointer';
      } 
    });

    this.map.on("mouseleave", "responses_layer", e => {
      if (this.hoveredStateId) {
        this.map.setFeatureState({
          source: 'responses',
          id: this.hoveredStateId
        }, {
          hover: false
        });
      }
    
      this.hoveredStateId = null;
      this.map.getCanvas().style.cursor = '';
    });
  }

  

  render() {
    let { isFullScreen } = this.props;

    return (
      <MapDiv isFullScreen={isFullScreen} ref={c => { this.refsMapContainer = c; }} className="map-container">
      </MapDiv>
    );
  }
}

let mapStateToProps = state => {

  return {
    windowWidth: state.windowWidth,
    windowHeight: state.windowHeight,
    data: state.data,
    currentTechType: state.currentTechType,
    isFullScreen: state.isFullScreen
  }
}

export default connect(mapStateToProps)(MapContainer);