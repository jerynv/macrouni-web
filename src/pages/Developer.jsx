import "../styles/pages/Developer.css";

export default function Developer() {
  return (
    <div className="developer-page page restricted-width">
      <div className="hero header-section">
        <h1>Meet the Developer</h1>
      </div>
      <div className="section">
        <h2>About</h2>
        <p>
          Hi! my name is <a href="https://linkedin.com/in/jerynv" target="_blank">Jeryn Vicari</a> the developer behind MacroUni. As a university student with a strong interest in nutrition, fitness, and software, I built this platform to simplify macro tracking
          for students without the clutter and complexity of traditional tools.
        </p>
      </div>

      <div className="section">
        <h2>Why MacroUni Exists</h2>
        <p>
          While attending Indiana University Bloomington, I found that most nutrition apps ignored the realities of student life: campus dining halls, limited budgets, and unpredictable schedules. MacroUni
          started as a way to solve that problem, a practical, transparent tool designed specifically for university environments.
        </p>
      </div>

      <div className="section">
        <h2>How It’s Built</h2>
        <p>
          MacroUni is built using modern, performance focused, native bridged technologies. The interface is powered by Flutter, bundled with Riverpod, and deployed on cloud computing infrastructure utilizing Hono.ts Typescript (Bun)  for fast,
          global delivery. Accessibility, speed, and user privacy are treated as core requirements, not afterthoughts.
        </p>
      </div>

      <div className="section">
        <h2>Get in Touch</h2>
        <p>
          Feedback and collaboration are always welcome. If you’re a student with suggestions, a developer interested in contributing, or an organization exploring partnerships,
          feel free to reach out via GitHub or email.
        </p>
      </div>

      <div className="section">
        <h2>Links:</h2>
        <div className="spacer" style={{ height: "10px", width: "100%" }}></div>

        <ul>
          <li>
            <a className="link" href="https://github.com/jerynv/macrouni-web" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </li>
          -
          <li>
            <a className="link " href="mailto:dev.vjeryn@gmail.com" target="_blank" rel="noopener noreferrer">
              Email Me
            </a>
          </li>
          -
          <li>
            <a className="link " href="https://jeryn.me" target="_blank" rel="noopener noreferrer">
              Portfolio Website
            </a>
          </li>
        </ul>
        <div className="spacer" style={{ height: "50px", width: "100%" }}></div>
      </div>
    </div>
  );
}
