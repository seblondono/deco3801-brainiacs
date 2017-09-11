import React from 'react';
import Header from './Header';
import ContestNavigation from './ContestNavigation';
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
    this.removePreVote = this.removePreVote.bind(this);
    // Initial image-contest state
    this.state = {
      images: {},
      preVotes: {},
      finalVotes: {}
    };
  }

  componentWillMount() {
    // This runs just before the <App> is rendered
    this.loadSampleImages();

    // Check if there is a prevote in localstorage
    let localStorageRef = localStorage.getItem('prevote');

    if (localStorageRef) {
      localStorageRef = JSON.parse(localStorageRef);
      this.setState({
        preVotes: localStorageRef
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('prevote', JSON.stringify(nextState.preVotes));
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

  removePreVote(imageKey) {
    const preVotes = {...this.state.preVotes};
    delete preVotes[imageKey];

    this.setState({ preVotes});
  }

  render() {
    return (
      <div>
        <Header />
        <ContestNavigation location={this.props.location}/>
        <div className="main-contest">
          <ContestImages 
            addPreVote={this.addPreVote} 
            images={this.state.images} 
            preVotes={this.state.preVotes}
            removePreVote={this.removePreVote}
          />
          <Voting 
            images={this.state.images} 
            preVotes={this.state.preVotes}
          />
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;