import React, { Component } from 'react';

export default class ImageDescription extends Component{
	render(){

		const imagesKeys = Object.keys(this.props.images);
		const imageKey = imagesKeys[this.props.currentIndex];
		const image = this.props.images[imageKey];

		return(
			<div className='image-details'>
				<h1>{image.imageTitle}</h1>
				<p>{image.imageDesc}</p>
				<button className='buy-button'>Buy</button>
			</div>
			)
	}
}