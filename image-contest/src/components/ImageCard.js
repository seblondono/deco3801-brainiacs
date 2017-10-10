import React from 'react';

// This is the core compenent of the application
// It displays and Image together with a title and a description
// Allows user to nominate or vote for an image

class ImageCard extends React.Component {
    constructor() {
        super();
        this.vote = this.vote.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        // Select modal elements from DOM
        const modal = document.querySelector('.modal');
        const modalImg = document.querySelector('.modal-image');
        const modalTitle = document.querySelector('.modal-image-title');
        const modalDesc = document.querySelector('.modal-image-desc');

        modal.style.display = 'flex';
        modalImg.src = this.props.imageDetails.imageURL;
        modalImg.alt = this.props.imageDetails.imageTitle;
        modalTitle.innerHTML = this.props.imageDetails.imageTitle;
        modalDesc.innerHTML = this.props.imageDetails.imageDesc;
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
        const selected = this.props.imageDetails.selected === false ? "fa fa-plus fa-lg" : "fa fa-check fa-lg";
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
                    <div id="image-card__image" style={imageBackground} title={imageTitle}>
                        <a  onClick={this.openModal}>
                            <i className='fa fa-search-plus' ></i>
                        </a>
                    </div>
                <p>{this.props.imageDetails.imageDesc}</p>
                <i className={selected} aria-hidden="true" onClick={this.vote}></i>
            </div>
        )
    }
}

export default ImageCard;