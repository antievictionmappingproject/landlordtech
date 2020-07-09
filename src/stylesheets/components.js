import styled from 'styled-components';

const CenterArea = styled.div`
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 1024px;
  margin:0 auto;
`;

const Gutter = styled.div`
  height: ${props => props.h}px;
`;


const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-family: 'Staatliches', cursive;;
  font-size: 3.571em;
  line-height: 1.1;
  text-align: center;
  color: white;
  padding: 0 20px;
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
`;

const Paragraph = styled.div`
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 1.143em;
  line-height: 1.4;
  width: 480px;
  margin: 0 auto;
  color: white;
`;

export {
  CenterArea,
  Gutter,
  Container,
  Title,
  Circle,
  Subtitle,
  Paragraph,
  Inner
};