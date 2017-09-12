import React from 'react';

// This is the core compenent of the application
// It displays and Image together with a title and a description
// Allows user to nominate or vote for an image

class ImageCard extends React.Component {
    constructor() {
        super();
        this.nominate = this.nominate.bind(this);
    }

    // Nominate or remove selected image based in user input
    // Update plus or checked icon accordingly
    nominate(e) {
        const nominated = this.props.imageDetails.selected;

        if(!nominated) {
            this.props.addPreVote(this.props.imageKey);
            this.props.imageDetails.selected = true;
        } else {
            this.props.removePreVote(this.props.imageKey);
            this.props.imageDetails.selected = false;
        }
    }

    // Render selected images based on data saved at localstorage
    componentWillMount() {
        const checked = this.props.nominated.hasOwnProperty(this.props.imageKey);
        if (checked) {
            this.props.imageDetails.selected = true;
        }
    }

    render() {
        // If image is selected then the icon changes to checked
        const selected = this.props.imageDetails.selected === false ? "fa fa-plus" : "fa fa-check";
        // Display image as background to avoid image warping
        const imageBackground = {
            backgroundImage: 'url(' + this.props.imageDetails.imageURL + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }
        
        return (
            <div className='image-card'>
                <h1 ref={(input) => {this.imageTitle = input}}>
                    {this.props.imageDetails.imageTitle}
                </h1>
                <a href={this.props.imageDetails.imageURL}>
                    <div id="image-card__image" style={imageBackground} title={this.props.imageDetails.imageTitle}></div>
                </a>
                <p ref={(input) => {this.imageDesc = input}}>
                    {this.props.imageDetails.imageDesc}
                </p>
                <i className={selected} aria-hidden="true" onClick={this.nominate}></i>
            </div>
        )
    }
}

export default ImageCard;