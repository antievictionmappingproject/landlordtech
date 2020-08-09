import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeCurrentNomenclature } from '../actions';
import { Title, CenterArea, Gutter, Subtitle, Inner } from '../stylesheets/components';
import { TECH_LIST } from '../constants/defaults';
import _ from 'lodash';
import * as d3 from 'd3';
import media from '../stylesheets/media';

const Fragment = React.Fragment;
const Back = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
  z-index: 99998;
  cursor:pointer;
`;

const CloseBtn = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 1000001;
  cursor:pointer;
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 99999;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const NCTitle = styled(Title)`
  text-align: left;
  width: 300px;
  font-size: 2.857em;
  padding: 0;

  ${media.mobileSmall `
    margin-bottom: 10px;
  `}
`;

const NCSubtitle = styled(Subtitle)`
  font-size: 2.143em;
  text-align: left;
  width: 450px;
  margin: 0;
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  ${media.mobileSmall `
    display: block;
  `}
`;

const HarmHeader = styled(ColumnContainer)`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 15px 20px;

  ${media.mobileSmall `
    display: none;
  `}
`;

const HarmArea = styled(ColumnContainer)`
  border-bottom: 1px solid #555555;
  padding: 15px 20px;
`;

const ColumnLeft = styled.div`
  width: calc(40% - 20px);
  font-size: 1.0em;
  font-family: "Source Sans Pro";
  color: white;

  ${media.mobileSmall `
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid #333; 
  `}
`;
const ColumnRight = styled.div`
  width: calc(60% - 20px);
  font-size: 1.0em;
  font-family: "Source Sans Pro";
  color: white;

  ${media.mobileSmall `
      width: 100%;
  `}
`;

const MainDesc = styled.div`
  margin-top: 10px;
  p {
    font-family: "Source Sans Pro";
    color: #B5B5B5;
    line-height: 1.4;
    font-size:1.0em;
    width: 400px;

    ${media.mobileSmall `
      width: 100%;
    `}
    a {
      color: white;
      font-weight: 600;
    }
  }
`;


const ExampleInner = styled(Inner)`
  position: relative;
  width: 100%;
  height: 800px;

  ${media.mobileSmall `
    height: 400px;
  `}
  div.example {
    position: absolute;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 2px 2px 0px #AAA;
    border-radius: 10px;
    padding: 8px;
    transform: translate(-50%, -50%);
    transform-origin: center;
    max-width: 120px;
    cursor:pointer;
    transition: 0.4s transform, filter;
    filter: grayscale(100%);
    

    ${media.mobileSmall `
      max-width: 70px;
    `}

    &:hover {
      transform-origin: center;
      transform: translateX(-50%) translateY(-50%) scale(1.3, 1.3);
      z-index: 88888;
      filter: grayscale(0);

    }

    .title {
      font-family: 'Staatliches';
      font-size: 1.0em;
      line-height: 1.2;
      text-align: center;
      color: #000000;
    }

    img {
      width: 100%;
    }
  }
`;

const HarmText = styled.div`
  color: white;
  font-family: 'Staatliches';
  line-height: 1.4;
  font-size: 1.429em;
  max-width: 500px;
  text-indent: -50px;
  margin-left: 50px;

  ${media.mobileSmall `
    font-size: 1.2em;
  `}
