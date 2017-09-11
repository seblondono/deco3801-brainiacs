import React from 'react';

// This is the core compenent of the application
// It displays and Image together with a title and a description

class ImageCard extends React.Component {
    constructor() {
        super();
        this.nominate = this.nominate.bind(this);
    }

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

    componentWillMount() {
        // Renders the checked icons if nominated come from local storage and not from user interaction
        const checked = this.props.nominated.hasOwnProperty(this.props.imageKey);
        if (checked) {
            this.props.imageDetails.selected = true;
        }
    }

    render() {
        // If image is selected then the icon changes to checked
        const selected = this.props.imageDetails.selected === false ? "fa fa-plus" : "fa fa-check";
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