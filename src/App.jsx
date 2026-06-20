import "./App.css";

function App() {
  return (
    <>
      <nav>
        <h1>Krishnapriya</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <h2>Hello, I'm Krishnapriya</h2>
        <p>First Year BTech CSE Student | Web Developer</p>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student passionate about web development and
          creating interactive applications using React.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>GitHub</span>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>React To-Do List</h3>
          <p>Task management app built using React.</p>
        </div>

        <div className="card">
          <h3>Python Chatbot</h3>
          <p>Simple chatbot developed with Python.</p>
        </div>

        <div className="card">
          <h3>Bouncing Balls</h3>
          <p>Interactive JavaScript animation project.</p>
        </div>

        <div className="card">
          <h3>Silly Story Generator</h3>
          <p>Fun random story generator using JavaScript.</p>
        </div>
      </section>

      <section className="resume">
        <h2>Resume</h2>
        <a href="/resume.pdf" download>
          Download Resume
        </a>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: your-email@example.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>
    </>
  );
}

export default App;