import React from 'react';
import Header from './Header';
import ContestImages from './ContestImages';
import Voting from './Voting';
import Navigation from './Navigation';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div className="main-contest">
          <ContestImages />
          <Voting />
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;