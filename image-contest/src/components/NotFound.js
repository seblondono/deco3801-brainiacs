import React from 'react';
import Header from './Header';
import ContestNavigation from './ContestNavigation';
import Footer from './Footer';

// Stateless component. TO be rendered if incorrect URL is entered in browser
class NotFound extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ContestNavigation location={this.props.location} />
                <div className="not-found">
                    <h3>Oops! Looks like the page you are looking for does not exist.</h3>
                </div>
                <Footer />
            </div>
        )
    }
}

export default NotFound;