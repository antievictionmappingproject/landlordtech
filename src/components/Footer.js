import React, { Component } from 'react';
import styled from 'styled-components';
import { Inner, Title, Gutter } from '../stylesheets/components';
import media from '../stylesheets/media';

const FooterArea = styled.footer`
  background-color: black;
`;

const ColumnContainer = styled.div` 
  display: flex;
  justify-content: space-between;


  ${media.mobileSmall `
    display: block;
  `}

`;

const Column = styled.div`
  width: calc(50% - 20px);
  
  ${media.mobileSmall `
    width: 100%;
  `}

`;

const Subtitle = styled.div`
  font-family: "Staatliches";
  font-weight: 400;
  font-size: 1.3em;
  color: white;
  margin-bottom: 3px;
  line-height: 1.1;

  a {
    font-family: "Staatliches";
    font-weight: 400;
    font-size: 1.0em;
    color: white;
    margin-bottom: 3px;
    line-height: 1.1;
  }
`;

const Authors = styled.div`
  font-family: "Source Sans Pro";
  color: white;
  line-height: 1.5;
`;

const CreditAuthors = styled.div`
  font-family: "Source Sans Pro";
  color: #AAA;
  line-height: 1.5;

  i {
    font-style: italic;
  }
`;

const Publisher = styled.div`
  font-family: "Source Sans Pro";
  color: #888;
  font-style: italic;
`;

