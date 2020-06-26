import React, { Component } from 'react'
import { connect } from 'react-redux';

class MapArea extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        Map
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(MapArea);