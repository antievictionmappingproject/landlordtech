import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';
import { changeCurrentResponseID } from '../actions';
import { Gutter } from '../stylesheets/components';
import { TECH_SELECT_VALUES } from '../constants/defaults';
import media from '../stylesheets/media';

const ResponseContainer = styled.div`
  position: absolute;
  z-index: 15;
  right: 15px;
  bottom: 15px;
  background-color: #111;
  border: 1px solid #333333;
  padding: 15px 9px 15px 20px;
  max-width: 350px;
  height: calc(100vh - 300px);
  color: white;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  ${media.mobileLarge `
    right: 10px;
    bottom: 10px;
  `}

  ${media.mobileSmall `
    left: 0;
    bottom: 0;
    width: calc(100vw - 53px);
  `}
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
      margin-bottom: 5px;
    }
  }

  div.tech-color-area {
    display: flex;
    width: 50%;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }
`;

const QuestionTitle = styled.div`
  font-family: 'Source Sans Pro';
  font-size: 1.0em;
  color: #666;
  font-style: italic;
  line-height: 1.3;
  margin-bottom: 5px;

`;

const Answer = styled.div`
  color: white;
  line-height: 1.3;
`;

const ColorCircle = styled.div`
  margin-bottom: 10px;

  width: 35px;
  height: 35px;
  border-radius: 40px;
  margin-left: 5px;
  &:last-child {
    margin: 0;
  }
`;


const CloseBtn = styled.button`
  position: absolute;
  right: 5px;
  top: 10px;
  z-index: 1000001;
  cursor:pointer;
`;

const EXCLUDE_QUESTIONS = ["Timestamp", "techType", "Optional", "Latitude", "Longitude", "zip code", "Would you consider this technology"];

class CurrentResponse extends Component {
  determineColor(tt) {
    let tech = _.find(TECH_SELECT_VALUES, value => value.value === tt);
    return tech ? tech.color : "#ccc";
  }

  handleClose(e){
    this.props.dispatch(changeCurrentResponseID(null));
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
        <CloseBtn onClick={this.handleClose.bind(this)}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M1 1 L15 15" stroke="#D7D7D7"/>
            <path d="M1 15 L15 1" stroke="#D7D7D7"/>
          </svg>

        </CloseBtn>
        <Gutter h={20} />
        <TechTypeArea style={{borderBottom: 'none'}}>
          <div className="tech-title-area">
          {
            _.map(response.properties.techType.reverse(), (tt) => {
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
              _.map(response.properties.techType.reverse(), (tt, i) => {
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