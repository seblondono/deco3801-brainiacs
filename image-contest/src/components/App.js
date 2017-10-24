import React from 'react';
import Header from './Header';
import ContestNavigation from './ContestNavigation';
import ContestImages from './ContestImages';
import Voting from './Voting';
// import Contact from './Contact';
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
    this.shuffle = this.shuffle.bind(this);
    
    // Initial image-contest state
    this.state = {
      images: {},
      voted: {}
    };
  }

  componentWillMount() {
    // This runs just before the <App> is rendered
    let images = this.shuffle(sampleImages);
    this.loadSampleImages(images);

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
  loadSampleImages(images) {
    this.setState({
      images: images
    });
  }

  // Shuffles images to prevent bias in image contest page
  shuffle(o){
    // Get keys of object
    const images = Object.keys(o);
    // Shuffle the keys
    for (var i = images.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = images[i];
      images[i] = images[j];
      images[j] = temp;
    }

    // Rebuild object with randomised key order
    let shuffledImages = {};
    images.forEach((image) => {
      shuffledImages[image] = o[image];
    });

    return shuffledImages;
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
        <h1 id='competitionTitle'>Art in Neurscience 2017</h1>
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
        <div className="modal">
          <span className="close" 
                onClick={() => {document.querySelector(".modal").style.display="none"}}>
                &times;
          </span>
          <div>
            <img className="modal-image" alt=""/>
            <div id="caption">
              <h1 className='modal-image-title'>Image Competition</h1>
              <p className='modal-image-desc'></p>
            </div>
          </div>
        </div>
        <div className="vote-modal">
          <div className="vote-modal-content">
            <div className="vote-modal-header">
              <span className="vote-close"
                    onClick={() => {document.querySelector(".vote-modal").style.display="none"}}>
                    &times;
              </span>
              <h2>Oopps!</h2>
            </div>
            <div className="vote-modal-body">
              <p>Please, keep in mind that you can only vote for your 3 favorite images.</p>
            </div>
          </div>
        </div>
        {/* <Contact /> */}
        <Footer />
      </div>
    );
  }
}

export default App;