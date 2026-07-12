import React from "react";
import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements">

      <div className="achievements-header">

        <h1>Achievements</h1>

        <p>
          A collection of my academic achievements, certifications,
          competitions, and extracurricular activities.
        </p>

      </div>


      <div className="achievement-grid">


        <div className="achievement-card">

          <h2>NASA Space Apps Challenge</h2>

          <p>
            Participated in the NASA Space Apps Challenge held at AJCE
            Kanjirappally. Worked as part of a team to develop innovative
            technology solutions for real-world problems.
          </p>

          <span>Hackathon Participation</span>

        </div>


        <div className="achievement-card">

          <h2>NCC Participation</h2>

          <p>
            Actively participated in NCC activities and developed leadership,
            teamwork, discipline, and communication skills.
          </p>

          <span>Leadership</span>

        </div>



        <div className="achievement-card">

          <h2>Technical Learning</h2>

          <p>
            Continuously improving skills in React, Python, Data Analytics,
            Machine Learning, and software development through projects and
            courses.
          </p>

          <span>Continuous Learning</span>

        </div>

      </div>


    </section>
  );
}

export default Achievements;