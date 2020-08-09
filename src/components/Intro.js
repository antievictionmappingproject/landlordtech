import React, { Component } from 'react'
import { Container, Title, Gutter, Circle, Subtitle, Paragraph } from '../stylesheets/components';
import styled from 'styled-components';
import { Nomenclature } from './';
import { changeCurrentNomenclature } from '../actions';
import { TECH_LIST } from '../constants/defaults';
import { connect } from 'react-redux';
import _ from 'lodash';
import media from '../stylesheets/media';

const BlackTitle = styled(Title)`
  color: black;
  width: 400px;
  margin: 0 auto;
  
  ${media.mobileSmall `
    width: auto;
  `}
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
  

  ${media.padLandscape `
    font-size:2.3em;
  `}
`;

const ListTitle = styled.div`
  font-family: "Source Sans Pro";
  color: black;
  margin: 5px 0;
  font-weight: 600;
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

    let indirectTechList = _.filter(TECH_LIST, tl => tl.type === "indirect");
    let directTechList = _.filter(TECH_LIST, tl => tl.type === "direct");
    
    return (
      <Container>
        <a name="whatis"></a>
        <Gutter h={100} />
        <BlackTitle>
          What is <br/>
          Landlord Tech?
        </BlackTitle>
        <Gutter h={50} />
        <Circle />
        <Gutter h={50} />
        
        <BlackSubtitle>
          By Landlord Tech, we mean technical products and platforms that have facilitated the merging of the technology and real estate industries in novel ways, particularly as they impact tenant housing.
        </BlackSubtitle>
        <Gutter h={50} />
        <BlackParagraph>
          There are few laws and regulations governing the collection and use of data in the context of landlord tech, and because it is generally sold to owners and landlords, not tenants, it’s often installed without notifying or discussing potential harms with tenants and community members. These harms include the possibility that sensitive data could be handed over to Police, ICE, or other law enforcement or government agencies, and that it can be used to aid in evictions, gentrification, and tenant harassment.
{/*           
          While landlord tech has celebrated the “disruption” of the real estate industry with new technology and data infrastructures, it often exacerbates housing inequality, racial profiling, speculation, and gentrification. We are particularly worried that landlord tech is leading to new forms of housing injustice in the wake of COVID-19 by amplifying surveillance, tracking, data accumulation, and algorithmic means testing into domestic and neighborhood spaces. */}
        </BlackParagraph>
         
        <Gutter h={50} />
        <ListTitle>
          Here are examples of landlord tech. <br/>
          Click on each to learn more about how these technologies function, and <br/>
          the potential harms.
        </ListTitle>


        <ListContainer>
          <LineArea>
            <svg width="2" height="69" viewBox="0 0 2 69" fill="none">
              <path d="M1 0V69" stroke="black"/>
            </svg>
          </LineArea>
          <ListTitle>
            Surveillance Tech (Direct Impact to Tenants):
          </ListTitle>
          {
            _.map (directTechList, tech => {
              // eslint-disable-next-line no-unused-expressions
              return (
                <TechLink key={tech.id} href="javascript:void();" onClick={this.handleClick.bind(this, tech.id)}>
                  { tech.title }
                </TechLink>
              )
            })
          }

          <LineArea>
            <svg width="2" height="50" viewBox="0 0 2 50" fill="none">
              <path d="M1 0V150" stroke="black"/>
            </svg>
          </LineArea>

          <ListTitle>
            Speculation Tech (Indirect Impact to Tenants):
          </ListTitle>
          {
            _.map (indirectTechList, tech => {
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