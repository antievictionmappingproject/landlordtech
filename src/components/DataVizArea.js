import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { TECH_SELECT_VALUES } from '../constants/defaults';
import '../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis';

const getTechTypeCount = (data) => {
  let result = []; 
  let techtypeValues = _.map(TECH_SELECT_VALUES, tsv => tsv.value);
  console.log(techtypeValues);
  
  if (data.features.length > 0 ){
    result = [{ x: "Other", y: 0 }];
  }

  _.each(data.features, f => {
    
  
    
    _.each(f.properties.techType, tt => {
      if (_.includes(techtypeValues, tt)) {
        let rIdx = _.findIndex(result, r => { return r.x === tt });

        if (rIdx === -1){
          result.push({
            x: tt,
            y: 1
          });
        } else {
          result[rIdx].y = result[rIdx].y + 1;
        }
      } else {

        let rIdx = _.findIndex(result, r => { return r.x === "Other" });

        result[rIdx].y =  result[rIdx].y + 1;
      }

    })


  })

  let rIdx = _.findIndex(result, r => { return r.x === "Smart home technology" });
  if (rIdx > -1){
    result[rIdx].x = "Smart home";
  }
  
  return _.sortBy(result, r => r.y).reverse()
}

const getCovid = (data) => {
  let answers = [];
  _.each(data.features, f => {
    answers.push(f.properties["Did the implementation of this technology change in the wake of Covid-19? How so?"]);
  });

  console.log(answers);
  

};

class DataVizArea extends Component {
  render() {
    let { data } = this.props;
    let techTypeCounted = getTechTypeCount(data);
    let covidCounted = [
      { x: "Yes", y: 24, },
      { x: "No", y: data.features.length - 24 }
    ];
 
    return (
      <>
        <div>
          <XYPlot xType="ordinal" width={900} height={450} fill="black" stroke="black">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries data={techTypeCounted} />
          </XYPlot>
        </div>
        <div>
          <XYPlot xType="ordinal" width={300} height={450} fill="black" stroke="black">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries data={covidCounted} />
          </XYPlot>
        </div>
      </>
    )
  }
}

let mapStateToProps = state => {
  return {
    data: state.data
  }
}
export default connect(mapStateToProps)(DataVizArea);