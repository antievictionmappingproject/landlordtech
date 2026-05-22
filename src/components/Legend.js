import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { motion } from "framer-motion";
import media from '../stylesheets/media';

const LegendContainer = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;

  ${media.padLandscape`
    right: 0;
    bottom: 0;
  `}
`;

class Legend extends Component {
  isMatchedWithCurrentTechType(techTypeee) {
    let { currentTechType } = this.props;
    let techTypeValue = currentTechType.value;

    if (techTypeValue === "All") {
      return 1;
    } else {
      return techTypeValue === techTypeee ? 1 : 0.2;
    }
  }

  render() {
    let { showSentiment } = this.props;

    return (
      <LegendContainer>
        {showSentiment ? (
          <svg width="240" height="185" viewBox="0 0 220 185" fill="none">
            <rect x="0.5" y="0.5" width="240" height="184" fill="#111111" stroke="#333333" />
            <text fill="white" fontFamily="Staatliches" fontSize="18">
              <tspan x="17" y="28">Legend</tspan>
            </text>

            <text fill="#aaaaaa" fontFamily="Source Sans Pro" fontSize="13">
              <tspan x="17" y="52">Rent (Size)</tspan>
            </text>

            <circle cx="28" cy="72" r="5" fill="#888888" />
            <text fill="white" fontFamily="Source Sans Pro" fontSize="13">
              <tspan x="46" y="76">&lt; $1000</tspan>
            </text>

            <circle cx="28" cy="100" r="9" fill="#888888" />
            <text fill="white" fontFamily="Source Sans Pro" fontSize="13">
              <tspan x="46" y="104">$1000–2000</tspan>
            </text>

            <circle cx="28" cy="132" r="13" fill="#888888" />
            <text fill="white" fontFamily="Source Sans Pro" fontSize="13">
              <tspan x="46" y="136">&gt; $2000</tspan>
            </text>

            <text fill="#aaaaaa" fontFamily="Source Sans Pro" fontSize="13">
              <tspan x="17" y="160">Sentiment (Color)</tspan>
            </text>

            <circle cx="28" cy="176" r="6" fill="#e74c3c" />
            <text fill="white" fontFamily="Source Sans Pro" fontSize="13">
              <tspan x="44" y="180">Negative</tspan>
            </text>

            <circle cx="104" cy="176" r="6" fill="#f1c40f" />
            <text fill="white" fontFamily="Source Sans Pro" fontSize="13">
              <tspan x="120" y="180">Neutral</tspan>
            </text>

            <circle cx="170" cy="176" r="6" fill="#2ecc71" />
            <text fill="white" fontFamily="Source Sans Pro" fontSize="13">
              <tspan x="186" y="180">Positive</tspan>
            </text>
          </svg>
        ) : (
          <svg width="171" height="252" viewBox="0 0 171 252" fill="none">
            <rect x="0.5" y="0.5" width="170" height="251" fill="#111111" stroke="#333333" />
            <text fill="white" fontFamily="Staatliches" fontSize="18" letterSpacing="0em">
              <tspan x="17.0332" y="28.35">Legend</tspan>
            </text>

            <motion.g
              initial={{ opacity: 1 }}
              animate={{ opacity: this.isMatchedWithCurrentTechType("Cameras") }}
            >
              <circle cx="25" cy="50" r="8" fill="#DBFF00" />
              <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em">
                <tspan x="39" y="53.977">Cameras</tspan>
              </text>
            </motion.g>

            <motion.g
              initial={{ opacity: 1 }}
              animate={{ opacity: this.isMatchedWithCurrentTechType("Smart lock") }}
            >
              <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em">
                <tspan x="39" y="76.977">Smart Lock</tspan>
              </text>
              <circle cx="25" cy="73" r="8" fill="#FF008A" />
            </motion.g>

            <motion.g
              initial={{ opacity: 1 }}
              animate={{ opacity: this.isMatchedWithCurrentTechType("Keyless entry") }}
            >
              <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em">
                <tspan x="39" y="99.977">Keyless Entry</tspan>
              </text>
              <circle cx="25" cy="96" r="8" fill="#00C2FF" />
            </motion.g>

            <motion.g
              initial={{ opacity: 1 }}
              animate={{ opacity: this.isMatchedWithCurrentTechType("Facial recognition") }}
            >
              <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em">
                <tspan x="39" y="121.977">Facial Recognition</tspan>
              </text>
              <circle cx="25" cy="118" r="8" fill="#FF0000" />
            </motion.g>

            <motion.g
              initial={{ opacity: 1 }}
              animate={{ opacity: this.isMatchedWithCurrentTechType("Smart meter") }}
            >
              <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em">
                <tspan x="39" y="144.977">Smart Meter</tspan>
              </text>
              <circle cx="25" cy="141" r="8" fill="#00FFC2" />
            </motion.g>

            <motion.g
              initial={{ opacity: 1 }}
              animate={{ opacity: this.isMatchedWithCurrentTechType("Phone app") }}
            >
              <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em">
                <tspan x="39" y="167.977">Phone App</tspan>
              </text>
              <circle cx="25" cy="164" r="8" fill="#8342D7" />
            </motion.g>

            <motion.g
              initial={{ opacity: 1 }}
              animate={{ opacity: this.isMatchedWithCurrentTechType("Lock boxes") }}
            >
              <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em">
                <tspan x="39" y="190.977">Lock Boxes</tspan>
              </text>
              <circle cx="25" cy="187" r="8" fill="#D7AD42" />
            </motion.g>

            <motion.g
              initial={{ opacity: 1 }}
              animate={{ opacity: this.isMatchedWithCurrentTechType("Short term rentals") }}
            >
              <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em">
                <tspan x="39" y="213.977">Short Term Rentals</tspan>
              </text>
              <circle cx="25" cy="210" r="8" fill="#42D75A" />
            </motion.g>

            <motion.g
              initial={{ opacity: 1 }}
              animate={{ opacity: this.isMatchedWithCurrentTechType("Other") }}
            >
              <text fill="white" fontFamily="Source Sans Pro" fontSize="14" letterSpacing="0em">
                <tspan x="39" y="235.977">Other</tspan>
              </text>
              <circle cx="25" cy="232" r="8" fill="#686868" />
            </motion.g>
          </svg>
        )}
      </LegendContainer>
    );
  }
}

let mapStateToProps = state => {
  return {
    currentTechType: state.currentTechType,
    showSentiment: state.showSentiment || false
  };
};

export default connect(mapStateToProps)(Legend);