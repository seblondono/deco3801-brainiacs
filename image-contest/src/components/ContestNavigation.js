import React from 'react';

// Stateless component. To be rendered next to the header of the website
const ContestNavigation = (props) => {
  // Active page highliting variables
  console.log(this.props);
  const pastWinner = props.location.pathname === '/image-contest/past-winner' ? 'menu__link active' : 'menu__link';
  const voting = props.location.pathname === '/image-contest/vote' ? 'menu__link active' : 'menu__link';
  const submit = props.location.pathname === '/image-contest/submit' ? 'menu__link active' : 'menu__link';
  const contact = props.location.pathname === '/image-contest/contact' ? 'menu__link active' : 'menu__link';

  return (
    <div className="navigation">
      <div className="region region-navigation">
        <div id="block-system-main-menu" className="block block-system block-menu main-menu">
          <div className="main-menu__mobile-menu hide-for-large-up">
            <a href="#none" className="main-menu__mobile-menu-link icon icon-uq-bars-short icon--prefix" title="Menu">Menu</a>
          </div>
          <ul className="menu" id="main-menu">
            <li className="leaf"><a href="https://qbi.uq.edu.au/" className="menu__link">QBI</a></li>
            {/* Add variable corresponding to active or not active page based on URL */}
            <li className="leaf"><a href="/image-contest/vote" className={voting}>Vote</a></li>
            {/* Add variable corresponding to active or not active page based on URL */}
            <li className="first leaf"><a href="/image-contest/past-winner" className={pastWinner}>Past Winners</a></li>
            {/* Add variable corresponding to active or not active page based on URL */}
            <li className="first leaf"><a href="/image-contest/submit" title="Submit image" className={submit}>Submit and Participate</a></li>
            <li className="last leaf"><a href="/image-contest/contact" title="" className={contact}>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
        
export default ContestNavigation;