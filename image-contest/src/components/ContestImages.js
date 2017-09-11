import React from 'react';
import ImageCard from './ImageCard';

class ContestImages extends React.Component {
    render() {

        let images = {};
        if (Object.keys(this.props.preVoted).length === 0) {
            images = this.props.images;
        } else if (Object.keys(this.props.voted).length === 0) {
            const imageKeys = Object.keys(this.props.preVoted);
            images = imageKeys.reduce((images, key) => {
                let image = this.props.images[key];
                image.selected = false;
                images[key] = image;
                
                return images;
            }, {});
        } else {
            images = this.props.preVoted;
        }

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