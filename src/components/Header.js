import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Gutter } from '../stylesheets/components';
const HeaderContainer = styled.header`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  display:flex;
  z-index:9999;
  justify-content:center;
  border-bottom: 1px solid white;
`;

const Container = styled.div`
  width: 1024px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;


const Title = styled.div`
  color: white; 
  font-family:'Staatliches', cursive;
  font-size: 1.1em;
`;

const Menu = styled.div`
  
  a.menu-link {
    color: white;
    margin-right: 15px;

    &:last-child {
      margin: 0;
    }
  }
`;


const Fragment = React.Fragment;

class Header extends Component {
  render() {
    return (
      <Fragment>

        <HeaderContainer>
          <Container>
            <Title>
              Crowdsourcing Landlord Tech Deployment
            </Title>
            <Menu>
              <a href="#" className="menu-link" rel="noopener noreferer">
                What is Landlord Tech
              </a>
              <a href="#" className="menu-link" rel="noopener noreferer">
                Map
              </a>

              <a href="#" className="menu-link" rel="noopener noreferer">
                Survey
              </a>

              <a href="#" className="menu-link" rel="noopener noreferer">
                Articles
              </a>
            </Menu>
          </Container>

        </HeaderContainer>
        <Gutter h={57} />
      </Fragment>
    )
  }
}

let mapStateToProps = state => {
  return {

  };
}

export default connect(mapStateToProps)(Header);

