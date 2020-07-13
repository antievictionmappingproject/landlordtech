import React, { Component } from 'react';
import styled from 'styled-components';
import { Inner, Title, Gutter } from '../stylesheets/components';


const FooterArea = styled.footer`
  background-color: black;
`;

const ColumnContainer = styled.div` 
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  width: calc(50% - 20px);
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
                Articles
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
            </Column>
            <Column>
              
              <Title>
                Credits
              </Title>

              <Gutter h={10}></Gutter>

              <ArticleArea>
                <Subtitle>
                  AI Now Institute
                </Subtitle>
                <CreditAuthors>
                  Erin McElroy<br/>
                  Meredith Whittaker<br/>
                  Genevieve Fried<br/>
                  Deborah Raji
                </CreditAuthors>
                <Gutter h={30} />
                <Subtitle>
                  Anti-Eviction Mapping Project,<br />
                  MIT DUSP
                </Subtitle>
                <CreditAuthors>
                  <a href="https://wonyoung.so" className="wy" target="_blank" rel="noopener noreferer">Wonyoung So</a>
                </CreditAuthors>
                <Gutter h={30} />
                <Subtitle>
                  Community Partners
                </Subtitle>
                <CreditAuthors>
                  Desiree Fields, <i>UC Berkeley</i><br/>
                  Joseph Smooke, <i>People Power Media</i><br/>
                  Dyan Ruiz, <i>People Power Media</i><br/>
                  Tranae’ Moran, <i>Atlantic Plaza Towers</i><br/>
                  Fabian Rogers, <i>Atlantic Plaza Towers</i>
                </CreditAuthors>
                <Gutter h={30} />
                <CreditAuthors>
                  Photo CC-BY-NC Tom Woodward

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
