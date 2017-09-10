import React from 'react';

const Header = (props) => {
    return (
        <div className="site-header">
            <div className="site-header__global-menu">
                <div className="global-menu hide-for-small-only">
                    <ul className="global-menu__list">
                        <li className="global-menu__item"><a href="https://www.uq.edu.au/" className="global-menu__link">UQ Home</a></li>
                        <li className="global-menu__item"><a href="https://www.uq.edu.au/contacts/" className="global-menu__link">Contacts</a></li>
                        <li className="global-menu__item"><a href="https://www.uq.edu.au/study/" className="global-menu__link">Study</a></li>
                        <li className="global-menu__item"><a href="https://www.uq.edu.au/maps/" className="global-menu__link">Maps</a></li>
                        <li className="global-menu__item"><a href="https://www.uq.edu.au/news/" className="global-menu__link">News</a></li>
                        <li className="global-menu__item"><a href="https://www.uq.edu.au/events/" className="global-menu__link">Events</a></li>
                        <li className="global-menu__item"><a href="https://www.library.uq.edu.au/" className="global-menu__link">Library</a></li>
                        <li className="global-menu__item"><a href="https://www.uq.edu.au/giving/" className="global-menu__link">Give now</a></li>
                        <li className="global-menu__item"><a href="https://my.uq.edu.au/" className="global-menu__link">my.UQ</a></li>
                    </ul>
                </div>
            </div>
            <div className="site-header__content image-contest">
                <div className="columns medium-11 large-8">
                    <a href="https://www.uq.edu.au/" title="UQ Homepage" className="uq-logo">The University of Queensland</a>
                    <h2 className="site-title">
                        <a className="site-title__link" rel="home" title="Queensland Brain Institute" href="https://qbi.uq.edu.au">
                            <span className="hide-for-small-only">Queensland Brain Institute</span> 
                            <span className="show-for-small-only">Queensland Brain Institute</span>
                        </a>
                    </h2>
                </div>
                <div className="site-header__site-search">
                    <form className="search__form site-search__form">
                        <fieldset className="site-search__fieldset">
                            <legend className="site-search__legend">Site search</legend>
                            <label htmlFor="site-search__query" className="search__title site-search__title">Search</label>
                            <input id="site-search__query" className="site-search__input site-search__query" type="text" name="q" placeholder="Search this site" tabIndex="1"/>
                            <input name="submit" value="&#xf002;" className="fa fa-search site-search__input site-search__submit" title="Search this site" type="submit"/>
                            <input type="hidden" name="output" value="xml_no_dtd"/>
                            <input type="hidden" name="client" value="ws"/>
                            <input type="hidden" name="proxystylesheet" value="ws"/>
                            <input type="hidden" name="as_sitesearch" value="https://qbi.uq.edu.au"/>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header;