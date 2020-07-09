import React, { Component } from 'react'
import { connect } from 'react-redux';
import { windowResize, updateData } from './actions';
import { csvParse } from 'd3';
import { convGeoJSON } from './utils';
import { Header, Hero, Intro, MapArea, SurveyArea, Footer } from './components';

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

    const response = await fetch('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vT6CdlROYPNn9Z6xGZqcFgh9toXFFlR510iX24tJk1Mb3NclHDqv4Tq5bw93vBVaYQNVZrBaMjMJI1h/pub?output=csv', { method: "get" });

    if (response.ok) {
      let responseText = await response.text();

      let data = csvParse(responseText);
      let geojson = convGeoJSON(data);
      this.props.dispatch(updateData(geojson));
      

    } else {

    }
    
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
        <Header />
        <Hero />
        <Intro />
        <MapArea />
        <SurveyArea />
        <Footer />
      </Fragment>
    )
  }
}

let mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(App);