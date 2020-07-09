import React, { Component } from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import { Gutter, Inner } from '../stylesheets/components'

const Container = styled.div`
  background-color: black;
  min-height: calc(100vh - 57px);
  display: flex;
  padding: 20px 0;
  justify-content:center;
`;


const Wrap = styled.div`
  position: relative;
  height: 600px;
`;

const Subtitle = styled.div`
  font-family: 'Staatliches', cursive;
  font-weight: 400;
  color: white;
  font-size: 3.571em;
  line-height: 1.1;
  width: 500px;
  margin: 0 auto;
  text-align: center;

  b {
    font-weight: 500;
    color: white;
  }
`;


const Question = styled.div`
  
  position: absolute; 
  left: 30px;
  top: 30px;
  width: 350px;

  p {
    font-family: "Source Sans Pro";
    color: white;
    font-size: 1.429em;
    line-height: 1.2;
    font-weight: 300;
  }

  b {
    color: white;
    font-weight: 600;
  }
`;

const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const QUESTIONS = [
  {
    q: <p>Have there been <b>changes in the way your building is managed?</b></p>,
    pos: [70, 56]
  },
  {
    q: <p>Are there <b>new cameras</b> that have been installed?</p>,
    pos: [600, 180]
  },
  {
    q: <p>Are there <b>different payment, notification, or screening systems?</b></p>,
    pos: [150, 315]
  },
  {
    q: <p>Has access to your building changed, <b>for instance: you no longer have a key?</b></p>,
    pos: [550, 455]
  }
];

const HeroTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const HeroTitle = styled.h1`
  font-family:'Staatliches', cursive;
  font-size: 3.571em;
  line-height: 1.1;
  color: white;
`;

const HeroSub = styled.div`
  font-family:"Source Sans Pro";
  font-size: 1.286em;
  color: white;
  line-height: 1.4;
  width: 450px;
`;              

export default class Hero extends Component {
  render() {
    return (
      <Container>
        <Inner>
          <Wrap>

            {
              _.map(QUESTIONS, (q, i) => {
                return (
                  <Question key={i} style={{ left: q.pos[0], top: q.pos[1] }}>
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
          <Gutter h={50} />
          <HeroTitleContainer>
            <HeroTitle>
              Crowdsourcing<br/>
              Landlord Tech<br/>
              Deployment
            </HeroTitle>
            <HeroSub>
              Landlord Tech—in industry so-called property tech or proptech—is leading to new forms of housing injustice in ways that increase the power of landlords and further disempower tenants and those seeking shelter.
            </HeroSub>
          </HeroTitleContainer>
          <Gutter h={50} />
          
        </Inner>
      </Container>
    )
  }
}
