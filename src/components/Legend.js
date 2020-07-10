import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

const LegendContainer = styled.div`
  position: absolute;
  left: 15px;
  bottom: 15px;
`;

class Legend extends Component {
  render() {
    return (
      <LegendContainer>
        <svg width="235" height="252" viewBox="0 0 235 252" fill="none">
          <rect x="0.5" y="0.5" width="234" height="251" fill="#111111" stroke="#333333"/>
          <text fill="white" fontFamily="Staatliches" fontSize="18" letterSpacing="0em"><tspan x="17.0332" y="28.35">Legend</tspan></text>
          
          <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em"><tspan x="39" y="53.977">Camera</tspan></text>
          <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em"><tspan x="39" y="76.977">Smart Lock</tspan></text>
          <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em"><tspan x="39" y="99.977">Keyless entry</tspan></text>
          <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em"><tspan x="39" y="121.977">Facial Recognition</tspan></text>
          <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em"><tspan x="39" y="144.977">Smart Meter</tspan></text>
          <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em"><tspan x="39" y="167.977">App</tspan></text>
          <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em"><tspan x="39" y="190.977">Lock Boxes</tspan></text>
          <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em"><tspan x="39" y="213.977">Related to Short Term Rentals</tspan></text>
          <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em"><tspan x="39" y="235.977">Other</tspan></text>
          <circle cx="25" cy="50" r="8" fill="#DBFF00"/>
          <circle cx="25" cy="73" r="8" fill="#FF008A"/>
          <circle cx="25" cy="96" r="8" fill="#00C2FF"/>
          <circle cx="25" cy="118" r="8" fill="#FF0000"/>
          <circle cx="25" cy="141" r="8" fill="#00FFC2"/>
          <circle cx="25" cy="164" r="8" fill="#8342D7"/>
          <circle cx="25" cy="187" r="8" fill="#D7AD42"/>
          <circle cx="25" cy="210" r="8" fill="#42D75A"/>
          <circle cx="25" cy="232" r="8" fill="#686868"/>
        </svg>
      </LegendContainer>
    )
  }
}

let mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(Legend);