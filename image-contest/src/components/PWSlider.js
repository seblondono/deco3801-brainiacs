import React, { Component } from 'react';
import '../css/PastWinner.css';
import ImageGallery from 'react-image-gallery';
/*Before implement it, please install npm react-image-gallery package 
firstly, "npm install react-image-gallery"*/
 
class PWSlider extends Component {
 
  handleImageLoad(e) {
  }
 
  render() {
 
    const images = [
      {
        original: 'https://qbi.uq.edu.au/files/24748/N_Valmas_c-elegans-worm.jpg',
        thumbnail: 'https://qbi.uq.edu.au/files/24748/N_Valmas_c-elegans-worm.jpg'
      },
      {
        original: 'https://qbi.uq.edu.au/files/24417/Neuroscience_image_QBI_1513_nadia_cummins.jpg',
        thumbnail: 'https://qbi.uq.edu.au/files/24417/Neuroscience_image_QBI_1513_nadia_cummins.jpgg'
      },
      {
        original: 'https://qbi.uq.edu.au/files/5168/Neuron-image_QBI_1504.jpg',
        thumbnail: 'https://qbi.uq.edu.au/files/5168/Neuron-image_QBI_1504.jpg',
      },
      {
        original: 'https://qbi.uq.edu.au/files/5176/Neuron-image_QBI_1518.jpg',
        thumbnail: 'https://qbi.uq.edu.au/files/5176/Neuron-image_QBI_1518.jpg'
      },
      {
         original: 'https://qbi.uq.edu.au/files/24474/Neuroscience_image_QBI_iris_wang_daisy.jpg',
        thumbnail: 'https://qbi.uq.edu.au/files/24474/Neuroscience_image_QBI_iris_wang_daisy.jpg'
      },
        {
         original: 'https://qbi.uq.edu.au/files/24405/Neuroscience_image_QBI_1429-lauramorcom-interhemisphere.jpg',
        thumbnail: 'https://qbi.uq.edu.au/files/24405/Neuroscience_image_QBI_1429-lauramorcom-interhemisphere.jpg'
      }               
    ]
 
    return (
      <div>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        onImageLoad={this.handleImageLoad}/>
        </div>
    );
  }
}

export default PWSlider;