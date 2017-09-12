import React from 'react';
import Header from './Header';
import ContestNavigation from './ContestNavigation';
import ContestImages from './ContestImages';
import Voting from './Voting';
import Contact from './Contact';
import Footer from './Footer';
import sampleImages from '../sample-images';

import '../css/index.css';


// Main webasite component where the voting process will take part
class App extends React.Component {
  constructor() {
    super();
    this.addPreVote = this.addPreVote.bind(this);
    this.loadSampleImages = this.loadSampleImages.bind(this);
    this.removePreVote = this.removePreVote.bind(this);
    this.addVotes = this.addVotes.bind(this);

    // Initial image-contest state
    this.state = {
      images: {},
      nominated: {},
      preVoted: {},
      voted: {}
    };
  }

  componentWillMount() {
    // This runs just before the <App> is rendered
    this.loadSampleImages();

    // Check if there is a prevote or vote in localstorage
    let localStorageNominated = localStorage.getItem('nominated');
    let localStorageVoted = localStorage.getItem('voted');

    // Save value from localstorage into applications state
    if (localStorageNominated) {
      localStorageNominated = JSON.parse(localStorageNominated);
      this.setState({
        nominated: localStorageNominated
      });
    }

    if (localStorageVoted) {
      localStorageVoted = JSON.parse(localStorageVoted);
      this.setState({
        voted: localStorageVoted
      });
    }
  }

  // Before the component mount set the state at localstorage
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('nominated', JSON.stringify(nextState.nominated));
    localStorage.setItem('voted', JSON.stringify(nextState.voted));
  }

  // Load sample images into application's state
  loadSampleImages() {
    this.setState({
      images: sampleImages
    });
  }

  // Adde images tp nominated and voted state
  addPreVote(imageKey) {
    // Copy the state
    const nominated = {...this.state.nominated};
    const preVoted = {...this.state.preVoted};
    const voted = {...this.state.voted};

    if (Object.keys(preVoted).length === 0) {
      // add the image to the nominated state
      nominated[imageKey] = imageKey;
      // set state
      this.setState({ nominated });
    } else {
      voted[imageKey] = imageKey;
      this.setState({ voted });
    }
  }

  // remove nominated images from preVoted state
  // or from voted state
  removePreVote(imageKey) {
    const nominated = {...this.state.nominated};
    let voted = {...this.state.voted};
    let amountVoted = Object.keys(voted).length;
    let amountNominated = Object.keys(nominated).length;
    
    if (amountVoted > 0) {
      delete voted[imageKey];
      this.setState({ voted });
    }
    
    if (amountNominated > 0) {
      delete nominated[imageKey];
      this.setState({ nominated });
    }

    // There cannot be voted images if there are no nominated images
    amountVoted = Object.keys(voted).length;
    amountNominated = Object.keys(nominated).length;

    if (amountVoted > amountNominated) {
      voted = {...nominated};
      this.setState({ voted});
    }
  }

  // Copy nominated state to preVoted in order to make final voting possible
  addVotes(nominated) {
    let preVoted = {...this.state.preVoted};
    preVoted = {...nominated};

    this.setState({ preVoted });
  }

  // Render the application
  render() {
    return (
      <div>
        <Header />
        <ContestNavigation location={this.props.location}/>
        <div className="main-contest">
          {/* Pass props to child components */}
          <ContestImages 
            addPreVote={this.addPreVote} 
            images={this.state.images} 
            nominated={this.state.nominated}
            removePreVote={this.removePreVote}
            preVoted={this.state.preVoted}
            voted={this.state.voted}
          />
          {/* Pass props to child components */}
          <Voting 
            images={this.state.images} 
            addVotes={this.addVotes}
            nominated={this.state.nominated}
            preVoted={this.state.preVoted}
            voted={this.state.voted}
          />
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;