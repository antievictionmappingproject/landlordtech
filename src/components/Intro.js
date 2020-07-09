import React, { Component } from 'react'
import { Container, Title, Gutter, Circle, Subtitle, Paragraph } from '../stylesheets/components';
import styled from 'styled-components';
import { Nomenclature } from './';
import { changeCurrentNomenclature } from '../actions';
import { TECH_LIST } from '../constants/defaults';
import { connect } from 'react-redux';
import _ from 'lodash';

const BlackTitle = styled(Title)`
  color: black;
  width: 400px;
  margin: 0 auto;
`;

const BlackSubtitle = styled(Subtitle)`
  color: black;
`;

const BlackParagraph = styled(Paragraph)`
  color: black;
`;

const TechLink = styled.a`
  display: block;
  font-family: 'Staatliches', cursive;
  padding-bottom: 5px;
  font-size: 3.571em;
  line-height: 1.2;
  color: black;
  text-align: center;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }
`;

const ListTitle = styled.div`
  font-family: "Source Sans Pro";
  color: black;
  margin: 5px 0;
  font-weight: 400;
  text-align: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LineArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`;


class Intro extends Component {
  handleClick(id){

    this.props.dispatch(changeCurrentNomenclature(id));

  }

  render() {
    let { currentNomenclature } = this.props;
    return (
      <Container>
        <Gutter h={100} />
        <BlackTitle>
          What is <br/>
          Landlord Tech?
        </BlackTitle>
        <Gutter h={50} />
        <Circle />
        <Gutter h={50} />
        
        <BlackSubtitle>
          By Landlord Tech, we mean technical products and platforms that have facilitated the merging of the technology and real estate industries in novel ways. 
        </BlackSubtitle>
        <Gutter h={50} />
        <BlackParagraph>
          While such technologies have celebrated the “disruption” of the real estate industry with new technology and data infrastructures, they often exacerbate housing inequality and gentrification. We are particularly worried that proptech is leading to new forms of housing injustice in the wake of COVID-19—expanding surveillance, data accumulation, and algorithmic means testing—in ways that increase the power of landlords and further disempower tenants and those seeking shelter.
        </BlackParagraph>
        
        <Gutter h={50} />
        <ListTitle>
          For instance...
        </ListTitle>


        <ListContainer>
          <LineArea>
            <svg width="2" height="69" viewBox="0 0 2 69" fill="none">
              <path d="M1 0V69" stroke="black"/>
            </svg>
          </LineArea>
          {
            _.map (TECH_LIST, tech => {
              // eslint-disable-next-line no-unused-expressions
              return (
                <TechLink key={tech.id} href="javascript:void();" onClick={this.handleClick.bind(this, tech.id)}>
                  { tech.title }
                </TechLink>
              )
            })
          }

          <LineArea>
            <svg width="2" height="150" viewBox="0 0 2 150" fill="none">
              <path d="M1 0V150" stroke="black"/>
            </svg>
          </LineArea>
            
        </ListContainer>
        
        <Gutter h={100} />

        {
          currentNomenclature ? 
          <Nomenclature /> : null
        }
      </Container>
    )
  }
}

let mapStateToProps = state => {
  return {
    currentNomenclature: state.currentNomenclature
  }
}

export default connect(mapStateToProps)(Intro);