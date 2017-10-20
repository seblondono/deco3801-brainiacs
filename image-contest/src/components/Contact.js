import React, { Component } from 'react';
import Header from './Header';
import ContestNavigation from './ContestNavigation';
import Footer from './Footer';

// Stateless component. Does not change in the application
// To be rendered at the bottom of the voting page
class Contact extends Component {
   render() {
       return (
            <div className="Contact">
                <Header />
                <ContestNavigation location={this.props.location}/>
                <div className="contact-content">
                    <div className="layout-region__column-one columns medium-6">
                        <div className="panel-pane pane-page-title"  >
                            <div className="panel-pane__content">
                                <h1>Contact</h1>
                            </div>
                        </div>
                        <div className="panel-separator">
                        </div>
                        <div className="panel-pane pane-fieldable-panels-pane pane-uuid-d5acef08-5189-4841-8251-e3967e693c2e pane-bundle-rich-text">
                            <div className="panel-pane__content">
                                <div className="fieldable-panels-pane">
                                    <div className="field field-name-field-pane-body field-type-text-long field-label-hidden">
                                        <div className="field-items">
                                            <div className="field-item even">
                                                <p>The Queensland Brain Institute
                                                    <br />
                                                    <a href="https://www.google.com.au/maps/place/Queensland+Brain+Institute/@-27.4994206,153.0095307,17z/data=!3m1!4b1!4m5!3m4!1s0x6b915a1d92952a6d:0x4b411e5aae5c029f!8m2!3d-27.4994206!4d153.0117248" target="_blank" rel="noopener noreferrer">QBI Building</a>
                                                    , 79
                                                    <br />
                                                    The University of Queensland
                                                    <br />
                                                    St Lucia QLD 4072, Australia
                                                </p>
                                                <p>
                                                    <strong>Office Hours</strong>
                                                    <br />
                                                    8:30am - 4:30pm, Monday to Friday
                                                </p>
                                                <p>
                                                    <strong>General enquiries</strong>
                                                    <br/>
                                                        <a href="mailto:qbi@uq.edu.au">qbi@uq.edu.au</a>
                                                    <br />
                                                    Phone: +61 7 3346 6300  <br />
                                                    Fax: +61 7 3346 6301
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layout-region__column-two columns medium-6">
                        <div className="panel-pane pane-fieldable-panels-pane pane-uuid-d1086bf7-f62e-408e-8962-d9a9a1e77b1c pane-bundle-google-map"  >
                            <div class="panel-pane__content">
                                <div class="fieldable-panels-pane">
                                    <iframe id="qbi-map" title="qbi-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.008365325963!2d153.01001354902505!3d-27.500115295607422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1d92952a6d%3A0x4b411e5aae5c029f!2sQueensland+Brain+Institute!5e0!3m2!1sen!2sus!4v1508459898590" width="525" height="300" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>        
        )
   }
}

export default Contact;