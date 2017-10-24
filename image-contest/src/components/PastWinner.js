import React, { Component } from 'react';
import Header from './Header';
import ContestNavigation from './ContestNavigation';
import ImageSlider from './ImageSlider';
import ImageDescription from './ImageDescription';
import Footer from './Footer';

import sampleImages from '../sample-images';

// Pass winner parent component. To be rendered in the past winner page.
class PastWinner extends Component {
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

  // Get index of image being displayed at slider
  getCurrentIndex(imageIndex) {
    const currentIndex = imageIndex;

    if (imageIndex >= 0) {
      this.setState({ currentIndex });
    }
  }

  // Load sample state images
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
          <Footer />
      </div>
    );
  }
};

export default PastWinner;
