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
  }

  componentDidUpdate(prevProps){
    if (!prevProps.mapLoaded && this.props.mapLoaded) {
      this.loadData();
    }
  }

  async loadData(){

    const response = await fetch(process.env.REACT_APP_SPREADSHEET_URL, { method: "get" });

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
        <a name="top"></a>
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
    mapLoaded: state.mapLoaded
  }
}

export default connect(mapStateToProps)(App);