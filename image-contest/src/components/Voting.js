import React from 'react';
import { withRouter } from 'react-router-dom';

// Voting component. To be render in the right hand side of the voting home page
class Voting extends React.Component {
    constructor(){
        super();
        this.renderImages = this.renderImages.bind(this);
        this.vote = this.vote.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    // Navigate to the voting home page
    goBack() {
        window.location.reload();
    }

    // Add nominated images to the preVoted state
    vote() {
        this.props.addVotes(this.props.nominated);
    }

    // Render images selected by user
    renderImages(key) {
        const image = this.props.images[key];
        const imageBackground = {
            backgroundImage: 'url(' + image.imageURL + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }

        return (
            <div className="nominated" key={key}>
                <div className="nominatedImage" style={imageBackground}></div>
                <div className="nominatedImageTitle">
                    <p>{image.imageTitle}</p>
                </div>
            </div>
        )
    }

    render() {
        // Variables for flow control of votimg component
        const nominated = Object.keys(this.props.nominated);
        const preVoted = Object.keys(this.props.preVoted);
        const voted = Object.keys(this.props.voted);
        const notNominated = nominated.length === 0 ? true : false;
        const notPrevoted = preVoted.length === 0 ? true : false;
        const notVoted = voted.length === 0 ? true : false;

        // If user has not nominated nor voted for any image
        if (notNominated && notPrevoted) {
            return (
                <div className="voting">
                    <h1>Nominate Images</h1>
                    <div>
                        <div className="voting-instructions">
                            <p>The QBI Image Contest voting process has 2 steps:</p>
                            <ol>
                                <li>Nominate the images you like by clicking in the add incon.</li>
                                <li>Vote for your final 3 favorite images.</li>
                            </ol>
                        </div>
                    </div>
                    <button className="nominate" disabled={notNominated}>Nominate</button>
                </div> 
            )
        } else if (!notNominated && notPrevoted) { // If user has started nominated but not voted any images
            return (
                <div className="voting">
                <h1>Nominate Images</h1>
                <div>
                    {nominated.map((key) => this.renderImages(key))}
                </div>
                <button className="nominate" onClick={this.vote}>Nominate</button>
            </div>
            )
        } else if (!notNominated && !notPrevoted) { // If user has finished nominated and has stated voting
            if (notVoted) {
                return (
                    <div className="voting">
                        <h1>Vote Images</h1>
                        <div>
                            <div className="voting-instructions">
                                <p>This is the second step of the voting process:</p>
                                <ol>
                                    <li>Select your 3 favorite images in order of preference.</li>
                                    <li>Click on vote.</li>
                                </ol>
                            </div>
                        </div>
                        <div id="vote-buttons">
                            <button className="vote" disabled={notVoted}>Vote</button>
                            <button className="vote-back" onClick={this.goBack}>Back</button>
                        </div>
                    </div> 
                )
            }  
        }
        //  If user is voting images
        return (
            <div className="voting">
                <h1>Vote Images</h1>
                <div>
                    {voted.map((key) => this.renderImages(key))}
                </div>
                <div id="vote-buttons">
                    <button className="vote" onClick={this.vote}>Vote</button>
                    <button className="vote-back" onClick={this.goBack}>Back</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Voting);