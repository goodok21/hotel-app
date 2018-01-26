import React, { Component } from 'react';
import Link from 'gatsby-link';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import iconGoogle from './google.svg';

class LoginPage extends Component {

  responseGoogle(response) {
    console.log(response);
  }

  responseFacebook(response) {
    console.log(response);
  }

  render() {
  return (
      <div className="transition-item">
        <main className="section hero">
          <div className="w-container">
            <div className="box form">
              <h1>Login</h1>
              <p>Not a member? <Link to="/registration">Registration</Link></p>
              <div className="w-form">
                <form>
                  <label htmlFor="adults" className="field-label">Login</label>
                  <input type="email" className="text-field w-input" maxLength="256" name="login" placeholder="Enter login"/>
                  <label htmlFor="childrens" className="field-label">Password</label>
                  <input type="password" className="text-field w-input" maxLength="256" name="password" placeholder="Enter password"/>
                  <div className="box-top-padding-20">
                    <Link to="/" value="Search" className="submit-button w-button">Login</Link>
                  </div>
                </form>
              </div>
              <div className="div-for-social-login">
                <h5>You can login with Google or Facebook</h5>
                <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  className="ggl submit-button w-button"
                  onSuccess={::this.responseGoogle}
                  onFailure={::this.responseGoogle}
                />
                <FacebookLogin
                  appId="1088597931155576"
                  autoLoad={true}
                  cssClass="fb submit-button w-button"
                  fields="name,email,picture"
                  callback={::this.responseFacebook}
                />
              </div>

              <Link to="/restore">Lost your password?</Link>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default LoginPage;
