import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMapLoaded, changeCurrentResponseID } from '../actions';
import { TECH_SELECT_VALUES } from '../constants/defaults';
import _ from 'lodash';
import { ResetZoomControl } from './';
import styled from 'styled-components';
import { point, bbox, buffer } from '@turf/turf';
import media from '../stylesheets/media';

// const Fragment = React.Fragment;
const MapDiv = styled.div`
  width: ${props => props.isFullScreen ? "100vw" : "calc(100vw - 80px)"};
  height: ${props => props.isFullScreen ? "100vh" : "calc(100vh - 100px)"};


  ${media.padLandscape `
    width: ${props => props.isFullScreen ? "100vw" : "calc(100vw - 20px)"};
    height: ${props => props.isFullScreen ? "100vh" : "calc(100vh - 50px)"};
  `}

`;


class MapContainer extends Component {
  constructor(props){
    super(props);
    this.hoveredStateId = null;
  }
  componentDidMount() {
    window.mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

    this.map = new window.mapboxgl.Map({
      container: this.refsMapContainer,
      style: process.env.REACT_APP_MAP_STYLE,
      zoom: 4,
      minZoom: 4,
      center: [ -98.98407012500502, 38.97649404715861],
      scrollZoom: false
      // interactive: false
    });

    this.map.addControl(new window.mapboxgl.NavigationControl());

    window.map = this.map;
    this.map.on('style.load', this.handleStyleLoad.bind(this));
  
  }

  handleResetZoom(e){
    this.map.easeTo({
      zoom: 4,
      center: [ -98.98407012500502, 38.97649404715861]
    });
    this.props.dispatch(changeCurrentResponseID(null));

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

    _.each([...TECH_SELECT_VALUES].splice(1, TECH_SELECT_VALUES.length).reverse(), v => {
      circleColors.push(["in", v.value, ['get', 'techType']], v.color);
    }); 

    circleColors.push("#ccc");
    
    return circleColors;
  }

  updateFilter(currentTechTypeValue) {

    if (currentTechTypeValue === "All"){

      this.map.setFilter('unclustered_responses_layer', ['!', ['has', 'point_count']]);
      this.map.setFilter('clusters', ['has', 'point_count']);
      this.map.setLayoutProperty('cluster-count', 'text-field', `{point_count_abbreviated}`);
      this.map.setPaintProperty('clusters', 'circle-stroke-color', "#FFFFFF");
      this.map.setPaintProperty('cluster-count', 'text-color', "#FFFFFF");

    
      this.map.setPaintProperty('unclustered_responses_layer', 'circle-color', this.renderCircleColors());
    } else {  
      this.map.setFilter('unclustered_responses_layer', 
        [
          "all",
          [
            'in',
            currentTechTypeValue,
            ['get', 'techType']
          ], // tech filter
          ['!', ['has', 'point_count']]
        ]
      );

      this.map.setFilter('clusters', 
        [
          "all",
          [
            '>',
            ['get', currentTechTypeValue],
            0
          ], // tech filter
          ['has', 'point_count']
        ]
      );

      this.map.setFilter('cluster-count', 
        [
          "all",
          [
            '>',
            ['get', currentTechTypeValue],
            0
          ], // tech filter
          ['has', 'point_count']
        ]
      );

      this.map.setLayoutProperty('cluster-count', 'text-field', `{${currentTechTypeValue}}`);


      let color = _.find(TECH_SELECT_VALUES, v => v.value === currentTechTypeValue).color;
      this.map.setPaintProperty('unclustered_responses_layer', 'circle-color', [
        'case',
        ["in", currentTechTypeValue, ['get', 'techType']], color,
        "#ccc"
      ]);

      this.map.setPaintProperty('clusters', 'circle-stroke-color', color);
      this.map.setPaintProperty('cluster-count', 'text-color', color);

      // this.map.setPaintProperty('unclustered_responses_layer', 'circle-stroke-color', [
      //   'case',
      //   ["in", currentTechTypeValue, ['get', 'techType']], color,
      //   "#ccc"
      // ]);

      // console.log(this.map.getFilter('responses_layer'))
    }
  }

  updateData(data){
    console.log(data);
    this.map.getSource('responses').setData(data);
  }

  determineClusterProperties() {
    let result = {};
    _.each([...TECH_SELECT_VALUES].splice(1, TECH_SELECT_VALUES.length), v => {
      // circleColors.push(["in", v.value, ['get', 'techType']], v.color);
      result[v.value] = [
        '+', 
        [
          'case', [
            'in',
            v.value,
            ['get', 'techType']
          ], 
          1, 
          0
        ]
      ];
    }); 

    return result;
  }

  async handleStyleLoad(e) {

    this.map.addSource('responses', {
      type: 'geojson',
      data: this.props.data,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
      clusterProperties: this.determineClusterProperties()
    });

    this.map.addLayer({
      id: 'clusters',
      type: 'circle',
      source: 'responses',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': 'rgba(0,0,0,0)',
        'circle-stroke-color': '#FFFFFF',
        'circle-stroke-width': 3,
        
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          20,
          100,
          30,
          750,
          40
        ]
      }
    });

    this.map.addLayer({
      id: 'cluster-count',
      type: 'symbol',
      source: 'responses',
      filter: ['has', 'point_count'],
      layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
      },
      paint: {

        'text-color': '#FFFFFF'
      }
    });
 
      
    this.map.addLayer({
      'id': 'unclustered_responses_layer',
      'source': 'responses',
      'type': 'circle',
      "minzoom": 4,
      filter: ['!', ['has', 'point_count']],
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
    
    this.map.on('mousemove', 'clusters', e => {
      if (e.features.length > 0) {

        this.map.getCanvas().style.cursor = 'pointer';
      
      } else {

        this.map.getCanvas().style.cursor = '';
      }

    });

    this.map.on('mouseleave', 'clusters', e => {

        this.map.getCanvas().style.cursor = '';
    });

    this.map.on('click', 'clusters', e => {
      var features = this.map.queryRenderedFeatures(e.point, {
        layers: ['clusters']
      });
      var clusterId = features[0].properties.cluster_id;
      
      this.map.getSource('responses').getClusterExpansionZoom(
        clusterId,
        (err, zoom) => {
          if (err) return;
       
          this.map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom
          });
        }
      );
    });


    this.map.on('click', 'unclustered_responses_layer', e => {
      if (e.features.length > 0) {
        let feature = e.features[0];
        let pointed = point([Number(feature.properties.Longitude), Number(feature.properties.Latitude)]);
        let buffered = buffer(pointed, 0.15, {units: 'kilometers'});
        let bboxed = bbox(buffered);

        this.map.fitBounds([
          [bboxed[0], bboxed[1]],
          [bboxed[2], bboxed[3]]
        ]);

        this.props.dispatch(changeCurrentResponseID(feature.id));
      }
    });

    this.map.on('mousemove', 'unclustered_responses_layer', e => {
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

    this.map.on("mouseleave", "unclustered_responses_layer", e => {
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

    this.props.dispatch(changeMapLoaded(true));
  }

  

  render() {
    let { isFullScreen } = this.props;

    return (
      <MapDiv isFullScreen={isFullScreen} ref={c => { this.refsMapContainer = c; }} className="map-container">
        <ResetZoomControl handleZoomReset={this.handleResetZoom.bind(this)}/>
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