import React from 'react';
import { withRouter } from 'react-router-dom';

// Sign up component. For general public users that do not have an account
class Signup extends React.Component {
  // Manage routing to vonting home page

  constructor(props) {
    super(props);
    this.handleFname = this.handleFname.bind(this);
    this.handleLname = this.handleLname.bind(this);
    this.handlePostcode = this.handlePostcode.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfPassword = this.handleConfPassword.bind(this);
    this.state={Password: ''};
    this.state={ConfPassword: ''};
  }

  goToContest(e) {
    e.preventDefault();
    //this.props.history.push('/image-contest/vote');
    if (this.state.Password === this.state.ConfPassword && this.state.Password.length > 5){
    this.props.history.push('/image-contest/vote');
    } else if (this.state.Password.length <= 5){
      document.getElementById('password-check').innerHTML = "<p>Password must be more than 5 characters</p>";
    }
  }

  handleFname(e){
      this.setState({Fname: e.target.value});
  }

  handleLname(e){
      this.setState({Lname:e.target.value});
  }

  handlePostcode(e){
      this.setState({Postcode:e.target.value});
  }

  handleEmail(e){
      this.setState({Email:e.target.value});
  }

  handlePassword(e){
    this.setState({Password:e.target.value});
    if (e.target.value.length > 5){
      document.getElementById('password-check').innerHTML = "";
    }
    if (e.target.value === this.state.ConfPassword){
        document.getElementById("password-check").innerHTML = "";
    } else {
        document.getElementById("password-check").innerHTML = "<p>Passwords do not match.</p>";
    }
  }

  handleConfPassword(e){
      this.setState({ConfPassword:e.target.value});
      if (e.target.value === this.state.Password){
          document.getElementById("password-check").innerHTML = "";
      } else {
          document.getElementById("password-check").innerHTML = "<p>Passwords do not match.</p>";
      }
  }

  render() {
    const signonstyle = {margin: "0px"};
    /*const date = new Date();
    const today = date.toISOString().substring(0,10);*/
    return (
      <div>
        <div className="site-header">
          <div className="site-header__content">
            <div className="columns large-12">
              <a href="http://www.uq.edu.au/" title="UQ Homepage" className="uq-logo">The University of Queensland</a>
              <h2 className="site-title"><a className="site-title__link" rel="home" title="Single sign-on" href="https://auth.uq.edu.au/idp"><span className="hide-for-small-only">Public Sign-Up</span><span className="show-for-small-only">Single Public sign-on</span></a></h2>
            </div>
          </div>
        </div>
        <div className="page">
          {/* <!-- END HEADER --> */}
          <div className="page__content">
            <div className="sign-on__panel" style={signonstyle}>
              <div className="row">
                <div className="large-6 large-offset-3 small-12 columns">
                  {/* <!-- UQ SSO Info --> */}
                  <div className="sign-on__icon">
                  </div>
                  <h1 className="sign-on__title sign-on__title--centered" id="signon-title">Public <span>Sign-Up</span></h1>
                </div>
              </div>
              <div className="row">
                <div className="sign-on__content">
                  <form className="sign-on__form" onSubmit={(e) =>this.goToContest(e)}>
                    <label htmlFor="firstname" className="sign-on__form-label">First Name</label>
                    <input type="text" id="firstname" tabIndex="2" name="firstname" title="firstname" placeholder="First Name" onChange={this.handleFname}  autoFocus/>                    						    
                    <div className="sign-on-form__border"></div>                    
                    <label htmlFor="lastname" className="sign-on__form-label">Last Name</label>
                    <input type="text" id="lastname" tabIndex="3" name="lastname" title="lastname" placeholder="Last Name" onChange={this.handleLname} />                    		  
                    <div className="sign-on-form__border" id="border"></div>
                    <label htmlFor="email" className="sign-on__form-label">Email address</label>
                    <input type="email" id="email" tabIndex="4" name="email" title="email" placeholder="Email Address" onChange={this.handleEmail}/>                    
                    <div className="sign-on-form__border"></div>
                    <label htmlFor="postcode" className="sign-on__form-label">Post Code</label>
                    <input type="text" pattern="^[0-9]{4}$" id="postcode" tabIndex="5" name="postcode" title="postcode" placeholder="Post Code" onChange={this.handlePostcode}/>                    
                    <div className="sign-on-form__border"></div>
                    <input id="password" type="password" name="password" title="Password" placeholder="Password" tabIndex="6" onChange={this.handlePassword}/> 
                    <div className="sign-on-form__border"></div>
                    <input id="cpassword" type="password" name="cpassword" title="Password" placeholder="Confirm Password" tabIndex="7" onChange={this.handleConfPassword}/> 
                    <div className="terms" id="password-check"></div>
                    <div className="sign-on-form__border"></div>
                    <div className="terms">
                      <p>By creating an account, you agree to our <a href="https://ppl.app.uq.edu.au/content/6.20.01-acceptable-use-uq-ict-resources">Terms of use</a></p>
                    </div>
                    <input type="submit" name="submit" className="button button--primary button--sign-on" defaultValue="Sign up" tabIndex="8" />
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
