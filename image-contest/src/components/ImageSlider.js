import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
/*Before implement it, please install npm react-image-gallery package 
firstly, "npm install react-image-gallery"*/
 
class ImageSlider extends Component {
  constructor() {
    super();
    this.getCurrentIndex = this.getCurrentIndex.bind(this);
  }

  getCurrentIndex(index) {
    this.props.getCurrentIndex(index);
  }
 
  render() {
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