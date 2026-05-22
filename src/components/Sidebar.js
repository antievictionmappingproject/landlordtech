import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { motion } from "framer-motion";
import { toggleSentiment } from '../actions';
import media from '../stylesheets/media';

const SidebarContainer = styled.div`
  position: absolute;
  left: 15px;
  bottom: 15px;

  ${media.padLandscape`
    left: 0;
    bottom: 0;
  `}
`;

class Sidebar extends Component {

  handleToggle(type) {
    if (type === "sentiment") {
      this.props.dispatch(toggleSentiment());
    }
  }

  render() {

    let { showSentiment } = this.props;

    return (
      <SidebarContainer>
        <svg width="185" height="120" viewBox="0 0 200 140" fill="none">

          <rect x="0.5" y="0.5" width="199" height="120" fill="#111111" stroke="#333333" />

          <text
            fill="white"
            fontFamily="Staatliches"
            fontSize="18"
          >
            <tspan x="16" y="28">Layers</tspan>
          </text>

          <motion.g
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            onClick={() => this.handleToggle("sentiment")}
            style={{ cursor: "pointer" }}
          >

            <circle
              cx="25"
              cy="55"
              r="8"
              fill={showSentiment ? "#1a9850" : "#555555"}
            />

            <text
              fill="white"
              fontFamily="Source Sans Pro"
              fontSize="14"
            >
              <tspan x="40" y="59">Show Sentiment</tspan>
            </text>
          </motion.g>

        </svg>
      </SidebarContainer>
    );
  }
}

let mapStateToProps = state => {
  return {
    showSentiment: state.showSentiment || false
  };
};

export default connect(mapStateToProps)(Sidebar);