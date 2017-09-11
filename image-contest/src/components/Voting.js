import React from 'react';
import { withRouter } from 'react-router-dom';

class Voting extends React.Component {
    constructor(){
        super();
        this.renderImages = this.renderImages.bind(this);
        this.vote = this.vote.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        window.location.reload();
    }

    vote() {
        this.props.addVotes(this.props.nominated);
    }

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
        const nominated = Object.keys(this.props.nominated);
        const preVoted = Object.keys(this.props.preVoted);
        const voted = Object.keys(this.props.voted);
        const notNominated = nominated.length === 0 ? true : false;
        const notPrevoted = preVoted.length === 0 ? true : false;
        const notVoted = voted.length === 0 ? true : false;

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
        } else if (!notNominated && notPrevoted) {
            return (
                <div className="voting">
                <h1>Nominate Images</h1>
                <div>
                    {nominated.map((key) => this.renderImages(key))}
                </div>
                <button className="nominate" onClick={this.vote}>Nominate</button>
            </div>
            )
        } else if (!notNominated && !notPrevoted) {
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