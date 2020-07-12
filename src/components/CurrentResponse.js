import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

const ResponseContainer = styled.div`
  position: absolute;
  z-index: 5;
  right: 15px;
  bottom: 15px;
  background-color: #111;
  border: 1px solid #333333;
  padding: 15px;
  max-width: 500px;
  height: calc(100vh - 300px);
  color: white;
  overflow-y: scroll;
`;

const AnswerArea = styled.div`
  color: white;
  margin-bottom: 10px;
`;

class CurrentResponse extends Component {
  render() {
    let { currentResponseID, data } = this.props;
    let response = _.find(data.features, f => {
      return f.id === currentResponseID
    });
    console.log(response);
    return (
      <ResponseContainer>
        {
          _.map(response.properties, (value, key) => {
            return (
              <AnswerArea key={key}>
                {key}<br/>
                {value}
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