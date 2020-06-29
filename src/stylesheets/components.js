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
  font-family: "GT America Expanded";
  font-size: 2.500em;
  line-height: 1.2;
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
  font-family: "GT America Extended";
  font-weight: 500;
  font-size: 1.429em;
  line-height: 1.3;
  width: 635px;
  margin: 0 auto;
  color: white;
`;

const Paragraph = styled.div`
  font-family: "GT America";
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