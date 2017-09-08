import React from 'react';
import Header from './Header';
import ContestImages from './ContestImages';
import Voting from './Voting';
import Navigation from './Navigation';

class App extends React.Component {
  render() {
    return (
      <div className="image-contest">
        <div className="header">
          <Header />
        </div>
        <div className="navigation">
          <Navigation />
        </div>
        <ContestImages />
        <Voting />
      </div>
    );
  }
}

export default App;