const ArticleArea = styled.div`
  margin: 10px 0 30px 0;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterArea>
        <a name="articles"></a>
        <Inner>
          <Gutter h={50} />
          <ColumnContainer>
            <Column>
              <Title>
                Resources
              </Title>
              <Gutter h={10}></Gutter>

              <ArticleArea>
                <Subtitle>
                  <a href="https://www.ijurr.org/article/dis-possessory-data-politics-from-tenant-screening-to-anti-eviction-organizing/" target="_blank" rel="noopener noreferrer">Dis/possessory Data Politics: From Tenant Screening to Anti-Eviction Organizing</a>
                </Subtitle>
                <Authors>
                  Erin McElroy
                </Authors>
                <Publisher>
                  IJURR
                </Publisher>
              </ArticleArea>
      
              <ArticleArea>
                <Subtitle>
                  <a href="https://logicmag.io/beacons/organizing-as-joy-an-ocean-hill-brownsville-story-with-tranae-moran-and/" target="_blank" rel="noopener noreferrer">Organizing as Joy</a>
                </Subtitle>
                <Authors>
                  Tranae' Moran and Fabian Rogers
                </Authors>
                <Publisher>
                  Logic Magazine
                </Publisher>
              </ArticleArea>
      
            <ArticleArea>
                <Subtitle>
                  <a href="https://doi.org/10.1080/10511482.2022.2113815" target="_blank" rel="noopener noreferrer">Which Information Matters? Measuring Landlord Assessment of Tenant Screening Reports</a>
                </Subtitle>
                <Authors>
                  Wonyoung So
                </Authors>
                <Publisher>
                  Housing Policy Debate
                </Publisher>
              </ArticleArea>

              <ArticleArea>
                <Subtitle>
                  <a href="https://journals.sagepub.com/doi/full/10.1177/02637758221088868#bibr41-02637758221088868" target="_blank" rel="noopener noreferrer">Automating Gentrification: Landlord Technologies and Housing Justice Organizing in New York City homes</a>
                </Subtitle>
                <Authors>
                  Erin McElroy and Manon Vergerio
                </Authors>
                <Publisher>
                  Environment and Planning D: Society and Space
                </Publisher>
              </ArticleArea>


              <ArticleArea>
                <Subtitle>
                  <a href="https://static1.squarespace.com/static/52b7d7a6e4b0b3e376ac8ea2/t/63601bd6c1d8e23287357db0/1667242990765/AEMP-LLTech-Final-r2.pdf" target="_blank" rel="noopener noreferrer">Landlord Technologies of Gentrification: Facial Recognition and Building Access Technologies in New York City Homes</a>
                </Subtitle>
                <Authors>
                  Erin McElroy, Manon Vergerio, & Paula Garcia-Salazar
                </Authors>
                <Publisher>
                  Anti-Eviction Mapping Project
                </Publisher>
              </ArticleArea>

              <ArticleArea>
                <Subtitle>
                  <a href="https://shelterforce.org/2021/03/25/keeping-an-eye-on-landlord-tech/" target="_blank" rel="noopener noreferrer">Keeping an Eye on Landlord Tech</a>
                </Subtitle>
                <Authors>
                  Erin McElroy, Wonyoung So, and Nicole Weber 
                </Authors>
                <Publisher>
                  Shelterforce
                </Publisher>
              </ArticleArea>
              <ArticleArea>
                <Subtitle>
                  <a href="https://metropolitics.org/Landlord-Tech-in-Covid-19-Times.html" target="_blank" rel="noopener noreferrer">Landlord Tech in Covid-19 Times</a>
                </Subtitle>
                <Authors>
                  Erin McElroy and Wonyoung So
                </Authors>
                <Publisher>
                  Metropolitics
                </Publisher>
              </ArticleArea>
              <ArticleArea>
                <Subtitle>
                  <a href="http://bostonreview.net/class-inequality-science-nature/erin-mcelroy-meredith-whittaker-genevieve-fried-covid-19-crisis" target="_blank" rel="noopener noreferrer">COVID-19 Crisis Capitalism Comes to Real Estate</a>
                </Subtitle>
                <Authors>
                  Erin McElroy, Meredith Whittaker, Genevieve Fried
                </Authors>
                <Publisher>
                  Boston Review
                </Publisher>
              </ArticleArea>
              <ArticleArea>
                <Subtitle>
                  <a href="https://urbanomnibus.net/2019/11/disruption-at-the-doorstep/" target="_blank" rel="noopener noreferrer">Disruption at the Doorstep</a>
                </Subtitle>
                <Authors>
                  Erin McElroy
                </Authors>
                <Publisher>
                  Urban Omnibus
                </Publisher>
              </ArticleArea>
              <ArticleArea>
                <Subtitle>
                  <a href="https://www.e-flux.com/architecture/housing/333698/how-to-pick-a-smart-lock/" target="_blank" rel="noopener noreferrer">How to Pick a Smart Lock</a>
                </Subtitle>
                <Authors>
                  Miranda Hall
                </Authors>
                <Publisher>
                  e-flux
                </Publisher>
              </ArticleArea>
              <ArticleArea>
                <Subtitle>
                  <a href="https://www.publicbooks.org/uploading-housing-inequality-digitizing-housing-justice/" target="_blank" rel="noopener noreferrer">Uploading Housing Inequality, Digitizing Housing Justice?</a>
                </Subtitle>
                <Authors>
                  Desiree Fields
                </Authors>
                <Publisher>
                  Public Books
                </Publisher>
              </ArticleArea>
              <ArticleArea>
                <Subtitle>
                  <a href="https://medium.com/@AINowInstitute/atlantic-plaza-towers-tenants-won-a-halt-to-facial-recognition-in-their-building-now-theyre-274289a6d8eb" target="_blank" rel="noopener noreferrer">Atlantic Plaza Towers tenants won a halt to facial recognition in their building: Now they’re calling on a moratorium on all residential use</a>
                </Subtitle>
                <Authors>
                  Tranae' Moran
                </Authors>
                <Publisher>
                  AI Now Institute Medium
                </Publisher>
              </ArticleArea>
              <ArticleArea>
                <Subtitle>
                  <a href="https://www.peoplepowermedia.org/solutions/exclusive-expose-wild-west-landlord-technology" target="_blank" rel="noopener noreferrer">Exclusive Exposé: The Wild West Of Landlord Technology</a>
                </Subtitle>
                <Authors>
                  Joseph Smooke, Dyan Ruiz
                </Authors>
                <Publisher>
                  People Power Media
                </Publisher>
              </ArticleArea>
              <ArticleArea>
                <Subtitle>
                  <a href="https://themarkup.org/series/locked-out" target="_blank" rel="noopener noreferrer">Locked out</a>
                </Subtitle>
                <Authors>
                  Lauren Kirchner
                </Authors>
                <Publisher>
                  The Markup
                </Publisher>
              </ArticleArea>

              <ArticleArea>
                <Subtitle>
                  <a href="https://www.publicbooks.org/prison-tech-comes-home/" target="_blank" rel="noopener noreferrer">Prison Tech Comes Home</a>
                </Subtitle>
                <Authors>
                  Erin McElroy, Meredith Whittaker, and Nicole Weber
                </Authors>
                <Publisher>
                  Public Books
                </Publisher>
              </ArticleArea>

              <ArticleArea>
                <Subtitle>
                  <a href="https://www.bloomberg.com/news/articles/2021-10-07/tenants-use-new-technology-to-combat-evictions" target="_blank" rel="noopener noreferrer">The Tech That Slumlords Hate</a>
                </Subtitle>
                <Authors>
                  Ethan McLeod
                </Authors>
                <Publisher>
                  Bloomberg CityLab
                </Publisher>
              </ArticleArea>

              

              <ArticleArea>
                <Authors>

                  Want to ask questions or more resources? Please reach out to <a className="wy" href="mailto:landlordtech@riseup.net">landlordtech@riseup.net</a>
                </Authors>
              </ArticleArea>

              

            </Column>
            <Column>
              
              <Title>
                Credits
              </Title>

              <Gutter h={10}></Gutter>

              <ArticleArea>
                <Subtitle>
                  <a href="https://antievictionmap.com/" target="_blank" rel="noopener noreferrer" className="wy" >Anti-Eviction Mapping Project</a>
                </Subtitle>
                <CreditAuthors>
                  <a href="https://ainowinstitute.org/people/erin-mcelroy.html" className="wy" target="_blank" rel="noopener noreferrer">Erin McElroy</a><br/>
                  <a href="https://wonyoung.so" className="wy" target="_blank" rel="noopener noreferrer">Wonyoung So</a>
                  Gracie Harris<br/>
                  Matthew Martignoni<br/>
                  Manon Vergerio<br/>
                  Isa Knafo
                </CreditAuthors>
                <Gutter h={30} />

               <Subtitle>
                  <a href="https://antievictionlab.org/" target="_blank" rel="noopener noreferrer" className="wy" >Anti-Eviction Lab</a>
                </Subtitle>
                <CreditAuthors>
                  Erin McElroy<br/>
                  Noah Cohen<br/>
                  Teja Desai<br/>
                  Gracie Harris<br/>
                  Andrew Liquigan<br/>
                  Margaret McCarroll<br/>
                  Giulia Oprea<br/>
                  Lulia Pan<br/>
                  Alyssa Ramirez<br/>
                  Ashley Xu<br/>
                  Byron Xu<br/>
                  Catherine Xu<br/>
                </CreditAuthors>

                <Subtitle>
                  <a href="https://ainowinstitute.org/" target="_blank" rel="noopener noreferrer" className="wy" >AI Now Institute and Collaborators</a>
                </Subtitle>
                <CreditAuthors>
                  Meredith Whittaker<br/>
                  Nicole Weber<br/>
                  Genevieve Fried<br/>
                  Deborah Raji<br/>
                  Paula Garcia-Salazar<br/>
                </CreditAuthors>

                <Gutter h={30} />
                <Subtitle>
                  Ocean Hill-Brownsville Alliance
                </Subtitle>
                <CreditAuthors>
                  Tranae’ Moran<br/>
                  Fabian Rogers
                </CreditAuthors>
                
                <Gutter h={30} />
                <Subtitle>
                <a href="https://www.peoplepowermedia.org/" target="_blank" rel="noopener noreferrer" className="wy">People Power Media</a>
                </Subtitle>
                <CreditAuthors>
                  Joseph Smooke<br/>
                  Jeantelle Laberinto<br/>
                  Priya Prabhakar<br/>
                  Dyan Ruiz
                </CreditAuthors>
                <Gutter h={30} />
                
                <CreditAuthors>
                  Photo CC-BY-NC Tom Woodward<br/>
                  Illustration by <a href="https://www.instagram.com/frednoland/" target="_blank" className="wy" rel="noopener noreferrer">Frederick Noland</a> / [people. power. media]
                </CreditAuthors>
              </ArticleArea>
            </Column>
          </ColumnContainer>
          <Gutter h={50} />
        </Inner>
      </FooterArea>
    )
  }
}
