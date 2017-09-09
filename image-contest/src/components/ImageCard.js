import React from 'react';

// This is the core compenent of the application
// It displays and Image together with a title and a description

class ImageCard extends React.Component {
    addToVote(e) {
        if(this.addImage.className === 'fa fa-plus') {
            this.addImage.className = 'fa fa-check';
        } else {
            this.addImage.className = 'fa fa-plus';
        }
    }

    render() {
        return (
            <div className='image-card'>
                <h1>The Visual Brain</h1>
                <img src="https://dl.dropboxusercontent.com/s/aoo0mei2sgm10q0/QBI-Art-in-Neuroscience-Technical.jpg?dl=0" alt="The visual brain"/>
                <p><strong>The visual brain</strong> by Hanne Theon, Marshall lab. 3D-volume reconstruction of the optic neuropils of a mantis shrimps eye. The colour indicates depth in the tissue.</p>
                <i className="fa fa-plus" aria-hidden="true" onClick={this.addToVote.bind(this)} ref={(add) => {this.addImage = add}}></i>
            </div>
        )
    }
}

export default ImageCard;