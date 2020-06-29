import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Title, CenterArea, Gutter, Subtitle } from '../stylesheets/components';
import { TECH_LIST } from '../constants/defaults';
import _ from 'lodash';

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: calc(100vw - 100px);
  height: calc(100vh - 150px);
  transform: translate(-50%, -50%);
  background-color: black;
  z-index: 99999;
`;

const NCTitle = styled(Title)`
  width: 300px;
`;


class Nomenclature extends Component {
  render() {
    let { currentNomenclature } = this.props;
    let tech = _.find(TECH_LIST, tech => tech.id === currentNomenclature);

    return (
      <Container>
        <Gutter h={50} />
        <CenterArea>
          <NCTitle>
            { tech.title }
          </NCTitle>
        </CenterArea>

        <CenterArea>
          <Subtitle>
            { tech.services }
          </Subtitle>
        </CenterArea>

        <Gutter h={50} />
      </Container>
    )
  }
}

let mapStateToProps = state => {
  return {
    currentNomenclature: state.currentNomenclature
  }
}

export default connect(mapStateToProps)(Nomenclature);