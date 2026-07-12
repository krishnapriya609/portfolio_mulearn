import React from "react";
import "./Resume.css";

function Resume() {

  return (

    <section className="resume">


      <div className="resume-header">

        <h1>My Resume</h1>

        <p>
          Download my resume to know more about my education,
          technical skills, projects, and experience.
        </p>

      </div>



      <div className="resume-container">


        <div className="resume-card">


          <h2>Krishnapriya A R</h2>


          <h3>
            Computer Science Engineering Student
          </h3>



          <p>

            Interested in Web Development, React Development,
            Data Analytics, and building innovative software solutions.

          </p>



          <div className="resume-details">


            <div>

              <h4>Education</h4>

              <p>
                B.Tech Computer Science Engineering
              </p>

            </div>



            <div>

              <h4>Skills</h4>

              <p>
                React, JavaScript, Python, SQL, Power BI, Git
              </p>

            </div>



            <div>

              <h4>Experience</h4>

              <p>
                <li>
                    <li>ScholarX Data Analytics Internship</li>
                
                    <li>Mulearn Web Development Internship</li>
                
                    <li>Python Chatbot Internship</li>
                </li>
              </p>

            </div>


          </div>



          <a
            href="/resume.pdf"
            download
            className="download-btn"
          >

            Download Resume

          </a>


        </div>


      </div>


    </section>

  );

}


export default Resume;