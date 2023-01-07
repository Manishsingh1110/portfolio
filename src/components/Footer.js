import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <h3>Manish Singh</h3>
        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
        <div class="social-links">
          <a href="/" className="twitter"><FiTwitter /></a>
          <a href="/" className="facebook "><FiFacebook /></a>
          <a href="/" className="instagram "><FiInstagram /></a>
          <a href="/" className="linkedin "><FiLinkedin /></a>
        </div>
        <div class="copyright">
          &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="/">Manish singh</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer