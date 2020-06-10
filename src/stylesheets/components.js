import styled from 'styled-components';
import chroma from 'chroma-js';
export const RED_COLOR = "#555";
export const SHADOW_COLOR = "#1b1b1b";


const Container = styled.div`
  padding: 60px 100px;
  width: calc(100vw - 200px);

  @media (max-width: 1100px) {
    padding: 30px 70px;
    width: calc(100vw - 140px);
  }

  @media (max-width: 1024px) {
    padding: 20px;
    width: calc(100vw - 40px);
  }
`;


const LogoImg = styled.img`
  width: auto;

  @media (max-width: 414px) {
    width: 100%;
  }
`;

const Gutter = styled.div`
  height: ${props => props.h}px;
`;

const Title = styled.h2`
  font-family: "Austin News Deck";
  font-size: 3.2em;
  line-height:1.1;
  color: white;
  max-width: 700px;


  @media (max-width: 1024px) {
    font-size:2.0em;
    width: 100%;
  }

`;

const StickyContainer = styled.div`
  position:relative;
  margin-top: 50px;
`;

const MidText = styled.p`
  font-family: "Source Sans PRo";
  font-size: 2.0em;
  line-height: 1.2;
  color: #9c9c9c;

  span.white {
    color: white;
  }



  @media (max-width: 414px) {
    font-size:1.5em;
  }
`;


const ColorRedSpan = styled.span`
  color: #FB6848;
`;
const ColumnContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;

  
  @media (max-width: 1100px) {
    width: 100%;
    display: block;
  }
`;

const Column = styled.div`
  width: calc(50% - 50px);
  max-width: 500px;

  @media (max-width: 1100px) {
    width: calc(100% - 20px);
  }
`;


const AppleBox = styled.div`
  height: 200px;
`


const BigText = styled.div`
  width: 720px;
  color: #7288D7;
  font-family: "Source Sans PRo";
  font-size:3.0em;
  line-height: 1.15;
  margin: 0 auto;


  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    font-size:1.9em;
  }

`;

const SmallText = styled.div`
  text-align: center;
  color: #7D92DE;
  width: 400px;
  font-size:1.1em;
  line-height:1.3;
  margin: 0 auto;
`;


const ScrollContainer = styled.div`
  margin-right: 50px;
  position:relative;
  width: 450px;
  left: 50px;


  @media (max-width: 1024px) {
    left: 50px;
    width: 90vw;
  }



  @media (max-width: 414px) {
    left: 20px;
  }



  .back {

    background: black;
  }
`;


const ScrollLabel = styled.div`
  height: 100vh;
  width: 450px;
  
  z-index: 10;

  

  @media (max-width: 414px) {
    width: calc(100vw - 40px);

  }

  img {


    @media (max-width: 414px) {
        width: 100%;
    }
  }

  div.back { 
    font-family: "Hepta Slab";
    font-size: 1.6em;
    line-height: 1.2;
    color: white;
    font-variation-settings: "wght" 300;

    @media (max-width: 414px) {
      font-size: 1.3em;
    }


    a {
      text-decoration: underline;
      text-decoration-thickness: 0.2rem;
    }

    b{
      font-variation-settings: "wght" 400;

    }

    @media (max-width: 1024px) {
      font-size: 1.5em;
    }
  }

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const FullContainer = styled.div`
  margin: 100px 0;
`;

const BasicButton = styled.button`
  border:none;
  background: ${props => props.selected ? SHADOW_COLOR : "#1d1d1d"};
  box-shadow: 2px 2px 0px #303030;
  color: ${props => props.selected ? "#FFFFFF" : "#474747"};
  
  border-radius: 5px;
  padding: 12px 15px;

  font-family: "Source Sans Pro";
  font-weight: 600;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s all;

  :disabled {
    background: #999999;
    box-shadow: 2px 2px 0px #888888;
    color: #AAAAAA;
  }

  &:hover, &:active {
    background: ${ RED_COLOR };
    box-shadow: 3px 3px 0px ${props => props.selected ? chroma(RED_COLOR).darken(1.5).hex() : "#303030"};
  }

`;


export {
  LogoImg,
  ScrollContainer,
  ScrollLabel,
  AppleBox,
  Container,
  Title,
  MidText,
  Gutter,
  ColumnContainer,
  Column,
  ColorRedSpan,
  BigText,
  SmallText,
  StickyContainer,
  FullContainer,
  BasicButton
};