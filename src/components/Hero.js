import React, { Component } from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import { Gutter } from '../stylesheets/components'

const Container = styled.div`
  background-color: black;
  min-height: calc(100vh - 57px);
  display: flex;
  padding: 20px 0;
  justify-content:center;
`;

const Inner = styled.div`
  width: 1024px;
`;

const Wrap = styled.div`
  position: relative;
  height: 600px;
`;

const Subtitle = styled.div`
  font-family: "GT America Extended";
  font-weight: 400;
  color: white;
  font-size: 2.143em;
  line-height: 1.2;
  width: 500px;
  margin: 0 auto;

  b {
    font-weight: 500;
    color: white;
  }
`;


const Question = styled.div`
  font-family: "GT America Extended";
  font-weight: 500;
  color: white;
  font-size: 1.429em;
  line-height: 1.2;
  position: absolute; 
  left: 30px;
  top: 30px;
  width: 350px;
`;

const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const QUESTIONS = [
  {
    q: "Have there been changes in the way your building is managed?",
    pos: [70, 56]
  },
  {
    q: "Are there new cameras that have been installed?",
    pos: [600, 180]
  },
  {
    q: "Are there different payment, notification, or screening systems?",
    pos: [150, 315]
  },
  {
    q: "Has access to your building changed, for instance: you no longer have a key?",
    pos: [550, 455]
  }
]

export default class Hero extends Component {
  render() {
    return (
      <Container>
        <Inner>
          <Wrap>

            {
              _.map(QUESTIONS, q => {
                return (
                  <Question style={{ left: q.pos[0], top: q.pos[1] }}>
                    { q.q }
                  </Question>
                );
              })
            }
          </Wrap>

          <Subtitle>
            If so, then you might have <br/>
            <b>Landlord Tech</b> <br/>
            in your building!
          </Subtitle>
          <Gutter h={20} />
          <HeroImageContainer>
            <img src={`${process.env.PUBLIC_URL}/assets/hero.png`} alt="a facial recognition analysis result" />
          </HeroImageContainer>
        </Inner>
      </Container>
    )
  }
}
