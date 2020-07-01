import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeCurrentNomenclature } from '../actions';
import { Title, CenterArea, Gutter, Subtitle, Inner } from '../stylesheets/components';
import { TECH_LIST } from '../constants/defaults';
import _ from 'lodash';
import * as d3 from 'd3';

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
`;

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: calc(100vw - 50px);
  max-width: 800px;
  height: calc(100vh - 50px);
  transform: translate(-50%, -50%);
  background-color: black;
  z-index: 99999;
  overflow-y: scroll;
`;

const NCTitle = styled(Title)`
  width: 300px;
`;

const NCSubtitle = styled(Subtitle)`
  font-size: 1.071em;
  width: 370px;
`;


const ExampleInner = styled(Inner)`
  position: relative;
  width: 100%;
  height: 400px;

  div.example {
    position: absolute;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 2px 2px 0px #FFFFFF;
    border-radius: 10px;
    padding: 8px;
    transform: translate(-50%, -50%);
    max-width: 200px;

    .title {
      font-family: "GT America Extended";
      font-size: 1.0em;
      line-height: 1.2;
      text-align: center;
      color: #000000;
    }
  }
`;

const HarmText = styled.div`
  font-family: "GT America Extended";
  color: white;
  line-height: 1.2;
  margin-bottom: 15px;
  width: 40%;
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
    let { currentNomenclature } = this.props;
    let tech = _.find(TECH_LIST, tech => tech.id === currentNomenclature);

    let examples = _.map(tech.examples, example => {
      return {
        str: example
      };
    });

    let simulation = d3.forceSimulation()
					//add nodes
					.nodes(examples);	
                    
    simulation
        .force("charge_force", d3.forceManyBody())
        .force("center_force", d3.forceCenter(800 / 2, 400 / 2))
        .force("collision_force", d3.forceCollide([25]));

    
    //draw circles for the nodes 
    let innerElem = d3.select(this.exampleRef.current);
    innerElem.selectAll("div.example")
      .data(examples)
      .enter()
      .append("div")
      .attr("class", 'example')
        .append("div")
        .attr("class", "title")
        .text(d => d.str);


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
        </Back>
        <Container>
          <Gutter h={50} />

          <CenterArea style={{color: "white"}}>
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
              Examples
            </NCSubtitle>
          </CenterArea>
          <Gutter h={15} />

          <CenterArea>
            <ExampleInner ref={this.exampleRef}>
            </ExampleInner>
          </CenterArea>
          <Gutter h="20" />
          <CenterArea>
            <NCSubtitle style={{ textAlign: 'center' }}>
              Harms for Tenants
            </NCSubtitle>
          </CenterArea>

          <Gutter h={20} />

            {
              _.map(tech.harm, (h, i) => {
                return (
                  <CenterArea>
                    <HarmText key={i}>
                      { h }
                    </HarmText>
                  </CenterArea>
                );
              })
            }

          <Gutter h={50} />
        </Container>
      </Fragment>
    )
  }
}

let mapStateToProps = state => {
  return {
    currentNomenclature: state.currentNomenclature
  }
}

export default connect(mapStateToProps)(Nomenclature);