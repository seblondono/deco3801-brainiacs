import React from 'react';

class Voting extends React.Component {
    renderPreVotes(key) {
        const image = this.props.images[key];
        const imageBackground = {
            backgroundImage: 'url(' + image.imageURL + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
        }

        return (
            <div className="nominated">
                <div className="nominatedImage" style={imageBackground}></div>
                <div className="nominatedImageTitle">
                    <p>{image.imageTitle}</p>
                </div>
            </div>
        )
    }

    render() {
        const preVotes = Object.keys(this.props.preVotes);
        // const images = preVotes.reduce((selectedImages, key) => {
        //     const image = this.props.images[key];
        //     selectedImages[key] = image;
        //     return selectedImages;
        // }, {});

        // console.log(images);
        return (
            <div className="voting">
                <h1>Nominated Images</h1>
                <div>
                    {preVotes.map((key) => this.renderPreVotes(key))}
                </div>
                <button className="vote">Vote</button>
            </div>
        )
    }
}

export default Voting;