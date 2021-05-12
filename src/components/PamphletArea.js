import React, { Component } from 'react';
import styled from 'styled-components';
import { Inner, CenterArea, Gutter, Title } from '../stylesheets/components';
import media from '../stylesheets/media';

const SurveyFrame = styled.iframe`
  width: 100%;

  height: calc(100vh - 300px);
  min-height: 400px;
`;

const BlackTitle = styled(Title)`
  color: black;
`;

const Subtitle = styled.div`
  text-align: center;
`;

const AimImg = styled.img`

  ${media.mobileSmall `
      width: 100%;
  `}
`;

class PamphletArea extends Component {
  render() {
    return (
      <div>
        <a name="pamphlet"></a>
        <Gutter h={50} />
        <Inner>
          <CenterArea>
            <BlackTitle>
              ACTION PLAN FOR TENANTS <br/>
              WHO WANT TO DEFEND THEMSELVES FROM LANDLORD TECH 
            </BlackTitle>
          </CenterArea>
          <Gutter h={5} />
          <Subtitle>
            Click the image below to download the pamphlet PDF for your building!<br/>
            Brought to you by the Ocean Hill-Brownsville Tenants Alliance.
          </Subtitle>
        </Inner>
        <Gutter h={50} />
        <Inner style={{ textAlign: "center" }}>
          <a target="_blank" rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/assets/finalpocketpack.pdf`}>
            <AimImg src={`${process.env.PUBLIC_URL}/assets/aims.png`} alt="ACTION PLAN FOR TENANTS" />
          </a>
        </Inner>
        <Gutter h={50} />
      </div>
    )
  }
}

export default PamphletArea;