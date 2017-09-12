import React from 'react';
import { withRouter } from 'react-router-dom';

// Sign up component. For general public users that do not have an account
class Signup extends React.Component {
  // Manage routing to vonting home page
  goToContest(e) {
    e.preventDefault();
    this.props.history.push('/image-contest/vote');
  }

  render() {
    const date = new Date();
    const today = date.toISOString().substring(0,10);
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
                    <a href="https://its.uq.edu.au/sso" target="_blank" rel="noopener noreferrer">
                      <img src="https://auth.uq.edu.au/idp/module.php/uqtheme/images/lock2.svg" className="center" alt="Sign on logo"/>
                    </a>
                  </div>
                  <h1 className="sign-on__title sign-on__title--centered" id="signon-title">Single Public <span>sign-up</span></h1>
                </div>
              </div>
              <div className="row">
                <div className="sign-on__content">
                  <form className="sign-on__form" action="?" method="post" name="f" onSubmit={(e) =>this.goToContest(e)}>
                    <label htmlFor="title" className="sign-on__form-label">Title</label>
                    <select className='sign-on__select' name="title" id="title" tabIndex='1' autoFocus>
                      <option defaultValue="Select Title">Select Title</option>
                      <option defaultValue="Miss">Miss</option>
                      <option defaultValue="Ms">Ms</option>
                      <option defaultValue="Mr">Mr</option>
                      <option defaultValue="Sir">Sir</option>
                      <option defaultValue="Mrs">Mrs</option>
                      <option defaultValue="Dr">Dr</option>
                    </select>                                       
                    <div className="sign-on-form__border"></div>
                    <label htmlFor="firstname" className="sign-on__form-label">First Name</label>
                    <input type="text" id="firstname" tabIndex="2" name="firstname" title="firstname" placeholder="First Name" autoFocus/>                    						    
                    <div className="sign-on-form__border"></div>                    
                    <label htmlFor="lastname" className="sign-on__form-label">Last Name</label>
                    <input type="text" id="lastname" tabIndex="3" name="lastname" title="lastname" placeholder="Last Name" autoFocus/>                    		  
                    <div className="sign-on-form__border" id="border"></div>
                    <label htmlFor="email" className="sign-on__form-label">Email address</label>
                    <input type="text" id="email" tabIndex="4" name="email" title="email" placeholder="Email Address" autoFocus/>                    
                    <div className="sign-on-form__border"></div>
                    <label htmlFor="postcode" className="sign-on__form-label">Post Code</label>
                    <input type="text" id="postcode" tabIndex="5" name="postcode" title="postcode" placeholder="Post Code" autoFocus/>                    
                    <div className="sign-on-form__border"></div>
                    <label htmlFor="birthday" className="sign-on__form-label">Birthday</label>
                    <input type="date" id="date" name="bday" title="Birthday" defaultValue={today}/>
                    <div className="sign-on-form__border" id="border"></div>
                    <input id="password" type="password" name="password" title="Password" placeholder="Password" tabIndex="6" autoFocus/> 
                    <div className="sign-on-form__border"></div>
                    <input id="cpassword" type="password" name="cpassword" title="Password" placeholder="Confirm Password" tabIndex="7" autoFocus/> 
                    <div className="sign-on-form__border"></div>
                    <div className="terms">
                      <p>By creating an account, you agree to our <a href="https://ppl.app.uq.edu.au/content/6.20.01-acceptable-use-uq-ict-resources">Terms of use</a></p>
                    </div>
                    <input type="submit" name="submit" className="button button--primary button--sign-on" defaultValue="Sign up" tabIndex="3" />
                  </form>
                </div>
                <div className="sign-on__footer">
                  <div className="sign-on__footer-forgot small-12 medium-12 large-6 columns">
                  </div>
                  <div className="sign-on__footer-terms small-12 medium-12 large-6 columns">
                    <a href="../">Log in</a>
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
 
export default withRouter(Signup);