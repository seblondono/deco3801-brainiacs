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
        <div>
          <Header />
        </div>
        <div>
          <Navigation />
        </div>
        <div>
          <Contact />
        </div>
        <Footer />

        {/* <ContestImages /> */}
        {/* <Voting /> */}
      </div>
    );
  }
}

export default App;