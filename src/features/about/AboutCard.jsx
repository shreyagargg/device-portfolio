import profile from "../../assets/profile-pht.png";
import { Download , Code2 , Sparkles , CheckCircle2 } from "lucide-react";
import "./about.css";
import Resume from "./../../assets/Resume_Oct.pdf";

const recentTechStack = ["React JS","JavaScript","Node.js","Express.js","Android","Java","Git"];

export function AboutCard() {
  return (
    <section className="about" aria-label="About me">
      {/* Profile */}
      <div className="about-profile">
        <img src={profile} alt="Shreya Garg" className="about-image" />

        <span className="about-image-status">
          <span className="about-status-dot" />
          Available
        </span>
      </div>

      {/* Content */}
      <div className="about-content">
        <div className="about-heading-row">
          <div>
            <div className="about-eyebrow">
              <Sparkles size={14} />
              ABOUT ME
            </div>

            <h1 className="about-name">Shreya Garg</h1>

            <div className="about-role-row">
              <h2 className="about-role">Full Stack Developer</h2>

              <span className="about-online">
                <span className="about-status-dot" />
                Online
              </span>
            </div>
          </div>
        </div>

        <p className="about-description">
          Full-stack &amp; Android developer building apps people enjoy using.
          Creator of <strong>SyAi</strong>, an AI productivity assistant. Solved{" "}
          <strong>400+ LeetCode problems</strong> with a 1500+ contest rating.
          Currently exploring system design and backend development with Node.js.
        </p>

        {/* Resume */}
        <div className="about-actions">
          <a
            href={Resume}
            className="about-resume-button"
            download="Shreya-Garg-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={17} />
            Download Resume
          </a>

          <a
            href= "#projects"
            className="about-resume-button"
            // download="Shreya-Garg-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={17} />
            View Projects
          </a>
        </div>

        {/* Recent tech stack */}
        <div className="about-tech-section">
          <div className="about-tech-heading">
            <div className="about-tech-title">
              <Code2 size={17} />
              <h3>Recently Used Tech Stack</h3>
            </div>

            <span className="about-tech-count">
              {recentTechStack.length} technologies
            </span>
          </div>

          <div className="about-tech-list">
            {recentTechStack.map((tech) => (
              <span className="about-tech-badge" key={tech}>
                <CheckCircle2 size={13} />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
