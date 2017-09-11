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

    // Check if there is a prevote in localstorage
    let localStorageNominated = localStorage.getItem('nominated');
    let localStorageVoted = localStorage.getItem('voted');

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

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('nominated', JSON.stringify(nextState.nominated));
    localStorage.setItem('voted', JSON.stringify(nextState.voted));
  }

  loadSampleImages() {
    this.setState({
      images: sampleImages
    });
  }

  addPreVote(imageKey) {
    // update our state
    const nominated = {...this.state.nominated};
    const preVoted = {...this.state.preVoted};
    const voted = {...this.state.voted};

    if (Object.keys(preVoted).length === 0) {
      // add our the image to the nominated state
      nominated[imageKey] = imageKey;
      // set state
      this.setState({ nominated });
    } else {
      voted[imageKey] = imageKey;
      this.setState({ voted });
    }
  }

  removePreVote(imageKey) {
    const nominated = {...this.state.nominated};
    const voted = {...this.state.voted};

    if (Object.keys(voted).length > 0) {
      delete voted[imageKey];
      this.setState({ voted });
    }
    
    if (Object.keys(nominated).length > 0) {
      delete nominated[imageKey];
      this.setState({ nominated });
    }
  }

  addVotes(nominated) {
    let preVoted = {...this.state.preVoted};
    preVoted = {...nominated};

    this.setState({ preVoted });
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
            nominated={this.state.nominated}
            removePreVote={this.removePreVote}
            preVoted={this.state.preVoted}
            voted={this.state.voted}
          />
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