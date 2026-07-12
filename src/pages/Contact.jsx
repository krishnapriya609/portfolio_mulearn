import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-header">
        <h1>Contact Me</h1>

        <p>
          Thank you for visiting my portfolio. If you have any questions,
          internship opportunities, or collaboration ideas, feel free to
          contact me.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>krishnapriyaar292@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>📱 Phone</h3>
            <p>+91 7025650032</p>
          </div>

          <div className="contact-card">
            <h3>🎓 College</h3>
            <p>St. Joseph's College of Engineering and Technology, Palai</p>
          </div>

          <div className="contact-card">
            <h3>💻 GitHub</h3>
            <a
              href="https://github.com/krishnapriya609"
              target="_blank"
              rel="noreferrer"
            >
              github.com/krishnapriya609
            </a>
          </div>

          <div className="contact-card">
            <h3>🔗 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/krishnapriyaar609/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/krishnapriyaar609
            </a>
          </div>

        </div>

        <div className="contact-form">

          <h2>Send a Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;