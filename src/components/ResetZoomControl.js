import React, { Component } from 'react'
import styled from 'styled-components';

const ZoomLink = styled.button`
  position: absolute;
  right: 10px;
  top: 105px;
  z-index:2;
  cursor: pointer;

`;

class ResetZoomControl extends Component {
  render() {
    return (
      <ZoomLink className="mapbox-ctrl-group mapbox-gl-reset" onClick={this.props.handleZoomReset}>
      </ZoomLink>
    )
  }
}

export default ResetZoomControl;