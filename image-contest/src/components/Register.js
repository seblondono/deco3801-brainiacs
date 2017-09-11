import React from 'react';
import { withRouter } from 'react-router-dom';

class Register extends React.Component {
goToContest(e) {
    e.preventDefault();
    this.props.history.push('/image-contest');
  }
 render() {
    return (
      <div>
        <div className="site-header">
          <div className="site-header__content">
              <div className="columns large-12">
                <a href="http://www.uq.edu.au/" title="UQ Homepage" className="uq-logo">The University of Queensland</a>
                <h2 className="site-title"><a className="site-title__link" rel="home" title="Single sign-on" href="https://auth.uq.edu.au/idp"><span className="hide-for-small-only">Single Public sign-on</span><span className="show-for-small-only">Single Public sign-on</span></a></h2>
              </div>
          </div>
        </div>
        <div className="page">
          {/* <!-- END HEADER --> */}
          <div className="page__content">
              <div className="sign-on__panel">
                <div className="row">
                    <div className="large-6 large-offset-3 small-12 columns">
                      {/* <!-- UQ SSO Info --> */}
                      <div className="sign-on__icon">
                         <button className="sign-up-with-facebook" type="button">Connect with Facebook</button>
						 <button className="sign-up-with-twitter" type="button">Connect with Twitter</button>
                      </div>
                      <h1 className="sign-on__title sign-on__title--centered" id="signon-title"><span>Or sign up with</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="sign-on__content">
                      <form className="sign-on__form" action="?" method="post" name="f" onSubmit={(e) => this.goToContest(e)}>
                          <label htmlFor="title" className="sign-on__form-label">Prefer Title</label>
                          <input type="text" id="title" tabIndex="1" name="firstname" title="prefertitle" placeholder="Prefer title" autoFocus/>                                         
						  <div className="sign-on-form__border"></div>
						  <label htmlFor="firstname" className="sign-on__form-label">First Name</label>
                          <input type="text" id="firstname" tabIndex="2" name="firstname" title="firstname" placeholder="firstname" autoFocus/>                    						    
						  <label htmlFor="lastname" className="sign-on__form-label">Last Name</label>
                          <input type="text" id="lastname" tabIndex="3" name="lastname" title="lastname" placeholder="lastname" autoFocus/>                    		  
                          <div className="sign-on-form__border" id="border"></div>
						  <label htmlFor="email" className="sign-on__form-label">Email address</label>
                          <input type="text" id="email" tabIndex="4" name="email" title="email" placeholder="Email address" autoFocus/>                    
                          <div className="sign-on-form__border"></div>
						   <label htmlFor="postcode" className="sign-on__form-label">Post Code</label>
                          <input type="text" id="postcode" tabIndex="5" name="postcode" title="postcode" placeholder="Post Code" autoFocus/>                    
						  <label htmlFor="birthday" className="sign-on__form-label">Birthday</label>
						  <input type="text" id="date" name="bday" title="birthday" placeholder="Birthday"/>
						  <div className="sign-on-form__border" id="border"></div>
						  <input id="password" type="password" name="password" title="Password" placeholder="Password" tabIndex="6" autoFocus/> 
                          <div className="sign-on-form__border"></div>
						  <input id="cpassword" type="password" name="cpassword" title="Password" placeholder="Confirm Password" tabIndex="7" autoFocus/> 
                          <div className="sign-on-form__border"></div>
						  <div className="terms">
							<h2>By creating an account, you agree to our <a href="https://ppl.app.uq.edu.au/content/6.20.01-acceptable-use-uq-ict-resources">Terms of use</a></h2>
						  </div>
						  <input type="submit" name="submit" className="button button--primary button--sign-on" value="Register" tabIndex="3" />
						  
					  </form>
                    </div>
                    <div className="sign-on__footer">
                      <div className="sign-on__footer-forgot small-12 medium-12 large-6 columns">
                          <a href="https://www.uq.edu.au/password/reset">Forgot your password?</a>
                      </div>
                      <div className="sign-on__footer-terms small-12 medium-12 large-6 columns">
                          <a href="../">Log in with account</a>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default withRouter(Register);