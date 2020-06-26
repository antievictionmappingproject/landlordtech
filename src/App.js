import React, { Component } from 'react'
import { connect } from 'react-redux';
import { windowResize, updateData } from './actions';
import { csvParse } from 'd3';
import { Header, Hero, Intro, Nomenclature, MapArea, SurveyArea, Footer } from './components';

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
    // Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vT6CdlROYPNn9Z6xGZqcFgh9toXFFlR510iX24tJk1Mb3NclHDqv4Tq5bw93vBVaYQNVZrBaMjMJI1h/pub?gid=0&single=true&output=csv', {
    //   download: true,
    //   header: true,
    //   complete: function(results) {
    //     var data = results.data
    //     console.log(data)
    //   }
    // })

    const response = await fetch('https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vT6CdlROYPNn9Z6xGZqcFgh9toXFFlR510iX24tJk1Mb3NclHDqv4Tq5bw93vBVaYQNVZrBaMjMJI1h/pub?output=csv', { method: "get" });

    if (response.ok) {
      let responseText = await response.text();

      let data = csvParse(responseText);
      this.props.dispatch(updateData(data));
      

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
        <Nomenclature />
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