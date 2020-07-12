import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';
import { TECH_SELECT_VALUES } from '../constants/defaults';

const ResponseContainer = styled.div`
  position: absolute;
  z-index: 15;
  right: 15px;
  bottom: 15px;
  background-color: #111;
  border: 1px solid #333333;
  padding: 15px;
  max-width: 350px;
  height: calc(100vh - 300px);
  color: white;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const AnswerArea = styled.div`
  color: white;
  margin-bottom: 20px;
`;

const TechTypeArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #484848;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: white;
  div.tech-title-area {
    div.tech-title {
      font-family: 'Staatliches';
      font-size: 1.2em;
      color: white;
    }
  }

  div.tech-color-area {
    display: flex;
  }
`;

const QuestionTitle = styled.div`
  font-family: 'Staatliches';
  font-size: 1.0em;
  color: white;
`;

const Answer = styled.div`
  color: white;
`;

const ColorCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 40px;
  margin-right: 5px;
  &:last-child {
    margin: 0;
  }
`;

const EXCLUDE_QUESTIONS = ["Timestamp", "techType", "Optional", "Latitude", "Longitude", "zip code", "Would you consider this technology"];

class CurrentResponse extends Component {
  determineColor(tt) {
    return _.find(TECH_SELECT_VALUES, value => value.value === tt).color;
  }

  render() {
    let { currentResponseID, data } = this.props;
    let response = _.find(data.features, f => {
      return f.id === currentResponseID
    });

    let address = _.find(response.properties, (value, key) => {
      return key.search("zip code") > -1;
    })

    let publicResponses = {};
    
    _.each(response.properties, (value, key) => {
      var excludes = false; 
      _.each(EXCLUDE_QUESTIONS, q => {
        if (key.search(q) > -1){
          excludes = true;
        }
      })
      if (value.length === 0 || value === "") {
        excludes = true;
      }

      if (!excludes) {
        publicResponses[key] = value;
      }
    });

    return (
      <ResponseContainer>
        <TechTypeArea style={{borderBottom: 'none'}}>
          <div className="tech-title-area">
          {
            _.map(response.properties.techType, (tt) => {
              return (
                <div className="tech-title" key={tt}>
                  { tt }
                </div>
              );
            })
          }
          </div>
          <div className="tech-color-area">
            {
              _.map(response.properties.techType, (tt, i) => {
                return (
                  <ColorCircle style={{ backgroundColor: this.determineColor(tt) }} key={i} />
                );
              })
            }
          </div>
        </TechTypeArea>
        <TechTypeArea>
          { address }
        </TechTypeArea>
        {
          _.map(publicResponses, (value, key) => {
            return (
              <AnswerArea key={key}>
                <QuestionTitle>
                  {key}
                </QuestionTitle>
                <Answer>
                  {value}
                </Answer>
              </AnswerArea>
            );
          })
        }
      </ResponseContainer>
    )
  }
}

let mapStateToProps = state => {
  return {
    currentResponseID: state.currentResponseID,
    data: state.data
  }
}

export default connect(mapStateToProps)(CurrentResponse);