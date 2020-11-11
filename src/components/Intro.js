import React, { Component, Fragment } from 'react'
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
  font-size: 2.5em;
  line-height: 1.1;
  text-indent: -30px;
  margin-left: 30px;
  color: black;
  text-align: left;
  opacity: 0.4;

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
  line-height:1.4;
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

const HeroImage = styled.img`
  width: 100%;
`;

const ListFloatContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  position: relative;


  ${media.mobileSmall `
    display: block;
  `}
`;

const ListFloatTitle = styled.h3`
  font-family: 'Staatliches', cursive;
  padding-bottom: 15px;
  font-size: 2.285em;
`;

const ListFloatDesc = styled.div`
  font-family: "Source Sans Pro";
  color: black;
  line-height: 1.3;
  font-style: italic;
`;

const ListFloatColumn = styled.div`
  width: calc(50% - 40px);

  ${media.mobileSmall `
    width: auto;
  `}
`;

const ListFloatImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;

  ${media.mobileSmall `
    position: static;
    width: 100%;
  `}
`;

const Credit = styled.div`
  font-style: italic;
  font-family: "Source Sans Pro";
  opacity: 0.5;
  margin-bottom: 20px;
  font-size: 0.8em;
`;

const ListFloatGutter = styled.div`
  height: 500px;
  ${media.mobileSmall `
    height: 50px;
  `}
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
      <Fragment>
        <HeroImage src={`${process.env.PUBLIC_URL}/assets/hero_image.png`} alt="landlord tech illustration" />
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
            By Landlord Tech, we mean technical products and platforms that have facilitated the merging of the technology and real estate industries in novel ways, particularly as they impact tenant housing. Our research has led to two major categories of what we are calling Landlord Tech: surveillance and speculation, both of which are tied up in gentrification. 

          </BlackSubtitle>
          <Gutter h={50} />
          <BlackParagraph>
            There are few laws and regulations governing the collection and use of data in the context of Landlord Tech. Because it is generally sold to landlords and property managers, not tenants, Landlord Tech is often installed without notifying or discussing potential harms with tenants and community members. These harms include the possibility that sensitive and personal data can be handed over to the police, ICE, or other law enforcement and government agencies. Landlord Tech can also be used to automate evictions, racial profiling, and tenant harassment. In addition, Landlord Tech is used to abet real estate speculation and gentrification, making buildings more desirable to whiter and wealthier tenants, while feeding real estate and tech companies with property - be that data or real estate. Landlord Tech tracking platforms have increasingly been <a href="http://bostonreview.net/class-inequality-science-nature/erin-mcelroy-meredith-whittaker-genevieve-fried-covid-19-crisis" target="_blank">marketed to landlords as solutions to Covid-19</a>, leading to new forms of residential surveillance. 
  {/*           
            While landlord tech has celebrated the “disruption” of the real estate industry with new technology and data infrastructures, it often exacerbates housing inequality, racial profiling, speculation, and gentrification. We are particularly worried that landlord tech is leading to new forms of housing injustice in the wake of COVID-19 by amplifying surveillance, tracking, data accumulation, and algorithmic means testing into domestic and neighborhood spaces. */}
          </BlackParagraph>
          
          <Gutter h={100} />
          
          <ListFloatContainer>
            <ListFloatColumn>
              <ListFloatTitle>
                Surveillance Tech
              </ListFloatTitle>
              <ListFloatDesc>
                Surveillance Tech perpetuates housing inequality through predatory data collection, automatic profiling, and eviction. 
              </ListFloatDesc>
              <Gutter h={20} />
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
            </ListFloatColumn>
            <ListFloatImage src={`${process.env.PUBLIC_URL}/assets/surveillance_tech_02.png`} alt="surveillance tech illustration" style={{ left: "50%"}} />
            <ListFloatImage src={`${process.env.PUBLIC_URL}/assets/surveillance_tech_01.png`} alt="surveillance tech illustration" style={{ left: "30%", top: "95%"}}  />
            
          </ListFloatContainer>

          <ListFloatGutter />

          <ListFloatContainer>

           
            <ListFloatColumn>

            </ListFloatColumn>
            <ListFloatColumn>
              <ListFloatTitle>
                Speculation Tech
              </ListFloatTitle>

              <ListFloatDesc>
                Speculation Tech is facilitating capital accumulation in ways that undermine housing stability and affordability.
              </ListFloatDesc>

              <Gutter h={20} />
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
            </ListFloatColumn>
            <ListFloatImage src={`${process.env.PUBLIC_URL}/assets/speculation_tech_01.png`} alt="speculation tech illustration" style={{ left: -30, top: -30 }} />
            <ListFloatImage src={`${process.env.PUBLIC_URL}/assets/speculation_tech_02.png`} alt="speculation tech illustration" style={{ width: 350, left: "30%", top: "calc(100% + 20px)"}}  />
          </ListFloatContainer>
          <ListFloatGutter />

          {
            currentNomenclature ? 
            <Nomenclature /> : null
          }
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

export default connect(mapStateToProps)(Intro);
