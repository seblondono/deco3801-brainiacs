import React, { Component } from 'react';
import Header from './Header';
import ContestNavigation from './ContestNavigation';
import Contact from './Contact';
import Footer from './Footer';
import PWSlider from './PWSlider';
import PWText from './PWText';


class  PastWinner extends Component {
  render() {
    return (
      <div className="PastWinner">
          <Header />
          <ContestNavigation location={this.props.location}/>
          <PWSlider />
          <PWText />
          <Contact />
          <Footer /> 
      </div>
    );
  }
};

export default PastWinner;
