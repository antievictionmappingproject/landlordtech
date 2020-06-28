import React, { Component } from 'react';
import styled from 'styled-components';
import { Inner, Title, Gutter } from '../stylesheets/components';
import { style } from 'd3';

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
  font-family: "GT America Extended";
  font-weight: 400;
  font-size: 1.0em;
  color: white;
  margin-bottom: 3px;
  line-height: 1.2;
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
                  COVID-19 Crisis Capitalism Comes to Real Estate
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
                  Disruption at the Doorstep
                </Subtitle>
                <Authors>
                  Erin McElroy
                </Authors>
                <Publisher>
                  Urban Omnibus
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
                  Wonyoung So
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
              </ArticleArea>
            </Column>
          </ColumnContainer>
          <Gutter h={50} />
        </Inner>
      </FooterArea>
    )
  }
}
