import React from 'react';
import ImageCard from './ImageCard';

// Parent component of the application ImageCards
class ContestImages extends React.Component {
    render() {
        // Render all images in state
        return (
            <div className="contest-images">
                {
                    Object
                    .keys(this.props.images)
                    .map((key) => <ImageCard 
                        key={key}
                        imageKey={key} 
                        imageDetails={this.props.images[key]} 
                        addVote={this.props.addVote} 
                        removeVote={this.props.removeVote}
                        voted={this.props.voted}
                        />)
                }
            </div>
        )
    }
}

export default ContestImages;