import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './css/home.css';

const Home = () => {
  return (
    <main>
      <section className="introduction wide-container">
        <div className="skills-module">
          <h2>What's in it for you?</h2>
          <p>
            Are you an entrepreneur, author, online marketer or an online coach
            who needs someone to build your website or someone to customize your
            WordPress website?
          </p>
          <p>
            Or are you looking for a strong <strong>Front End Engineer</strong>{" "}
            who can translate UI designs into user-friendly web application with
            reusable components and high-quality code?
          </p>
          <p>
            Do you want a developer who collaborates closely with your team to
            work on a variety of tasks using{" "}
            <strong>
              React or Vue, Redux or VueX, Mongoose or MongoDB, Node.js or
              Express.js
            </strong>
            ?
          </p>
          <p>
            If so, <strong>you&#39;re in the right place!</strong>
          </p>
        </div>
      </section>

      <section className="aboutMe">
        <div>
          <p>Hi,</p>
          <p>
            <span className="bold">I&#39;m Eirin Gonzales.</span>
          </p>
          <p>
            I'm a <strong>Front End Engineer</strong>. And I can also handle
            back end tasks related to MySQL, AWS Lambda functions and Node.js
          </p>
          <p>
            I do my best to code clean so your website and codebase is
            performant, scalable and easy to maintain.
          </p>
          <p>
            On top of these web technologies, I'm prepared to learn new things
            to solve complex problems and create new functionalities.
          </p>
        </div>
      </section>

      <section className="certificates wide-container">
        <Fade top>
          <div className="page-title">
            <Fade top>
              <h3>Free Code Camp Certificates</h3>
            </Fade>
          </div>
        </Fade>
        <div className="certificate">
          <div className="skills-module">
            <a
              href="https://www.freecodecamp.org/certification/theproactivedev/legacy-front-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://theproactivedev.github.io/eiringonzales/assets/portfolio/freecodecamp-certificate.png"
                alt="Free Code Camp Front End Certificate"
              />
            </a>
          </div>
          <div className="skills-module">
            <a
              href="https://www.freecodecamp.org/certification/theproactivedev/legacy-back-end"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://theproactivedev.github.io/eiringonzales/assets/portfolio/back_end_dev.jpg"
                alt="Free Code Camp Back End Certificate"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="work-field">
          <p>Do you want to see my previous work?</p>
          <p>
            <Link to="/portfolio" className="clickHere btn-outlined">
              Click here
            </Link>
          </p>
        </div>
      </section>

      <section className="contact wide-container">
        <div>
          <Fade top>
            <div className="page-title">
              <Fade top>
                <h3>Let's Talk</h3>
              </Fade>
            </div>
          </Fade>
          <p>
            Do you need a website for your business to reach more people and{" "}
            <strong>generate more leads and sales</strong>?
          </p>
          <p>
            Or do you need a <strong>Proactive Front End Engineer</strong> to
            collaborate effectively with your team and bring results?
          </p>
          <Link
            role="button"
            title="Contact Eirin Gonzales"
            to="/contact"
            className="btn-outlined"
          >
            Contact me here
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;