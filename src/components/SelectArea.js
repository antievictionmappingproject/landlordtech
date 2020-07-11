import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import Select from 'react-select';
import { changeCurrentTechType } from '../actions';
import { TECH_SELECT_VALUES } from '../constants/defaults';

const SelectContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
  width: 200px;
  z-index:5;
`;

class SelectArea extends Component {

  handleSelectedTechType(e){
    this.props.dispatch(changeCurrentTechType(e));
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

    let { currentTechType } = this.props;
    return (
      <SelectContainer>
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
    currentTechType: state.currentTechType
  }
}

export default connect(mapStateToProps)(SelectArea);