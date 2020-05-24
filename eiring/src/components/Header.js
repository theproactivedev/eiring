import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './css/header.css';

const Header = () => {
  const location = useLocation();
  const [menuClassName, setMenuClassName] = useState("navigation closed");
  const isHome = location.pathname === "/eiringonzales" || location.pathname === "/eiringonzales/";

  const headerContent = (
    <section className="container">
      <section className="header">
        <div>
          <h1>
            <Link to="/eiringonzales">Eirin Gonzales</Link>
          </h1>
          <span
            className="menu"
            onClick={() => {
              setMenuClassName("navigation open");
            }}
          >
            Menu <i className="fa fa-bars"></i>
          </span>
        </div>

        <nav className={menuClassName}>
          <span
            className="closeMenu"
            onClick={() => {
              setMenuClassName("navigation closed");
            }}
          >
            <p>&times;</p>
          </span>
          <ul role="navigation">
            <li
              onClick={() => {
                setMenuClassName("navigation closed");
              }}
            >
              <Link to="/eiringonzales" className="relative">
                Services
              </Link>
            </li>
            <li>
              <a href="https://theproactivedev.github.io/eiringonzales/assets/eiringonzales_resume.pdf">
                Resume
              </a>
            </li>
            <li
              onClick={() => {
                setMenuClassName("navigation closed");
              }}
            >
              <Link to="/eiringonzales/portfolio" className="relative">
                Portfolio
              </Link>
            </li>
            <li>
              <a
                href="https://theproactivedeveloper.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li
              onClick={() => {
                setMenuClassName("navigation closed");
              }}
            >
              <Link to="/eiringonzales/contact" className="relative">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {isHome && (
          <section className="welcome-message group">
            <p className="subject">
              do you need a website? <span className="blinking"> </span>
            </p>
            <p className="sub">
              Grab your <strong>free consultation</strong> and{" "}
              <strong>price quote</strong> now!
            </p>
            <p>
              <Link to="/eiringonzales/contact" className="btn-outlined yes-btn">
                Yes! I need a website. &raquo;
              </Link>
            </p>
          </section>
        )}
      </section>
    </section>
  );

  return (
    <header>
      {isHome &&
        <section className="bgimage home">
          <section className="white-overlay">
            {headerContent}
          </section>
        </section>
      }
      {location.pathname !== '/' &&
        <>{headerContent}</>
      }
    </header>
  );
}

export default Header;
