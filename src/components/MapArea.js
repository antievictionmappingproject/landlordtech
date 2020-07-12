import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MapContainer, Legend, SelectArea } from './';
import { Title, Subtitle, Inner, Gutter, CenterArea } from '../stylesheets/components';

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
`;


class MapArea extends Component {
  render() {
    let { isFullScreen } = this.props;
    return (
      <Container>
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
            While such technologies have celebrated the “disruption” of the real estate industry with new technology and data infrastructures, they often exacerbate housing inequality and gentrification. 
          </Subtitle>
        </Inner>
        <Gutter h={50} />
        <CenterArea>
          <RelativeWrap isFullScreen={isFullScreen}>
            <SelectArea />
            <MapContainer /> 
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
    isFullScreen: state.isFullScreen
  }
}

export default connect(mapStateToProps)(MapArea);