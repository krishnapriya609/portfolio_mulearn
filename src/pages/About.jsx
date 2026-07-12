import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-header">
        <h1>About Me</h1>
        <p>
          Get to know more about me, my journey, interests, and career goals.
        </p>
      </div>

      <div className="about-container">

        <div className="about-card">

          <h2>Who Am I?</h2>

          <p>
            Hello! I'm <strong>Krishnapriya A R</strong>, a passionate
            Computer Science Engineering student at
            <strong> St. Joseph's College of Engineering and Technology,
            Palai</strong>.
          </p>

          <p>
            I enjoy creating responsive websites using React and learning
            technologies related to Web Development and Data Analytics.
            I believe in continuous learning and enjoy solving
            real-world problems through technology.
          </p>

        </div>

        <div className="about-card">

          <h2>Career Objective</h2>

          <p>
            My goal is to become a skilled Software Engineer and Data
            Analyst by applying my technical knowledge, learning modern
            technologies, and contributing to innovative projects that
            create meaningful impact.
          </p>

        </div>

        <div className="about-card">

          <h2>Education</h2>

          <ul>
            <li>B.Tech Computer Science Engineering</li>
            <li>St. Joseph's College of Engineering and Technology, Palai</li>
          </ul>

        </div>

        <div className="about-card">

          <h2>Areas of Interest</h2>

          <div className="interest-grid">

            <span>Web Development</span>
            <span>Data Analytics</span>
            <span>Python</span>
            <span>Power BI</span>
            <span>Excel</span>
            <span>SQL</span>
            <span>Problem Solving</span>

          </div>

        </div>

        <div className="about-card">

          <h2>Internship</h2>

          <p>
            Successfully completed a <strong>ScholarX Data Analytics
            Internship</strong> where I worked on dashboards, KPI analysis,
            customer churn analysis, and Power BI reporting.
          </p>

          <p>
            Completed a <strong>Chatbot using Python
            Internship</strong> where I worked on creating chatbot using python.
          </p>

          <p>
            Successfully completed a <strong>Summer Internship programme by Mulearn(Muship)
            </strong> where i completed around 32 tasks. Created several useful websites using React , HTML and CSS.
          </p>

        </div>

        <div className="about-card">

          <h2>Strengths</h2>

          <ul>
            <li>Quick Learner</li>
            <li>Problem Solving</li>
            <li>Positive Attitude</li>
            <li>Self Motivated</li>
            <li>Continuous Learner</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;