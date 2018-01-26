import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer className="section">
      <div className="diviider"></div>
      <div className="w-container">
          <div className="w-row">
              <div className="w-col w-col-3">
                  <Link to="/" className="brand black w-nav-brand">
                      <div>Logotype</div>
                  </Link>
              </div>
              <div className="w-col w-col-3">
                  <h4>Here is links</h4>
                  <Link to="#" className="footer-links">Career</Link>
                  <Link to="#" className="footer-links">Press</Link>
                  <Link to="#" className="footer-links">Help</Link>
                  <Link to="#" className="footer-links">Polices</Link>
              </div>
              <div className="w-col w-col-3">
                  <h4>About us</h4>
                  <Link to="#" className="footer-links">Contacts</Link>
                  <Link to="#" className="footer-links">Another links</Link>
              </div>
              <div className="w-col w-col-3">
                  <h4>Have a hotel?</h4>
                  <Link to="#" className="footer-links">How add your hotel</Link>
              </div>
          </div>
          <div className="diviider"></div>
          <div className="copyrights">
              <h5>
                  {/* Created by <Link to="http://eric-design.ru">eric-design.ru</Link> */}
                  Created by <Link to="http://ostrumtech.com">Ostrumtech</Link>
              </h5>
          </div>
      </div>
  </footer>
)

export default Footer
