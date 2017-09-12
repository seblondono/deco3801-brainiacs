import React from 'react';

const ContestNavigation = (props) => {
  const pastWinner = props.location.pathname === '/image-contest/past-winner' ? 'menu__link active' : 'menu__link';
  const voting = props.location.pathname === '/image-contest/vote' ? 'menu__link active' : 'menu__link';
  const submit = props.location.pathname === '/image-contest/submit' ? 'menu__link active' : 'menu__link';

  return (
    <div className="navigation">
      <div className="region region-navigation">
        <div id="block-system-main-menu" className="block block-system block-menu main-menu">
          <div className="main-menu__mobile-menu hide-for-large-up">
            <a href="#none" className="main-menu__mobile-menu-link icon icon-uq-bars-short icon--prefix" title="Menu">Menu</a>
          </div>
          <ul className="menu" id="main-menu">
            <li className="leaf"><a href="https://qbi.uq.edu.au/" className="menu__link">QBI</a></li>
            <li className="leaf"><a href="/image-contest/vote" className={voting}>Vote</a></li>
            <li className="first leaf"><a href="/image-contest/past-winner" className={pastWinner}>Past Winner</a></li>
            <li className="expanded"><a href="/about" title="" className={submit}>About</a>
              <ul className="menu__dropdown">
                <li className="first leaf"><a href="/image-contest/submit" title="Submit image" className="menu__link">Submit and Participate</a></li>
                <li className="leaf"><a href="/people" title="" className="menu__link">Our people</a></li>
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
        
export default ContestNavigation;