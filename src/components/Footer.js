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
                </CreditAuthors>
                <Gutter h={30} />

                <Subtitle>
                  <a href="https://ainowinstitute.org/" target="_blank" rel="noopener noreferrer" className="wy" >AI Now Institute</a>
                </Subtitle>
                <CreditAuthors>
                  Meredith Whittaker<br/>
                  Nicole Weber<br/>
                  Genevieve Fried<br/>
                  Deborah Raji
                </CreditAuthors>

                <Gutter h={30} />
                <Subtitle>
                  Oceanhill-Brownsville Alliance
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
