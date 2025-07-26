import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <h3>Manish Singh</h3>
        <div class="social-links">
          <a href="/" className="instagram "><FiInstagram /></a>
          <a href="https://www.linkedin.com/in/manish---singh/" className="linkedin "><FiLinkedin /></a>
        </div>
        <div class="credits">
          Designed by <a href="/">Manish singh</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer