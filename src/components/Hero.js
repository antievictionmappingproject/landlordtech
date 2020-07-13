import React, { Component } from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import { Question } from './';
import { Gutter, Inner } from '../stylesheets/components'
import media from '../stylesheets/media';

const Container = styled.div`
  background-color: black;
  min-height: calc(100vh - 57px);
  display: flex;
  padding: 20px 0;
  justify-content:center;
`;


const Wrap = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
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



  ${media.padLandscape `
    width: calc(100% - 20px);
    font-size:2.3em;
  `}

  ${media.mobileSmall `
    width: 100%;
  `}
`;



const HeroImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {

    ${media.padLandscape `
      width: calc(100% - 20px);
    `}
  }
`;

const QUESTIONS = [
  {
    q: <p>Have there been <b>changes in the way your building is managed?</b></p>,
    pos: [12, 11],
    image: `${process.env.PUBLIC_URL}/assets/p1.png`,
    alt: "A login interface screenshot of a building management website",
    imagePos: [161, -88],
    imageWidth: "60%"
  },
  {
    q: <p>Are there <b>new cameras</b> that have been installed?</p>,
    pos: [48, 30],
    image: `${process.env.PUBLIC_URL}/assets/p2.png`,
    alt: "A photo of surveilance camera installed in the public area",
    imagePos: [75, -98],
    imageWidth: "100%"
  },
  {
    q: <p>Are there <b>different payment, notification, or screening systems?</b></p>,
    pos: [19, 50],
    image: `${process.env.PUBLIC_URL}/assets/p3.png`,
    alt: "A tenant screening app running on a smartphone",
    imagePos: [-22, -88],
    imageWidth: "60%"
  },
  {
    q: <p>Has access to your building changed, <b>for instance: you no longer have a key?</b></p>,
    pos: [42, 70],
    image: `${process.env.PUBLIC_URL}/assets/p4.png`,
    alt: "A photo of a key fob",
    imagePos: [45, -126],
    imageWidth: "90%"
  }
];

const HeroTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${media.mobileSmall `

    display: block;

  `}
`;

const HeroTitle = styled.h1`
  font-family:'Staatliches', cursive;
  font-size: 3.571em;
  line-height: 1.1;
  color: white;

  ${media.mobileLarge`
    text-align: left;
    font-size: 2.3em;
  `}

  ${media.mobileSmall `
    font-size: 2.3em;
    text-align: center;
    margin-bottom: 30px;
  `}

`;

const HeroSub = styled.div`
  font-family:"Source Sans Pro";
  font-size: 1.286em;
  color: white;
  line-height: 1.4;
  width: 450px;


  ${media.mobileLarge`
    width: auto;
    font-size:1.1em;
    width: 400px;
  `}

  ${media.mobileSmall `
    width: auto;
    font-size:1.1em;
  `}
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
                  <Question key={i} idx={i} {...q} />
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
