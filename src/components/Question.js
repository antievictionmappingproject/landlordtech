import React, { Component } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const QImage = styled.img`
  position: relative;
  left: 20%;
  top: -50%;
  width: 60%;
  opacity: 0;
  transition: 0.4s opacity;
`;


const QuestionContainer = styled(motion.div)`
  
  position: absolute; 
  left: 30px;
  top: 30px;
  width: 350px;
  cursor: pointer;

  p {
    z-index:2;
    position: relative;
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




export default class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageShow: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e){

    this.setState({
      imageShow: true
    })
  }

  handleMouseLeave(e){
    
    this.setState({
      imageShow: false
    })
  }

  render() {
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delay: this.props.idx * 0.8
        }
      }
    }

    return (
      
      <QuestionContainer 
        variants={container}
        initial="hidden"
        animate="show"
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave} 
        style={{ left: this.props.pos[0], top: `${this.props.pos[1]}%` }}>
        { this.props.q }
        <QImage style={{ opacity: this.state.imageShow ? 1 : 0, width: this.props.imageWidth, left: this.props.imagePos[0], top: this.props.imagePos[1] }} src={this.props.image} alt={this.props.alt}></QImage>
      </QuestionContainer>
    )
  }
}