`;


class Nomenclature extends Component {
  constructor(props){
    super(props);
    this.exampleRef = React.createRef();
    this.tickActions = this.tickActions.bind(this);
    this.keyPress = this.keyPress.bind(this);

  }
  componentDidMount(){
    document.body.style.overflow = 'hidden';
    
    this.initForce();
    document.addEventListener("keyup", this.keyPress);
  }
  componentWillUnmount(){
    document.removeEventListener("keyup", this.keyPress);
  }

  keyPress(evt){
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      this.props.dispatch(changeCurrentNomenclature(null));
    }
  }

  getCenter(screenWidth) {
    let center = [ screenWidth / 2, 800 / 2];

    if (screenWidth <= 650) {

      center[0] = (screenWidth - 20) / 2;
      center[1] = 400 / 2;

    } else if (screenWidth <= 768) {
      
      center[0] = (screenWidth - 100) / 2; 
    } 

    return center;
  }

  componentDidUpdate(prevProps){
    if (prevProps.screenWidth !== this.props.screenWidth) {
      let center = this.getCenter(this.props.screenWidth);
      let radius = 70;


      if (window.innerWidth <= 650) {
        radius = 10;
      } 
      this.simulation.force("center_force", d3.forceCenter(center[0], center[1]));
      this.simulation.force("collision_force", d3.forceCollide().radius(radius));
      this.simulation.restart();
    }
  }

  initForce(){
    let { currentNomenclature, screenWidth } = this.props;
    let tech = _.find(TECH_LIST, tech => tech.id === currentNomenclature);

    let examples = _.map(tech.companies, example => {
      return {
        properties: example
      };
    });

    this.simulation = d3.forceSimulation()
					//add nodes
					.nodes(examples);	
    
    let center = this.getCenter(this.props.screenWidth);

    let radius = 70;


    if (window.innerWidth <= 650) {
      radius = 10;
    } 


    this.simulation
        .force("charge_force", d3.forceManyBody())
        .force("center_force", d3.forceCenter(center[0], center[1]))
        .force("collision_force", d3.forceCollide().radius(radius));

    //draw circles for the nodes 
    let innerElem = d3.select(this.exampleRef.current);
    innerElem.selectAll("div.example")
      .data(examples)
      .enter()
      .append("div")
      // .on('mouseover', function(e) {
      //   d3.select(this).style('z-index', 88888);
      // })
      .attr("class", 'example')
        .append(d => {
          // debugger;
          return document.createElement('img')
        })
        .attr("class", "title")
        .attr("src", d => {
          return d.properties.img;
        })
        .attr("alt", d => {
          return d.properties.name;
        })
      .on('click', d => {
        window.open(d.properties.link, '_blank');
      });
      


    this.nodes = innerElem.selectAll("div.example");
    this.simulation.on("tick", this.tickActions);
  }

  tickActions(e){
    this.nodes
      .style("left", function(d) { 
        return d.x + "px"; 
      })
      .style("top", function(d) { 
        return d.y + "px"; 
      });
  }

  componentWillUnmount(){
    document.body.style.overflow = 'auto';

  }

  handleBackClick(e){
    this.props.dispatch(changeCurrentNomenclature(null));
  }

  render() {
    let { currentNomenclature } = this.props;
    let tech = _.find(TECH_LIST, tech => tech.id === currentNomenclature);

    return (
      <Fragment>
        <Container>

          <CloseBtn onClick={this.handleBackClick.bind(this)}>

            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M1 1L27 27" stroke="#D7D7D7"/>
              <path d="M27 1L1 27" stroke="#D7D7D7"/>
            </svg>

          </CloseBtn>

          <Gutter h={25} />
          <ColumnContainer>
            <ColumnLeft>
              <NCTitle>
                { tech.title }
              </NCTitle>
            </ColumnLeft>
            <ColumnRight>
              <NCSubtitle>
                { tech.subtitle }
              </NCSubtitle>
              <MainDesc dangerouslySetInnerHTML={{ __html: tech.services }} />
            </ColumnRight>
          </ColumnContainer>

          <Gutter h={50} />
          <ColumnContainer>
            <NCSubtitle>
              Harm for Tenants
            </NCSubtitle>
          </ColumnContainer>
          <Gutter h={20} />

          <HarmHeader>
            <ColumnLeft>
              Example of { tech.title }
            </ColumnLeft>
            <ColumnRight>
              Harms for Tenants
            </ColumnRight>
          </HarmHeader>
          {
            _.map(tech.harms, (harm, i) => {
              return (
                <HarmArea key={i}>
                  <ColumnLeft>
                    <HarmText>
                      { harm.example }
                    </HarmText>
                  </ColumnLeft>
                  <ColumnRight>
                    {
                      _.map(harm.harms, h => {
                        return (
                          <HarmText>
                            { h }
                          </HarmText>
                        )
                      })
                    }
                  </ColumnRight>
                </HarmArea>
              )
            })
          }


          <Gutter h={50} />
          <ColumnContainer>
            <NCSubtitle>
              Companies
            </NCSubtitle>
          </ColumnContainer>
          <Gutter h={20} />

          <ExampleInner ref={this.exampleRef}>
          </ExampleInner>
        </Container>
      </Fragment>
    )
  }
}

let mapStateToProps = state => {
  return {
    screenWidth: state.screenWidth,
    screenHeight: state.screenHeight,
    currentNomenclature: state.currentNomenclature
  }
}

export default connect(mapStateToProps)(Nomenclature);