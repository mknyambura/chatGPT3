import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

function Footer() {
  return (
    <div className='footer section-padding'>
      <div className="footer-heading">
        <h1 className="gradient-text">Do you want to step in the future before others?</h1>
      </div>
      <div className="footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="footer-links">
        <div className="footer-links-logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-123567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer