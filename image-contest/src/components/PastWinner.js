import React, { Component } from 'react';
import '../css/PastWinner.css';
import Header from './Header';
import NavBar from './PWNavBar';
import Contact from './Contact';
import Footer from './Footer';
import PWSlider from './PWSlider'


class  PastWinner extends Component {
  render() {
    return (
      <div className="PastWinner">
          <Header />
          <NavBar />
          <PWSlider />
          <Contact />
          <Footer /> 
         

      </div>
    );
  }
};

export default PastWinner;
