import React from 'react';
import ImageCard from './ImageCard';

class ContestImages extends React.Component {
    render() {
        return (
            <div className="contest-images">
                {
                    Object
                    .keys(this.props.images)
                    .map((key) => <ImageCard 
                        key={key} imageKey={key} 
                        imageDetails={this.props.images[key]} 
                        addPreVote={this.props.addPreVote} 
                        preVotes={this.props.preVotes}
                        removePreVote={this.props.removePreVote}
                        />)
                }
                
            
            </div>
        )
    }
}

export default ContestImages;