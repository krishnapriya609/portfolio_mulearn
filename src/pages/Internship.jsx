import React from "react";
import "./Internship.css";

function Internship() {
  return (
    <section className="internship">

      <div className="internship-header">

        <h1>Internship</h1>

        <p>
          Practical experience gained through industry-oriented projects
          and real-world data analysis tasks.
        </p>

      </div>


      <div className="internship-container">


        {/* ScholarX Internship */}

        <div className="internship-card">

          <div className="internship-title">

            <h2>Data Analytics Intern</h2>

            <span>ScholarX</span>

          </div>


          <p className="duration">
            Internship Domain: Data Analytics
          </p>


          <p>
            Completed a Data Analytics internship where I worked on
            analysing datasets, creating dashboards, and extracting
            meaningful insights to support data-driven decision making.
          </p>


          <h3>Responsibilities</h3>

          <ul>

            <li>Created interactive dashboards using Power BI.</li>

            <li>
              Analysed business data and identified key performance indicators.
            </li>

            <li>
              Worked on Sales KPI Dashboard development.
            </li>

            <li>
              Performed Customer Churn Analysis to identify retention factors.
            </li>

            <li>
              Cleaned and processed datasets using Python and Pandas.
            </li>

            <li>
              Prepared reports and visual presentations from analysed data.
            </li>

          </ul>


          <h3>Tools & Technologies</h3>

          <div className="technology">

            <span>Python</span>
            <span>Power BI</span>
            <span>Excel</span>
            <span>Data Analysis</span>
            <span>Visualization</span>

          </div>

        </div>



        {/* MuLearn Internship */}

        <div className="internship-card">

          <div className="internship-title">

            <h2>Web Development Intern</h2>

            <span>MuLearn / MuShip</span>

          </div>


          <p className="duration">
            Internship Domain: Web Development
          </p>


          <p>
            Gained practical experience in web development by working on
            responsive web applications and improving frontend development
            skills. Worked with modern technologies to build user-friendly
            interfaces and strengthen problem-solving abilities.
          </p>


          <h3>Responsibilities</h3>


          <ul>

            <li>
              Developed responsive web pages using HTML, CSS, JavaScript, and React.
            </li>

            <li>
              Designed user interfaces with proper alignment and responsive layouts.
            </li>

            <li>
              Learned component-based development using React.
            </li>

            <li>
              Used Git and GitHub for managing and tracking project updates.
            </li>

            <li>
              Improved debugging and problem-solving skills through practical tasks.
            </li>

          </ul>


          <h3>Tools & Technologies</h3>


          <div className="technology">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>GitHub</span>

          </div>

        </div>




        {/* Python Chatbot Project */}

        <div className="internship-card">

          <div className="internship-title">

            <h2>Python Chatbot Developer</h2>

            <span>Synergy</span>

          </div>


          <p className="duration">
            Project Domain: Python & Web Development
          </p>


          <p>
            Developed a web-based chatbot application using Python and Flask.
            The chatbot provides responses based on user queries using
            predefined intents and demonstrates practical knowledge in
            backend development.
          </p>


          <h3>Responsibilities</h3>


          <ul>

            <li>
              Developed chatbot logic using Python programming.
            </li>

            <li>
              Created a Flask-based backend application.
            </li>

            <li>
              Designed chatbot interface using HTML and CSS.
            </li>

            <li>
              Implemented intent-based responses using JSON data.
            </li>

            <li>
              Tested and debugged chatbot functionality.
            </li>

          </ul>


          <h3>Tools & Technologies</h3>


          <div className="technology">

            <span>Python</span>
            <span>Flask</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>GitHub</span>

          </div>

        </div>




        {/* Key Learnings */}

        <div className="learning-card">

          <h2>Key Learnings</h2>


          <div className="learning-grid">


            <div>

              <h3>Dashboard Design</h3>

              <p>
                Developed skills in creating interactive and
                informative Power BI dashboards.
              </p>

            </div>



            <div>

              <h3>Web Development</h3>

              <p>
                Created responsive websites using HTML, CSS,
                and React while improving frontend development skills.
              </p>

            </div>



          </div>


        </div>


      </div>


    </section>
  );
}

export default Internship;