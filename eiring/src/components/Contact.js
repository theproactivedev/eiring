import React, { useState, useEffect } from 'react';
import * as typeformEmbed from '@typeform/embed';
import Fade from 'react-reveal/Fade';
import './css/contact.css';

const Contact = () => {
  const [formElement, setFormElement] = useState(null);

  useEffect(() => {
    if (formElement) {
      typeformEmbed.makeWidget(
        formElement,
        'https://eiringonzales1.typeform.com/to/Aw293z'
      );
    }
  }, [formElement]);

  return (
    <main className="wide-container">
      <section className="page-title">
        <h2>Contact</h2>
      </section>
      <section className="contact-page">
        <Fade>
          <section className="form">
            <div
              ref={(el) => setFormElement(el)}
              style={{ width: "100%", height: "600px" }}
            />
          </section>
        </Fade>

        <aside className="about">
          <div>
            <img src="assets/eiringonzales.jpg" alt="Eirin Gonzales" />
          </div>
          <div>
            <p>
              I'm <em>Eirin Gonzales</em>. I create desktop and mobile-friendly
              websites based on web standards to minimize costs, perform well
              and reach your users.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Contact;