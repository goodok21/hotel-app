import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar w-nav">
      <div className="w-container">
          <Link to="/" className="brand w-nav-brand">
              <div>Logotype</div>
          </Link>
          <nav role="navigation" className="w-nav-menu">
              <Link to="/login" className="nav-link w-nav-link">Login</Link>
              <Link to="/registration" className="nav-link w-nav-link">Registration</Link>
          </nav>
          <div className="w-nav-button">
              <div className="w-icon-nav-menu"></div>
          </div>
      </div>
  </div>
)

export default Header
