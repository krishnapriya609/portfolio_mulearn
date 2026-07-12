import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills">

      <div className="skills-header">
        <h1>My Skills</h1>
        <p>
          Technologies, programming languages, and tools that I use to build
          responsive web applications and analyze data.
        </p>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>HTML</h3>
          <div className="progress">
            <div className="progress-bar html">90%</div>
          </div>
        </div>

        <div className="skill-card">
          <h3>CSS</h3>
          <div className="progress">
            <div className="progress-bar css">85%</div>
          </div>
        </div>

        <div className="skill-card">
          <h3>JavaScript</h3>
          <div className="progress">
            <div className="progress-bar js">75%</div>
          </div>
        </div>

        

        <div className="skill-card">
          <h3>Python</h3>
          <div className="progress">
            <div className="progress-bar python">75%</div>
          </div>
        </div>

        <div className="skill-card">
          <h3>SQL</h3>
          <div className="progress">
            <div className="progress-bar sql">75%</div>
          </div>
        </div>

        <div className="skill-card">
          <h3>Power BI</h3>
          <div className="progress">
            <div className="progress-bar powerbi">80%</div>
          </div>
        </div>

        <div className="skill-card">
          <h3> Excel</h3>
          <div className="progress">
            <div className="progress-bar problem">80%</div>
          </div>
        </div>

        

        <div className="skill-card">
          <h3>Bootstrap</h3>
          <div className="progress">
            <div className="progress-bar bootstrap">80%</div>
          </div>
        </div>


        <div className="skill-card">
          <h3>GitHub</h3>
          <div className="progress">
            <div className="progress-bar github">75%</div>
          </div>
        </div>

        <div className="skill-card">
          <h3>Problem Solving</h3>
          <div className="progress">
            <div className="progress-bar problem">80%</div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;