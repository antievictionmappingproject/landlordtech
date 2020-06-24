import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
  min-height: calc(100vh - 57px);
  display: flex;
  padding: 20px 0;
  justify-content:center;
`;

const Inner = styled.div`
  width: 1024px;
  color: white;
`;

export default class Hero extends Component {
  render() {
    return (
      <Container>
        <Inner>
          Hero
        </Inner>
      </Container>
    )
  }
}
