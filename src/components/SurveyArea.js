import React, { Component } from 'react';
import styled from 'styled-components';
import { Inner, CenterArea, Gutter, Title } from '../stylesheets/components';

const SurveyFrame = styled.iframe`
  width: 100%;
  height: 3800px;
`;

const BlackTitle = styled(Title)`
  color: black;
`;


class SurveyArea extends Component {
  render() {
    return (
      <div>
        <Gutter h={50} />
        <Inner>
          <CenterArea>
            <BlackTitle>
              We need <br/>
              your input
            </BlackTitle>
          </CenterArea>
        </Inner>
        <Gutter h={50} />
        <Inner>
          <CenterArea>
            <SurveyFrame src="https://docs.google.com/forms/d/e/1FAIpQLSfnduGC8oVyAHIszdJ1ceSleOQw4vUpCzV5dCees_Rp_y3rZg/viewform" title="title">
              
            </SurveyFrame>
          </CenterArea>
        </Inner>
        <Gutter h={50} />
      </div>
    )
  }
}

export default SurveyArea;