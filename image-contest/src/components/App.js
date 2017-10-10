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
    this.loadSampleImages = this.loadSampleImages.bind(this);
    this.addVote = this.addVote.bind(this);
    this.removeVote = this.removeVote.bind(this);
    
    // Initial image-contest state
    this.state = {
      images: {},
      voted: {}
    };
  }

  componentWillMount() {
    // This runs just before the <App> is rendered
    this.loadSampleImages();

    // Check if there previously vote images in localstorage
    let localStorageVoted = localStorage.getItem('voted');
    // Save value from localstorage into applications state
    if (localStorageVoted) {
      localStorageVoted = JSON.parse(localStorageVoted);
      this.setState({
        voted: localStorageVoted
      });
    }
  }

  // Before the component mount set the state at localstorage
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('voted', JSON.stringify(nextState.voted));
  }

  // Load sample images into application's state
  loadSampleImages() {
    this.setState({
      images: sampleImages
    });
  }

  // Add images to voted state
  addVote(imageKey) {
    // Copy the state
    const voted = {...this.state.voted};

    voted[imageKey] = imageKey;
    this.setState({ voted });
  }

  // Remove images from voted state
  removeVote(imageKey) {
    // Copy the state
    let voted = {...this.state.voted};

    delete voted[imageKey];
    this.setState({ voted });
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
            images={this.state.images}
            addVote={this.addVote}
            removeVote={this.removeVote}
            voted={this.state.voted}
          />
          {/* Pass props to child components */}
          <Voting 
            images={this.state.images}
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