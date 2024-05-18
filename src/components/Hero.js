import React, { Component } from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import { Question } from './';
import { Gutter, Inner, WhiteBtn } from '../stylesheets/components'
import media from '../stylesheets/media';
import gsap from 'gsap';

const Container = styled.div`
  background-color: black;
  min-height: calc(100vh - 57px);
  display: flex;
  padding: 0;
  justify-content:center;

  ${media.mobileSmall`
    padding: 20px 0 0 0;
  `}
`;


const Wrap = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Subtitle = styled.div`
  font-family: 'Staatliches';
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

const BtnArea = styled.div`
  margin-top: 10px;
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
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
    q: <p>Is your building management <b>moving online?</b></p>,
    pos: [12, 11],
    image: `${process.env.PUBLIC_URL}/assets/p1.png`,
    alt: "A login interface screenshot of a building management website",
    imagePos: [151, -88],
    imageWidth: "60%"
  },
  {
    q: <p>Have <b>new cameras</b> been installed in your home or neighborhood?</p>,
    pos: [48, 25],
    image: `${process.env.PUBLIC_URL}/assets/p2.png`,
    alt: "A photo of surveilance camera installed in the public area",
    imagePos: [75, -98],
    imageWidth: "100%"
  },
  {
    q: <p>Is your landlord using <b>new payment, notification, or screening systems?</b></p>,
    pos: [19, 45],
    image: `${process.env.PUBLIC_URL}/assets/p3.png`,
    alt: "A tenant screening app running on a smartphone",
    imagePos: [-22, -88],
    imageWidth: "60%"
  },
  {
    q: <p>Has access to your building changed? For instance, you <b>no longer have a standard key?</b></p>,
    pos: [42, 65],
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

const HeroTitle = styled.div`

  h1.title {
    font-family:'Staatliches';
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
      margin-bottom: 5px;
    `}

  }
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

const CenterContainer = styled.div`
  width: 557px;




  ${media.mobileLarge`
    width: calc(100% - 20px);
  `}
  
`;

const Caption = styled.div`
  font-family:"Source Sans Pro";
  color: #666;
  font-size: 0.9em;
  font-style: italic;
  margin: 5px auto;
  width: 450px;
  a {
    color: #AAA;
    /* text-decoration: underline; */
  }



  ${media.mobileLarge`
    width: calc(100% - 20px);
  `}

`;

const ArrowLink = styled.a`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 20;
`;

export default class Hero extends Component {

  handleClick(e){


    var d = document.querySelector(`a[name=${e}]`);

    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = d.getBoundingClientRect(),
        pos = elemRect.top - bodyRect.top;

        
    gsap.to((document.scrollingElement || document.documentElement), 1, { ease: "power3.inOut", scrollTop: pos - 30});
  }

  handleTitleArea(e){

    var d = document.querySelector(`a[name=${e}]`);

    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = d.getBoundingClientRect(),
        pos = elemRect.top - bodyRect.top;

        
    gsap.to((document.scrollingElement || document.documentElement), 1, { ease: "power3.inOut", scrollTop: pos - 100});
  }

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

            <ArrowLink href="javascript:void(0);" onClick={this.handleTitleArea.bind(this, "title-area")}>
              <svg width="55px" height="55px" viewBox="0 0 54 54"><g><circle id="Oval-2" stroke="#797979" cx="27" cy="27" r="26"></circle><polyline id="Path-6" stroke="#979797" points="13 22 26 34.5 39.25 22"></polyline></g></svg>
            </ArrowLink>
            
          </Wrap>
          <a name="title-area"></a>
          <Subtitle>
            If so, then you might have <br/>
            <b>Landlord Tech</b> <br/>
            in your building!
          </Subtitle>

          <Gutter h={20} />
          
          <HeroImageContainer>
            <CenterContainer>
              <img src={`${process.env.PUBLIC_URL}/assets/hero.png`} alt="a facial recognition analysis result" />

              <Caption>
                This image shows the Landlord Tech tool, “Identity Heatmap,” created by Stonelock’s True Frictionless™ Solution. The product uses “near-infrared wavelengths… invisible to the eye… to generate unique biometric metadata” displayed as an anonymized multi-colored figure. Stonelock biometric cameras have been installed in various residential buildings, <a href="https://urbanomnibus.net/2019/11/disruption-at-the-doorstep/" target="_blank" rel="noopener noreferrer" >in which tenants are forced to subject their faces to a technology proven to reproduce racial biases</a>. Recently tenants at Atlantic Plaza Towers in Brooklyn <a href="https://medium.com/@AINowInstitute/atlantic-plaza-towers-tenants-won-a-halt-to-facial-recognition-in-their-building-now-theyre-274289a6d8eb" rel="noopener noreferrer">successfully organized</a> to prevent Stonelock technology from being deployed in their building.
              </Caption>
            </CenterContainer>
          </HeroImageContainer>
          <Gutter h={50} />
          <HeroTitleContainer>
            <HeroTitle>
              <h1 className="title">
                Landlord Tech<br/>
                Watch
              </h1>
              <BtnArea>
                <WhiteBtn onClick={this.handleClick.bind(this, "survey")}>
                  Fill out the survey
                </WhiteBtn>

                <WhiteBtn onClick={this.handleClick.bind(this, "map")}>
                  Explore the map
                </WhiteBtn>
              </BtnArea>
            </HeroTitle>
            <HeroSub>
              Landlord Tech—what the real estate industry describes as residential property technology, is leading to new forms of housing injustice. Property technology, or “proptech,” has grown dramatically since 2008, and applies to residential, commercial, and industrial buildings, effectively merging the real estate, technology, and finance industries. By employing digital surveillance, data collection, data accumulation, artificial intelligence, dashboards, and platform real estate in tenant housing and neighborhoods, Landlord Tech increases the power of landlords while disempowering tenants and those seeking shelter.
            
           <b>Landlord Tech Watch produces data, scholarship, and popular educational materials related to tenant harms imposed by the property technology industry. It exists as a collaboration by members of the <a href="https://antievictionmap.com">Anti-Eviction Mapping Project</a>, the <a href="https://antievictionlab.org">Anti-Eviction Labt</a>, <a href="https://www.peoplepowermedia.org">[people.power.media]</a>, and the <a href="https://www.instagram.com/oceanhillbrownsvillealliance">OceanHill-Brownsville Alliance</a>.</b> 
          </HeroSub>
          </HeroTitleContainer>
          <Gutter h={50} />
          
        </Inner>
      </Container>
    )
  }
}
