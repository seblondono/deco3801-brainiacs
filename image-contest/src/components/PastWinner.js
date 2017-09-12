import React, { Component } from 'react';
import Header from './Header';
import ContestNavigation from './ContestNavigation';
import ImageSlider from './ImageSlider';
import ImageDescription from './ImageDescription';
import Contact from './Contact';
import Footer from './Footer';

import sampleImages from '../sample-images';


class  PastWinner extends Component {
  constructor() {
    super();
    this.loadSampleImages = this.loadSampleImages.bind(this);
    this.getCurrentIndex = this.getCurrentIndex.bind(this);

    // Initial image-contest state
    this.state = {
      images: {},
      nominated: {},
      preVoted: {},
      voted: {},
      currentIndex: 0
    };
  }

  componentWillMount() {
    // This runs just before the <App> is rendered
    this.loadSampleImages();
  }

  getCurrentIndex(imageIndex) {
    const currentIndex = imageIndex;

    if (imageIndex >= 0) {
      this.setState({ currentIndex });
    }
  }

  loadSampleImages() {
    this.setState({
      images: sampleImages
    });
  }

  render() {
    return (
      <div className="PastWinner">
          <Header />
          <ContestNavigation location={this.props.location}/>
          <ImageSlider images={this.state.images} getCurrentIndex={this.getCurrentIndex} />
          <ImageDescription images={this.state.images} currentIndex={this.state.currentIndex}/>
          <Contact />
          <Footer />
      </div>
    );
  }
};

export default PastWinner;
