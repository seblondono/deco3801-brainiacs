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
        let data=[localStorage.email];
        let img;
        for (img in this.props.voted){
            let vote = {};
            vote.key = img;
            vote.title = this.props.images[img].imageTitle;
            vote.author =  this.props.images[img].imageAuthor;
            vote.description =  this.props.images[img].imageDesc;
            vote.url =  this.props.images[img].imageURL;
            data.push(vote);
        }
        let self=this;
        fetch('/backend/vote/make/', {
            method: 'post', 
            body: JSON.stringify(data)
        }).then(function(response) {
            return response.json();
        }).then(function(j) {
            document.getElementById('message').innerHTML = j.message;
        }).catch(function(err) {
            console.log(err);
        });
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
                    <div>
                        <div className="voting-instructions">
                            <p>Submit your vote by:</p>
                            <ol>
                                <li>Selecting your 3 favorite images in order of preference by clicking in the  <i className="fa fa-plus"></i>  icon.</li>
                                <li>Click on Vote.</li>
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
                <div id="message"></div>
            </div>
        )
    }
}

export default withRouter(Voting);
