import React from 'react';
import { withRouter } from 'react-router-dom';

// Login for general public, QBI researchers and UQ students
// Uses the react-router-dom library
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.state = {
      Email: '',
      Password: '',
    };
  }

  // Manage routing once user click in login button
  goToContest(e) {
    e.preventDefault();
    let self=this;
    if (this.state.Password.length>0 && this.state.Email.length>0){
      fetch('/backend/voter/login/', {
            method: 'post',
            body: JSON.stringify({
                email: this.state.Email,
                password: this.state.Password,
                })
        }).then(function(response) {
            console.log(response);
            return response.json();
        }).then(function(j) {
            if (j.message==="Success"){
                if (localStorage.email !== self.state.Email){
                    localStorage.removeItem("voted");}
                localStorage.setItem("email", self.state.Email);
                self.props.history.push('/image-contest/vote');
            } else {
                document.getElementById('message').innerHTML = j.message;
            }
        }).catch(function(err) {
            console.log(err);
        });
    }
  }

  handleEmail(e) {
    document.getElementById("message").innerHTML = "";
      this.setState({
          Email: e.target.value
      });
  }

  handlePassword(e) {
    document.getElementById("message").innerHTML = "";
      this.setState({
          Password: e.target.value
      });
  }

  render() {

    const Email = this.state.Email;

    return (
      <div>
        <div className="site-header">
          <div className="site-header__content">
              <div className="columns large-12">
                <a href="http://www.uq.edu.au/" title="UQ Homepage" className="uq-logo">The University of Queensland</a>
                <h2 className="site-title"><a className="site-title__link" rel="home" title="Single sign-on" href="/"><span className="hide-for-small-only">Public Login</span><span className="show-for-small-only">Single Public sign-on</span></a></h2>
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
                      {/*<a href="https://its.uq.edu.au/sso" target="_blank" rel="noopener noreferrer"><img src="https://auth.uq.edu.au/idp/module.php/uqtheme/images/lock2.svg" className="center" alt="Sign on logo"/></a>*/}
                      </div>
                      <h1 className="sign-on__title sign-on__title--centered">Public <span>Login</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="sign-on__content">
                      {/* Navigate to voting home page */}
                      <form className="sign-on__form" name="f" onSubmit={(e) => this.goToContest(e)}>
                          <label htmlFor="email" className="sign-on__form-label">Email</label>
                          <input type="email" id="email" tabIndex="1" name="email" title="email" placeholder="Email"  value={Email} onChange={this.handleEmail} autoFocus/>                    
                          <div className="sign-on-form__border"></div>
                          <label htmlFor="password" className="sign-on__form-label">Password</label>
                          <input id="password" type="password" name="password" title="Password" placeholder="Password" tabIndex="2" onChange={this.handlePassword} /> 
                          <input type="submit" name="submit" className="button button--primary button--sign-on" value="LOGIN" tabIndex="3" />
                      </form>
                    </div>
                    <div className="sign-on__footer">
                      <div id="message" className="sign-on__footer-forgot small-12 medium-12 large-6 columns">
                      {/*<a href="https://www.uq.edu.au/password/reset">Forgot your password?</a>*/}
                      </div>
                      <div className="sign-on__footer-terms small-12 medium-12 large-6 columns">
                          <a href="/image-contest/signup">Sign up now</a>
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

export default withRouter(Login);

