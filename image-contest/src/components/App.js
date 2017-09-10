import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import ContestImages from './ContestImages';
import Voting from './Voting';
import Contact from './Contact';
import Footer from './Footer';
import sampleImages from '../sample-images';

import '../css/index.css';

class App extends React.Component {
  constructor() {
    super();
    this.addPreVote = this.addPreVote.bind(this);
    this.loadSampleImages = this.loadSampleImages.bind(this);
    // Initial image-contest state
    this.state = {
      images: {},
      preVotes: {},
      finalVotes: {}
    };
  }

  componentWillMount() {
    this.loadSampleImages();
  }

  loadSampleImages() {
    this.setState({
      images: sampleImages
    });
  }

  addPreVote(imageKey) {
    // update our state
    const preVotes = {...this.state.preVotes};
    // add our the image to the preVotes state
    preVotes[imageKey] = imageKey;
    // set state
    this.setState({ preVotes });
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div className="main-contest">
          <ContestImages addPreVote={this.addPreVote} images={this.state.images}/>
          <Voting images={this.state.images} preVotes={this.state.preVotes}/>
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;