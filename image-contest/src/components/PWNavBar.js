import React from 'react';
import '../css/PastWinner.css';

const Navigation = (props) => {
  return (
    <div className="navigation">
    <div className="region region-navigation">
      <div id="block-system-main-menu" className="block block-system block-menu main-menu">
        <div className="main-menu__mobile-menu hide-for-large-up">
          <a href="#none" className="main-menu__mobile-menu-link icon icon-uq-bars-short icon--prefix" title="Menu">Menu</a>
        </div>
        <ul className="menu" id="main-menu">
          <li className="first leaf"><a href="/" className="menu__link active">Past Winner</a></li>
          <li className="leaf"><a href="https://qbi.uq.edu.au/" className="menu__link">QBI</a></li>
          <li className="leaf"><a href="/" className="menu__link">Voting</a></li>
          <li className="expanded"><a href="/about" title="" className="menu__link">About</a>
            <ul className="menu__dropdown"><li className="first leaf"><a href="/people" title="" className="menu__link">Our people</a></li>
              <li className="leaf"><a href="/about/vision-statement" className="menu__link">Vision statement</a></li>
              <li className="leaf"><a href="/partnerships" title="" className="menu__link">Partners</a></li>
              <li className="leaf"><a href="/careers" title="" className="menu__link">Careers</a></li>
              <li className="last leaf"><a href="/annual_reports" title="" className="menu__link">Annual reports</a></li>
            </ul>
          </li>
          <li className="last leaf"><a href="/contact" title="" className="menu__link">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>

  )
}
        
export default Navigation;