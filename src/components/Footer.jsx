import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>Krishnapriya A R</h2>

          <p>
            Computer Science Engineering Student passionate about
            Web Development, React, and Data Analytics.
          </p>

        </div>


        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>

        </div>


        <div className="footer-social">

          <h3>Connect With Me</h3>

          <div className="social-icons">

            <a
              href="https://github.com/krishnapriya609"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>


            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>


            <a href="mailto:krishnapriyaar292@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Krishnapriya A R. All Rights Reserved.
        </p>

      </div>


    </footer>
  );
}

export default Footer;