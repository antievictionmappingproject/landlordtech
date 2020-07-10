import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import Select from 'react-select';

const SelectContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
`;

class SelectArea extends Component {

  handleSelectedTechType(e){

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

    return (
      <SelectContainer>
         <Select
          styles={selectStyles}
          value={[]}
          isSearchable={false}
          onChange={this.handleSelectedTechType.bind(this)}
          options={[]}
        />
      </SelectContainer>
    )
  }
}

let mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(SelectArea);