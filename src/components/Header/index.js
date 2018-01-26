import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar w-nav">
      <div className="w-container">
          <Link to="/" className="brand w-nav-brand">
              <div>Logotype</div>
          </Link>
          <nav role="navigation" className="w-nav-menu">
              <Link to="#" className="nav-link w-nav-link">Home</Link>
              <Link to="#" className="nav-link w-nav-link">About</Link>
              <Link to="#" className="nav-link w-nav-link">Contact</Link>
          </nav>
          <div className="w-nav-button">
              <div className="w-icon-nav-menu"></div>
          </div>
      </div>
  </div>
)

export default Header
