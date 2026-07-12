import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">

      <div className="projects-header">
        <h1>Projects</h1>
        <p>
          Here are some of the projects I have developed during my academic
          journey. These projects demonstrate my skills in Web Development,
          React, Python, and Data Analytics.
        </p>
      </div>

      <div className="projects-grid">

        <div className="project-card">
          <h2>Personal Portfolio Website</h2>

          <p>
            A responsive personal portfolio developed using React to showcase
            my education, skills, projects, internship, achievements and
            contact information.
          </p>

          <h4>Technologies</h4>

          <div className="tech">
            <span>React</span>
            <span>CSS</span>
            <span>HTML</span>
          </div>
        </div>

        <div className="project-card">
          <h2>Python Chatbot</h2>

          <p>
            Developed an intelligent chatbot using Python and Flask that
            responds to user queries through predefined intents and a
            responsive web interface.
          </p>

          <h4>Technologies</h4>

          <div className="tech">
            <span>Python</span>
            <span>Flask</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="project-card">
          <h2>React To-Do List</h2>

          <p>
            A task management application with features to add, edit,
            complete and delete daily tasks using React.
          </p>

          <h4>Technologies</h4>

          <div className="tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="project-card">
          <h2>Student Performance Dashboard</h2>

          <p>
            Built an interactive dashboard to analyze student attendance,
            marks, pass percentage and identify weak subjects using Power BI.
          </p>

          <h4>Technologies</h4>

          <div className="tech">
            <span>Power BI</span>
            <span>Excel</span>
            <span>Python</span>
          </div>
        </div>

        <div className="project-card">
          <h2>Customer Churn Analysis</h2>

          <p>
            Performed customer churn analysis to identify factors affecting
            customer retention and visualized business insights using Power BI.
          </p>

          <h4>Technologies</h4>

          <div className="tech">
            <span>Power BI</span>
            <span>SQL</span>
            <span>Excel</span>
          </div>
        </div>

        <div className="project-card">
          <h2>YouTube Clone</h2>

          <p>
            Developed a YouTube-inspired web application with video search,
            category filtering and responsive user interface using React.
          </p>

          <h4>Technologies</h4>

          <div className="tech">
            <span>React</span>
            <span>Material UI</span>
            <span>API</span>
          </div>
        </div>

        <div className="project-card">
          <h2>Movie Listing App</h2>

          <p>
            A React application that displays movie information using an
            external API with search functionality and responsive design.
          </p>

          <h4>Technologies</h4>

          <div className="tech">
            <span>React</span>
            <span>API</span>
            <span>CSS</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;