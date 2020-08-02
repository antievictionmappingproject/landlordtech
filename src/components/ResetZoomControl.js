import React, { Component } from 'react'
import styled from 'styled-components';

const ZoomLink = styled.a`
  position: absolute;
  right: 10px;
  top: 105px;
  z-index:2;

`;

class ResetZoomControl extends Component {
  render() {
    return (
      <ZoomLink href="javascript:void(0);" className="mapbox-ctrl-group mapbox-gl-reset" onClick={this.props.handleZoomReset}>
      </ZoomLink>
    )
  }
}

export default ResetZoomControl;