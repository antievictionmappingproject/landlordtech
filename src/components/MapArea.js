import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MapContainer, Legend, SelectArea, CurrentResponse } from './';
import { Title, Subtitle, Inner, Gutter, CenterArea } from '../stylesheets/components';
import media from '../stylesheets/media';
const Container = styled.div`
  background-color: black;
  padding: 20px 0;
  justify-content:center;

`;

const RelativeWrap = styled.div`
  width: ${props => props.isFullScreen ? "100vw" : "calc(100vw - 80px)"};
  height: ${props => props.isFullScreen ? "100vh" : "calc(100vh - 100px)"};
  position: ${props => props.isFullScreen ? "fixed" : "relative"};
  left: ${props => props.isFullScreen ? 0 : "auto"};
  top: ${props => props.isFullScreen ? 0 : "auto"};
  z-index: ${props => props.isFullScreen ? 10000 : 9998 };


  ${media.padLandscape `
    width: ${props => props.isFullScreen ? "100vw" : "calc(100vw - 20px)"};
    height: ${props => props.isFullScreen ? "100vh" : "calc(100vh - 50px)"};
  `}
`;

class MapArea extends Component {
  render() {
    let { isFullScreen, currentResponseID } = this.props;
    return (
      <Container>
        <a name="map"></a>
        <Gutter h={50} />
        <Inner>
          <CenterArea>
            <Title>
              Landlord Tech<br/>
              Deployment Map
            </Title>
          </CenterArea>

          <Gutter h={50} />
          <Subtitle>
            We need to add some description of the map
          </Subtitle>
          
        </Inner>
        <Gutter h={50} />
        <CenterArea>
          <RelativeWrap isFullScreen={isFullScreen}>
            <SelectArea />
            <MapContainer /> 
            {
              currentResponseID ? 
              <CurrentResponse /> : null
            }
            <Legend />
          </RelativeWrap>
        </CenterArea>
        <Gutter h={50} />

      </Container>
    )
  }
}

let mapStateToProps = state => {
  return {
    isFullScreen: state.isFullScreen,
    currentResponseID: state.currentResponseID
  }
}

export default connect(mapStateToProps)(MapArea);