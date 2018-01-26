import React, { Component } from 'react';
import Link from 'gatsby-link'

class RegistrationPage extends Component {
  render() {
  return (
      <div className="transition-item">
        <main className="section hero">
          <div className="w-container">
            <div className="box form">
              <h1>Registration</h1>
              <p>Already have account? <Link to="/login">Login</Link></p>
              <div className="w-form">
                <form>
                  <label className="field-label">Email</label>
                  <input type="mail" className="text-field w-input" maxLength="256" name="email" placeholder="Enter your email"/>
                  <label className="field-label">Name</label>
                  <input type="text" className="text-field w-input" maxLength="256" name="name" placeholder="Enter your name"/>
                  <label htmlFor="adults" className="field-label">Last name</label>
                  <input type="text" className="text-field w-input" maxLength="256" name="email" placeholder="Enter your last name"/>
                  <label htmlFor="childrens" className="field-label">Password</label>
                  <input type="password" className="text-field w-input" maxLength="256" name="password" placeholder="Create password"/>
                  <div className="box-top-padding-20">
                    <Link to="/" value="Search" className="submit-button w-button">Registration</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default RegistrationPage;
