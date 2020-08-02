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
  left: 50%;
  top: 50%;
  width: calc(100vw - 50px);
  max-width: 850px;
  height: calc(100vh - 50px);
  transform: translate(-50%, -50%);
  background-color: black;
  z-index: 99999;
  overflow-x: hidden;
  overflow-y: scroll;

  ${media.mobileLarge `
    width: calc(100vw - 100px);
    height: calc(100vh - 100px);
  `} 

  ${media.mobileSmall `
    width: calc(100vw - 20px);
    height: calc(100vh - 120px);
  `} 
`;

const NCTitle = styled(Title)`
`;

const NCSubtitle = styled(Subtitle)`
  font-size: 2.0em;
  text-align: center;
  
`;


const ExampleInner = styled(Inner)`
  position: relative;
  margin-left: 10px;
  width: 100%;
  height: 650px;
  background-color: #111;

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
    max-width: 150px;
    cursor:pointer;
    transition: 0.4s transform;
    &:hover {
      transform-origin: center;
      transform: translateX(-50%) translateY(-50%) scale(1.3, 1.3);
      z-index: 88888;

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
  font-family: 'Staatliches';
  color: white;
  line-height: 1.1;
  font-size: 1.5em;
  margin-bottom: 15px;
  width: 80%;

  ${media.mobileSmall `
    width: calc(100% - 20px);
  `}
`;

class Nomenclature extends Component {
  constructor(props){
    super(props);
    this.exampleRef = React.createRef();
    this.tickActions = this.tickActions.bind(this);

  }
  componentDidMount(){
    document.body.style.overflow = 'hidden';
    
    this.initForce();
  }

  initForce(){
    let { currentNomenclature, screenWidth } = this.props;
    let tech = _.find(TECH_LIST, tech => tech.id === currentNomenclature);

    let examples = _.map(tech.examples, example => {
      return {
        properties: example
      };
    });

    let simulation = d3.forceSimulation()
					//add nodes
					.nodes(examples);	
    
    let center = [ 800 / 2, 650 / 2];

    if (screenWidth <= 414) {

      center[0] = (screenWidth - 20) / 2;

    } else if (screenWidth <= 768) {
      
      center[0] = (screenWidth - 100) / 2; 
    } 

    simulation
        .force("charge_force", d3.forceManyBody())
        .force("center_force", d3.forceCenter(center[0], center[1]))
        .force("collision_force", d3.forceCollide().radius(d => d.properties.type === "img" ? 90 : (d.properties.desc.length > 25 ? 70 : d.properties.desc.length * 1.3)));

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
          return d.properties.type === "text" ? document.createElement('div') : document.createElement('img')
        })
        .attr("class", "title")
        .text(d => {
          return d.properties.type === "text" ? d.properties.desc : "";
        })
        .attr("src", d => {
          return d.properties.type === "img" ? d.properties.desc : "";
        })
      


    this.nodes = innerElem.selectAll("div.example");
    simulation.on("tick", this.tickActions);
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
        <Back onClick={this.handleBackClick.bind(this)}>
          <CloseBtn>

            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M1 1L27 27" stroke="#D7D7D7"/>
              <path d="M27 1L1 27" stroke="#D7D7D7"/>
            </svg>

          </CloseBtn>
          
        </Back>
        <Container>
          <Gutter h={50} />

          <CenterArea style={{color: "white", textAlign: 'center'}}>
            Types of <br/>
            Landlord Tech
          </CenterArea>
          <Gutter h={20} />
          <CenterArea>
            <NCTitle>
              { tech.title }
            </NCTitle>
          </CenterArea>

          <Gutter h={25} />

          <CenterArea>
            <NCSubtitle>
              { tech.services }
            </NCSubtitle>
          </CenterArea>

          <Gutter h={50} />
          <CenterArea>
            <NCSubtitle style={{ textAlign: 'center' }}>
              Harms for Tenants
            </NCSubtitle>
          </CenterArea>

          <Gutter h={20} />

            {
              _.map(tech.harm, (h, i) => {
                return (
                  <CenterArea key={i}>
                    <HarmText>
                      { h }
                    </HarmText>
                  </CenterArea>
                );
              })
            }



            <Gutter h="20" />
          <CenterArea>
            <NCSubtitle style={{ textAlign: 'center' }}>
              Examples
            </NCSubtitle>
          </CenterArea>
          <Gutter h={15} />

          <CenterArea>
            <ExampleInner ref={this.exampleRef}>
            </ExampleInner>
          </CenterArea>
          
          <Gutter h={50} />
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