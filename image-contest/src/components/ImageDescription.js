import React from 'react';

// Image details to be rendered at the bottom of the previous winners page
class ImageDescription extends React.Component {
	render(){
		// Image details
		const imagesKeys = Object.keys(this.props.images);
		// Index of image being displayed in ImageSlider
		const imageKey = imagesKeys[this.props.currentIndex];
		const image = this.props.images[imageKey];

		return(
			<div className='image-details'>
				<h1>{image.imageTitle}</h1>
				<p>{image.imageDesc}</p>
				{/* <button className='buy-button'>Buy</button> */}
			</div>
		)
	}
}

export default ImageDescription;