import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">

      <div className="home-content">

        <div className="home-text">

          <p className="hello">Hello, I'm</p>

          <h1>Krishnapriya A R</h1>

          <h2>B.Tech Computer Science Engineering Student</h2>

          <p className="description">
            I am a passionate Computer Science Engineering student at
            <strong> St. Joseph's College of Engineering and Technology, Palai.</strong>
            I enjoy building responsive web applications using React and exploring
            Data Analytics with Python, SQL and Power BI. I am always eager
            to learn new technologies and solve real-world problems through innovative
            software solutions.
          </p>

          <div className="buttons">
            <Link to="/projects" className="btn">
              View Projects
            </Link>

            <Link to="/contact" className="btn-outline">
              Contact Me
            </Link>
          </div>

        </div>

        <div className="home-card">

          <h3>Career Objective</h3>

          <p>
            To begin my career in a reputed organization where I can apply my
            technical knowledge, improve my programming skills, and contribute
            to innovative software and data-driven solutions while continuously
            learning and growing as a professional.
          </p>

          <div className="info">

            <div className="info-box">
              <h4>Education</h4>
              <p>B.Tech CSE</p>
            </div>

            <div className="info-box">
              <h4>College</h4>
              <p>SJCET Palai</p>
            </div>


          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;