import styled from 'styled-components';
import media from './media';

const CenterArea = styled.div`
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 1024px;
  margin:0 auto;

  ${media.padLandscape `
    width: calc(100% - 20px);
  `}
`;

const Gutter = styled.div`
  height: ${props => props.h}px;
`;

const WhiteBtn = styled.button`
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 2px 2px 0px #AAA;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Staatliches';
  transform-origin: center;
  margin-right: 10px;
  max-width: 200px;
  cursor:pointer;
  text-align: center;
  font-size:1.1em;

  &:hover {
    opacity: 1;
    background: black;
    color: white;
    border: 1px solid #444;
  }
`;


const Container = styled.div`
  width: 1024px;
  margin: 0 auto;

  ${media.padLandscape `
    width: calc(100% - 20px);
  `}
`;

const Title = styled.div`
  font-family: 'Staatliches', cursive;;
  font-size: 3.571em;
  line-height: 1.1;
  text-align: center;
  color: white;
  padding: 0 20px;



  ${media.padLandscape `
    font-size: 2.3em;
  `}
`;

const Circle = styled.div`
  width: 25px;
  height: 25px;
  background-color: black;
  border-radius: 25px;
  margin: 0 auto;
`;

const Subtitle = styled.div`
  font-family: "Staatliches";
  font-weight: 500;
  font-size: 1.857em;
  line-height: 1.1;
  width: 635px;
  margin: 0 auto;
  color: white;

  ${media.mobileSmall `
    width: auto;
    font-size: 1.4em;
  `}

`;

const Paragraph = styled.div`
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 1.143em;
  line-height: 1.4;
  width: 480px;
  margin: 0 auto;
  color: white;


  ${media.mobileSmall `
    width: auto;
  `}
`;

export {
  CenterArea,
  Gutter,
  Container,
  Title,
  Circle,
  Subtitle,
  Paragraph,
  Inner,
  WhiteBtn
};