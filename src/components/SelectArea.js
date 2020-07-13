import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import Select from 'react-select';
import { changeCurrentTechType, changeIsFullScreen, changeCurrentResponseID } from '../actions';
import { TECH_SELECT_VALUES } from '../constants/defaults';
import media from '../stylesheets/media';

const SelectContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
  width: 250px;
  z-index:5;
  display: flex;
  align-items: center;
  
  ${media.padLandscape `
    left: 10px;
    top: 10px;
  `}
`;

const ExpandBtn = styled.a`
  margin-right: 10px;
  
`;


class SelectArea extends Component {

  handleSelectedTechType(e){
    this.props.dispatch(changeCurrentResponseID(null));
    this.props.dispatch(changeCurrentTechType(e));
  }

  handleFullScreenClick(e){
    e.preventDefault();
    let { isFullScreen } = this.props;
    if (isFullScreen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    this.props.dispatch(changeIsFullScreen(!isFullScreen));
  }

  render() {
    let selectStyles = {
      container: (provided, state) => {
        return {
          ...provided,
          width: "100%"
        }
      }, 
      control: (provided, state) => {
        return {
          ...provided,
          transition: "none",
          backgroundColor: "black",
          border: '1px solid #555',
          padding: 5,
          lineHeight: 1
        };
      },
      singleValue: (provided, state) => ({
        ...provided,
        color: "white",
        border: "none",
        marginLeft: 0,
        fontSize: "1.2em",
        fontWeight: 600,
        borderRadius: 0
      }),
      indicatorSeparator: (provided, state) => ({
        display: "none"
      }),
      menu: (provided, state) => {
        return {
          ...provided,
          borderRadius: 0,
          margin: 0,
          zIndex: 999,
          backgroundColor: "black",
          color: "white"
        }
      },
      option: (provided, state) => ({
        ...provided,
        borderRadius: 0,
        border: "none",
        borderBottom: `1px dotted #222`,
        backgroundColor: "black",
        color: "white",
        "&:last-child": {
          border: "none"
        }
      })
    };

    let { currentTechType, isFullScreen } = this.props;
    return (
      <SelectContainer>
        <ExpandBtn isFullScreen={isFullScreen} href="#" onClick={this.handleFullScreenClick.bind(this)}>
            {
              isFullScreen ? 
              <img src={`${process.env.PUBLIC_URL}/assets/fullscreen_cancel_btn.svg`} alt="fullscreen cancel button" /> :
              <img src={`${process.env.PUBLIC_URL}/assets/fullscreen_btn.svg`} alt="fullscreen button" />
            }
          </ExpandBtn>
        <Select
          styles={selectStyles}
          value={currentTechType}
          isSearchable={false}
          onChange={this.handleSelectedTechType.bind(this)}
          options={TECH_SELECT_VALUES}
        />
      </SelectContainer>
    )
  }
}

let mapStateToProps = state => {
  return {
    currentTechType: state.currentTechType,
    isFullScreen: state.isFullScreen
  }
}

export default connect(mapStateToProps)(SelectArea);