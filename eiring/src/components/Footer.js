import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';

const Footer = () => {
  return (
    <footer className="wide-container">
      <div className="row">
        <div>
          <h4>Menu</h4>
          <p><Link to="/eiringonzales">Go back to Home</Link></p>
          <p><Link to="/eiringonzales/portfolio">Look at my Portfolio</Link></p>
          <p><Link to="/eiringonzales/contact">Contact Me Here</Link></p>
          <p>Check out <a href="https://www.freecodecamp.org/">Free Code Camp</a> if you want to learn about web development.</p>
        </div>
        <div>
          <h4>Tech Stack</h4>
          <p>Front End: HTML, Bootstrap 4, CSS, Sass, jQuery, React, Redux</p>
          <p>Back End: Express.js, Mongoose, mLab</p>
          <p>Assets: Google Fonts, Unsplash.com, Font Awesome Icons</p>
        </div>
        <div>
          <h4>Developer</h4>
          <p>The Proactive Dev</p>
          <p>Get in touch with me:</p>
          <div className="social">
            <ul className="web">
              <li><a href="https://www.facebook.com/theproactivedev/" aria-label="Facebook"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="https://ph.linkedin.com/in/eirin-gonzales-5951aa9b" aria-label="Linkedin"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://twitter.com/theproactivedev" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://github.com/theproactivedev" aria-label="GitHub"><i className="fa fa-github-square"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Eirin Gonzales</p>
    </footer>
  );
}

export default Footer;