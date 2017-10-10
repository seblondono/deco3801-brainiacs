import React from 'react';

// This is the core compenent of the application
// It displays and Image together with a title and a description
// Allows user to nominate or vote for an image

class ImageCard extends React.Component {
    constructor() {
        super();
        this.vote = this.vote.bind(this);
    }

    // Add images or remove them from vote state
    // Update icon accordingly
    vote(e) {
        const voted = this.props.imageDetails.selected;

        if(!voted) {
            this.props.addVote(this.props.imageKey);
            this.props.imageDetails.selected = true;
        } else {
            this.props.removeVote(this.props.imageKey);
            this.props.imageDetails.selected = false;
        }
    }

    // Render selected images based on data saved at localstorage
    componentWillMount() {
        const checked = this.props.voted.hasOwnProperty(this.props.imageKey);
        if (checked) {
            this.props.imageDetails.selected = true;
        }
    }

    render() {
        // If image is selected then the icon changes to checked
        const selected = this.props.imageDetails.selected === false ? "fa fa-plus" : "fa fa-check";
        const imageTitle = this.props.imageDetails.imageTitle;
        // Display image as background to avoid image warping
        const imageBackground = {
            backgroundImage: `url(${this.props.imageDetails.imageURL})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }
        
        return (
            <div className='image-card'>
                <h1>{imageTitle}</h1>
                <a href={this.props.imageDetails.imageURL}>
                    <div id="image-card__image" style={imageBackground} title={imageTitle}></div>
                </a>
                <p>{this.props.imageDetails.imageDesc}</p>
                <i className={selected} aria-hidden="true" onClick={this.vote}></i>
            </div>
        )
    }
}

export default ImageCard;