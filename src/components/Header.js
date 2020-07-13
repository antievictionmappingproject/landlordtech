import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Gutter } from '../stylesheets/components';
import gsap from 'gsap';
import media from '../stylesheets/media';

const HeaderContainer = styled.header`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  display:flex;
  z-index:9999;
  justify-content:center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const Container = styled.div`
  width: 1024px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;



  ${media.padLandscape`
    width: calc(100% - 20px);
  `}

  ${media.mobileSmall `
    justify-content: center;
  `}
`;


const Title = styled.div`
  color: white; 
  button.menu-link {
    background: transparent;
    padding:0;
    margin:0;
    border: none;
    cursor: pointer;
    color: white;

    font-family:'Staatliches';
    font-size: 1.1em;
    margin-right: 15px;

    &:last-child {
      margin: 0;
    }
  }

  ${media.mobileSmall `
    display:none;
  `}
`;

const Menu = styled.div`
  
  button.menu-link {
    background: transparent;
    padding:0;
    margin:0;
    border: none;
    cursor: pointer;
    color: white;
    font-family: "Source Sans Pro";
    margin-right: 15px;

    &:last-child {
      margin: 0;
    }
  }
`;


const Fragment = React.Fragment;

class Header extends Component {
  handleClick(e){


    var d = document.querySelector(`a[name=${e}]`);

    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = d.getBoundingClientRect(),
        pos = elemRect.top - bodyRect.top;

        
    gsap.to((document.scrollingElement || document.documentElement), 1, { ease: "power3.inOut", scrollTop: pos - 30});
  }


  render() {
    return (
      <Fragment>

        <HeaderContainer>
          <Container>
            <Title>
              <button className="menu-link" onClick={this.handleClick.bind(this, 'top')}>
                Crowdsourcing Landlord Tech Deployment
              </button>
            </Title>
            <Menu>
              <button className="menu-link" onClick={this.handleClick.bind(this, 'whatis')}>
                What is Landlord Tech?
              </button>
              <button className="menu-link" onClick={this.handleClick.bind(this, 'map')}>
                Map
              </button>

              <button className="menu-link" onClick={this.handleClick.bind(this, 'survey')}>
                Survey
              </button>

              <button className="menu-link" onClick={this.handleClick.bind(this, 'articles')}>
                Articles
              </button>
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

