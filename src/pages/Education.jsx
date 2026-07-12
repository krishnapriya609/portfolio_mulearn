import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education">

      <div className="education-header">
        <h1>Education</h1>
        <p>
          My academic journey, achievements, and continuous learning in
          Computer Science Engineering.
        </p>
      </div>

      <div className="timeline">

        <div className="education-card">

          <span className="year">2024 - Present</span>

          <h2>B.Tech Computer Science & Engineering</h2>

          <h3>St. Joseph's College of Engineering and Technology, Palai</h3>

          <p>
            Currently pursuing Bachelor of Technology in Computer Science and
            Engineering under the Autonomous curriculum.
          </p>

          <div className="cgpa-box">
            <div>
              <h4>Current CGPA</h4>
              <p>7.54</p>
            </div>

            <div>
              <h4>Status</h4>
              <p>Ongoing</p>
            </div>
          </div>

        </div>

        <div className="education-card">

          <span className="year">Higher Secondary</span>

          <h2>Class XII</h2>

          <h3>State Board</h3>

          <p>
            Completed Higher Secondary Education with Biology stream and
            secured <strong>95%</strong>.
          </p>

        </div>

        <div className="education-card">

          <span className="year">High School</span>

          <h2>Class X</h2>

          <h3>State Board</h3>

          <p>
            Successfully completed Secondary School Education with strong
            academic performance and secure <strong>98%</strong>, active participation in extracurricular
            activities.
          </p>

        </div>

      </div>

      <div className="semester-section">

        <h2>Semester Performance</h2>

        <div className="semester-grid">

          <div className="semester-card">
            <h3>Semester 1</h3>
            <p>SGPA</p>
            <span>7.68</span>
          </div>

          <div className="semester-card">
            <h3>Semester 2</h3>
            <p>SGPA</p>
            <span>6.98</span>
          </div>

          <div className="semester-card">
            <h3>Semester 3</h3>
            <p>SGPA</p>
            <span>7.42</span>
          </div>

          <div className="semester-card">
            <h3>Semester 4</h3>
            <p>SGPA</p>
            <span>8.06</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;