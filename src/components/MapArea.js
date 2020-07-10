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
  position: relative;
`;


class MapArea extends Component {
  render() {
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
          <RelativeWrap>
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
  }
}

export default connect(mapStateToProps)(MapArea);