import { useMemo, useState } from "react";
import {
  FolderGit2,
  ExternalLink,
  Code2,
  Rocket,
  Search,
  Sparkles,
  Layers,
  Terminal,
} from "lucide-react";
import { PROJECTS_DATA } from "../../constants/projects";
import "./project.css";
import "./../features.css";

export function ProjectScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    return ["All", ...new Set(PROJECTS_DATA.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PROJECTS_DATA.filter((project) => {
      const matchesCat =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="projects-container">
      {/* Header */}
      <header className="projects-header">
        <div>
          <div className="features-heading">
            <div className="features-heading-icon">
              <FolderGit2 size={20} />
            </div>
            <h1>Projects</h1>
          </div>
          <p className="projects-subtitle">
            Engineered full-stack applications, mobile experiences, and scalable system backends.
          </p>
        </div>

        <div className="projects-doodle" aria-hidden="true">
          <span>Build &amp; Deploy 🚀 💜</span>
          <svg viewBox="0 0 60 30" fill="none" stroke="currentColor">
            <path
              d="M 10 5 C 30 5, 45 15, 35 25"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 28 22 L 35 25 L 37 17"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </header>

      {/* Stats Ribbon */}
      <section className="projects-stats" aria-label="Project statistics">
        <div className="project-stat-card">
          <div className="project-stat-icon">
            <Rocket size={18} />
          </div>
          <div className="project-stat-info">
            <span className="project-stat-value">4+ Systems</span>
            <span className="project-stat-label">Production Apps</span>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="project-stat-icon">
            <Layers size={18} />
          </div>
          <div className="project-stat-info">
            <span className="project-stat-value">Full Stack</span>
            <span className="project-stat-label">React &amp; Node.js</span>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="project-stat-icon">
            <Terminal size={18} />
          </div>
          <div className="project-stat-info">
            <span className="project-stat-value">Microservices</span>
            <span className="project-stat-label">REST &amp; PostgreSQL</span>
          </div>
        </div>

        <div className="project-stat-card">
          <div className="project-stat-icon">
            <Sparkles size={18} />
          </div>
          <div className="project-stat-info">
            <span className="project-stat-value">AI Integration</span>
            <span className="project-stat-label">OpenAI &amp; Streaming</span>
          </div>
        </div>
      </section>

      {/* Filters Toolbar */}
      <section className="projects-toolbar" aria-label="Filter projects">
        <div className="projects-categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`project-filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-search">
          <Search size={14} />
          <input
            type="text"
            placeholder="Search projects by tech or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects"
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid" aria-label="Projects list">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={`project-card ${project.featured ? "featured" : ""}`}
          >
            <div className="project-card-header">
              <div className="project-badge-group">
                <span className="project-badge">{project.badge}</span>
                <span className="project-badge">{project.category}</span>
              </div>
              <span className="project-status-dot">{project.status}</span>
            </div>

            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-desc">{project.description}</p>

            {/* Metrics */}
            {project.metrics && (
              <div className="project-card-metrics">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="project-card-metric">
                    <span className="project-metric-label">{m.label}</span>
                    <span className="project-metric-val">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights */}
            {project.highlights && (
              <ul className="project-highlights">
                {project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            )}

            {/* Tech Stack */}
            <div className="project-tech-list">
              {project.techStack.map((tech) => (
                <span key={tech} className="project-tech-tag">
                  <Code2 size={11} />
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="project-card-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn-primary"
              >
                <FolderGit2 size={14} />
                GitHub Repo
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn-secondary"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}