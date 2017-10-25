import React from 'react';
import { withRouter } from 'react-router-dom';

// Voting component. To be render in the right hand side of the voting home page
class Voting extends React.Component {
    constructor(){
        super();
        this.renderImages = this.renderImages.bind(this);
        this.vote = this.vote.bind(this);
    }

    vote() {
        // action for voting confirmation from user
        console.log(this.props.voted);
    }

    // Render images selected by user
    renderImages(key) {
        const image = this.props.images[key];
        const imageBackground = {
            backgroundImage: `url(${image.imageURL})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }

        return (
            <div className="voted" key={key}>
                <div className="votedImage" style={imageBackground}></div>
                <div className="votedImageTitle">
                    <h5>{image.imageTitle}</h5>
                    <p>by {image.imageAuthor}</p>
                </div>
            </div>
        )
    }

    render() {
        // Variables for flow control of votimg component
        const voted = Object.keys(this.props.voted);
        const notVoted = voted.length === 0 ? true : false;

        // User has not started voting process
        if (notVoted) {
            return (
                <div className="voting">
                    <h1>Selected Images</h1>
                    <div>
                        <div className="voting-instructions">
                            <p>Steps of the voting process:</p>
                            <ol>
                                <li>Select up to 3 favorite images in order of preference by clicking in the plus icon.</li>
                                <li>Click on vote.</li>
                            </ol>
                        </div>
                    </div>
                    <div id="vote-buttons">
                        <button className="vote" disabled={notVoted}>Vote</button>
                    </div>
                </div> 
            )
        }
        //  If user is voting images
        return (
            <div className="voting">
                <h1>Selected Images</h1>
                <div>
                    {voted.map((key) => this.renderImages(key))}
                </div>
                <div id="vote-buttons">
                    <button className="vote" onClick={this.vote}>Vote</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Voting);