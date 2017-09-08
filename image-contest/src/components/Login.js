import React, { Component } from 'react';

import './App.css';
function FancyBorder(props) {
  return (
    <div className={'FancyBorder'}>
	  
	  {props.children}
    </div>
  );
}
function Dialog(props) {
  return (
    <FancyBorder color="blue">
	   <a href="http://www.uq.edu.au/" title="UQ	Homepage" className="uq-logo">The University of Queensland</a>
	   <h1 className="logo-title">
		<a className="login-title" rel="home" title="Public sign-on">
		<span className="titlespan">Public sign-on</span>
		</a>
      </h1> 
      {props.children}
    </FancyBorder>
  );
}

class App extends Component {
	
	constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
	this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSignUp = this.handleSubmit.bind(this);
    this.state = {value:''};
  }

  render() {
    return (
      <Dialog title="Public    ">
		<div class="sign-on-icon">
		<a href="https://its.uq.edu.au/sso" target="_blank">
			<img src="https://auth.uq.edu.au/idp/module.php/uqtheme/images/lock2.svg" className="signonicon"/>
		</a>
		</div>
		<h1 className="signon-title">
		 Public
		<span>    sign-on</span>
		</h1>
		<form onSubmit={this.hundleSubmit} className="loginform">
		<label>
        <input type="text" id="username" placeholder="Username" value={this.state.login}
               onChange={this.handleChangeName} />
		</label>	   
		<label>
        <input type="password" id="password" placeholder="Password" value={this.state.login}
               onChange={this.handleChangeEmail} />
		</label>			
        <input type="submit" value="LOGIN" />
		</form>
		<div className="footer">
		<a href="#">Forgot your password?</a>
		</div>
		<div className="footer">
		<a href="https://ppl.app.uq.edu.au/content/6.20.01-acceptable-use-uq-ict-resources">Terms of use</a>
		</div>
		<div className="empty">
		</div>
      </Dialog>
	  
    );
  } 
  handleChangeName(e) {
    this.setState({value: e.target.value});
  }
   handleChangeEmail(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert(`Welcome aboard, ${this.state.login}!`);
	e.preventDefault();
  }
  
}
 
export default App;

