import React from 'react';
import ImageCard from './ImageCard';

// Parent component of the application ImageCards
class ContestImages extends React.Component {
    render() {

        // Sample images
        let images = {};
        // Flow control for nominating or voting rendering
        if (Object.keys(this.props.preVoted).length === 0) {
            // Load sample images. User is nominating
            images = this.props.images;
        } else if (Object.keys(this.props.voted).length === 0) {
            // Load prevoted images. User is voting
            const imageKeys = Object.keys(this.props.preVoted);
            images = imageKeys.reduce((images, key) => {
                let image = this.props.images[key];
                image.selected = false;
                images[key] = image;
                
                return images;
            }, {});
        } else {
            // Load prevoted images. User has an unfinished voting process
            const preVotedKeys = Object.keys(this.props.preVoted);
            images = preVotedKeys.reduce((images, key) => {
                let image = this.props.images[key];
                if (!this.props.voted.hasOwnProperty(key)) {
                    image.selected = false;
                }

                images[key] = image;

                return images;
            }, {});
        }
        // Load all images depending on voting stage: nominating or voting
        return (
            <div className="contest-images">
                {
                    Object
                    .keys(images)
                    .map((key) => <ImageCard 
                        key={key} 
                        imageKey={key} 
                        imageDetails={this.props.images[key]} 
                        addPreVote={this.props.addPreVote} 
                        nominated={this.props.nominated}
                        removePreVote={this.props.removePreVote}
                        />)
                }
            </div>
        )
    }
}

export default ContestImages;