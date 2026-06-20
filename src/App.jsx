import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Krishnapriya</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>
          <h1>Krishnapriya A R </h1>
          <h2>Enthsiast Web Developer</h2>
          <p className="hero-text">
            Passionate about creating interactive web applications using
            React, JavaScript, HTML, CSS, and Python.
          </p>
          <a href="#projects" className="btn">
            View Projects
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="card">
          <p>
            Third-year B.Tech Computer Science student with a strong
            interest in web development. I enjoy building modern websites,
            learning new technologies, and creating projects that solve
            real-world problems.My journey in programming
            began with curiosity and has grown into a commitment to continuously
            learning and building projects that solve real-world problems. From 
            creating React applications and interactive JavaScript projects to developing 
            Python-based solutions, I enjoy exploring new technologies and improving my skills every day.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">Data Analysis</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Python</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>React To-Do List</h3>
            <p>Task management application built using React.</p>
          </div>

          <div className="project-card">
            <h3>Python Chatbot</h3>
            <p>Interactive chatbot developed using Python.</p>
          </div>

          <div className="project-card">
            <h3>She skills</h3>
            <p>Plaform for women to learn and teach.</p>
          </div>

          <div className="project-card">
            <h3>Sales KPI Dashboard</h3>
            <p>To analyze sales, made with powerBI.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Resume</h2>
        <a href="/Krishnapriya_AR_Resume.pdf" className="btn" download>
          Download Resume
        </a>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="card">
          <p>Email: krishnapriyaar292@gmail.com</p>
          <p>GitHub: https://github.com/krishnapriya609</p>
          <p>LinkedIn: https://www.linkedin.com/in/krishnapriyaar609/</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Krishnapriya | Portfolio</p>
      </footer>
    </div>
  );
}

export default App;