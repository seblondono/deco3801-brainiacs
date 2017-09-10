import React from 'react';

class Voting extends React.Component {
    constructor(){
        super();
        this.renderPreVotes = this.renderPreVotes.bind(this);
    }

    renderPreVotes(key) {
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
        const preVotes = Object.keys(this.props.preVotes);
        const isEmpty = preVotes.length === 0 ? true : false;

        if (isEmpty) {
            return (
                <div className="voting">
                    <h1>Nominate Images</h1>
                    <div>
                        <div className="voting-instructions">
                            <p>The QBI Image Contest voting process has 2 steps:</p>
                            <ol>
                                <li>Nominate your favorite images by clicking in the add incon.</li>
                                <li>Vote for your final 3 favorite images.</li>
                            </ol>
                        </div>
                    </div>
                    <button className="vote" disabled={isEmpty}>Nominate</button>
                </div> 
            )
        }

        return (
            <div className="voting">
                <h1>Nominate Images</h1>
                <div>
                    {preVotes.map((key) => this.renderPreVotes(key))}
                </div>
                <button className="vote">Nominate</button>
            </div>
        )
    }
}

export default Voting;