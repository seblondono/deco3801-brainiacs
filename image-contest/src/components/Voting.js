import React from 'react';

class Voting extends React.Component {
    render() {
        const preVotes = Object.keys(this.props.preVotes);
        // const images = preVotes.reduce((images, key) => {
        //     const images = {...this.props.images[key]};
        //     return images;

        // }, {});
        return (
            <div className="voting">

            </div>
        )
    }
}

export default Voting;