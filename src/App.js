import React, { Component } from 'react'
import { connect } from 'react-redux';
import { windowResize } from './actions';
import Papa from 'papaparse';

const Fragment = React.Fragment;

class App extends Component {
  constructor(props){
    super(props);

    this.handleResize = this.handleResize.bind(this);
  }
  
  componentDidMount(){

    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.loadData();
  }

  async loadData(){
      Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vT6CdlROYPNn9Z6xGZqcFgh9toXFFlR510iX24tJk1Mb3NclHDqv4Tq5bw93vBVaYQNVZrBaMjMJI1h/pub?gid=0&single=true&output=csv', {
        download: true,
        header: true,
        complete: function(results) {
          var data = results.data
          console.log(data)
        }
      })
  }


  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(e){
    // console.log(window.innerHeight, "window.innerheight");
    this.props.dispatch(windowResize(window.innerWidth, window.innerHeight));
  }

  render() {
    return (
      <Fragment>
        Hi Proptech
      </Fragment>
    )
  }
}

let mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(App);