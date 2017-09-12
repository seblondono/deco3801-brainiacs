import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

// Image slider to be rendered at the past winners page
// Uses the react-image-gallery library
class ImageSlider extends Component {
  constructor() {
    super();
    this.getCurrentIndex = this.getCurrentIndex.bind(this);
  }

  // Get index of image displayed at slider
  getCurrentIndex(index) {
    this.props.getCurrentIndex(index);
  }
 
  render() {
    // Create object to be passed to the ImageSlider component
    const imagesKeys = Object.keys(this.props.images);
    const images = imagesKeys.reduce((images, key) => {
      let image = this.props.images[key];
      images.push({
        original: image.imageURL, 
        thumbnail: image.imageURL
      });

      return images;
    }, []);
 
    return (
      <div>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        onSlide={this.getCurrentIndex}
      />
      </div>
    )
  }
}

export default ImageSlider;