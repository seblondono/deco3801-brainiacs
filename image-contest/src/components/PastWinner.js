import React, { Component } from 'react';
import Header from './Header';
import ContestNavigation from './ContestNavigation';
import Contact from './Contact';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import ImageDescription from './ImageDescription';


class  PastWinner extends Component {
  render() {
    return (
      <div className="PastWinner">
          <Header />
          <ContestNavigation location={this.props.location}/>
          <ImageSlider />
          <ImageDescription />
          <Contact />
          <Footer /> 
      </div>
    );
  }
};

export default PastWinner;
