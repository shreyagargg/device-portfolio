import { useMemo, useState } from "react";
import { Briefcase, Building2, ChevronDown, ChevronUp, Zap, CheckCircle2, Rocket, Clock, Code,} from "lucide-react";
import { experienceData } from "./../../constants/experience";
import "./experience.css";

const roleTypes = ["All", "Internship", "Fulltime", "Open Source"];

export function Experience() {
  const [selectedRoleType, setSelectedRoleType] = useState("All");
  const [expandedCards, setExpandedCards] = useState({
    exp1: true,
    exp2: true,
  });

  const toggleExpandCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredExperience = useMemo(() => {
    if (selectedRoleType === "All") return experienceData;
    return experienceData.filter((exp) => exp.type === selectedRoleType);
  }, [selectedRoleType]);

  return (
    <main className="experience-page">
      <header className="experience-header">
        <div className="experience-heading-group">
          <div className="experience-title-row">
            <div className="experience-title-icon">
              <Briefcase size={20} />
            </div>
            <h1 className="experience-title">Experience</h1>
            <span className="career-badge">
              <Rocket size={14} />
              Career Journey
            </span>
          </div>
          <p className="experience-subtitle">
            Building software, solving complex problems, and crafting delightful
            user experiences.
          </p>
        </div>

        <div className="experience-doodle" aria-hidden="true">
          <span>Growth &amp; Code 🚀 💜</span>
          <svg viewBox="0 0 60 30" fill="none">
            <path
              d="M 10 5 C 30 5, 45 15, 35 25"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 28 22 L 35 25 L 37 17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </header>

      <section className="experience-stats" aria-label="Experience highlights">
        <StatCard icon={<Clock size={16} />} iconClass="stat-icon-purple" label="Experience" value="2+ Years" />
        <StatCard icon={<Building2 size={16} />} iconClass="stat-icon-blue" label="Roles Held" value="3 Positions" />
        <StatCard icon={<Zap size={16} />} iconClass="stat-icon-green" label="Avg Latency" value="-35% Speedup" />
        <StatCard icon={<Code size={16} />} iconClass="stat-icon-amber" label="Tech Stack" value="React / Node" />
      </section>

      <nav className="experience-filters" aria-label="Filter experience">
        <span className="filter-label">Filter:</span>
        {roleTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setSelectedRoleType(type)}
            className={`filter-button ${selectedRoleType === type ? "is-active" : ""}`}
            aria-pressed={selectedRoleType === type}
          >
            {type === "All" ? "All Experience" : type}
          </button>
        ))}
      </nav>

      <section className="experience-list" aria-label="Career history">
        {filteredExperience.map((exp) => {
          const isExpanded = Boolean(expandedCards[exp.id]);

          return (
            <article className="experience-card" key={exp.id}>
              <div className="experience-card-header">
                <div className="experience-company-group">
                  <div
                    className="company-icon"
                    style={{ backgroundColor: exp.bgColor }}
                    aria-hidden="true"
                  >
                    <Building2 size={20} />
                  </div>

                  <div className="experience-company-info">
                    <div className="experience-role-row">
                      <h2 className="experience-role">{exp.role}</h2>
                      {exp.isCurrent && (
                        <span className="current-badge">
                          <span className="current-dot" />
                          Present
                        </span>
                      )}
                    </div>

                    <div className="experience-company-meta">
                      <span className="company-name">{exp.company}</span>
                      <span aria-hidden="true">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="experience-date-group">
                  <div className="experience-date-info">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-duration">{exp.duration}</span>
                  </div>
                  <button
                    type="button"
                    className="expand-button"
                    onClick={() => toggleExpandCard(exp.id)}
                    title={isExpanded ? "Collapse details" : "Expand details"}
                    aria-label={isExpanded ? "Collapse details" : "Expand details"}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-metrics">
                {exp.metrics.map((metric, index) => (
                  <div className="experience-metric" key={`${exp.id}-metric-${index}`}>
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>

              {isExpanded && (
                <div className="experience-highlights">
                  <h3 className="highlights-title">Key Responsibilities &amp; Impact:</h3>
                  <ul className="highlights-list">
                    {exp.highlights.map((point, index) => (
                      <li className="highlight-item" key={`${exp.id}-highlight-${index}`}>
                        <CheckCircle2 size={16} className="highlight-check" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="experience-tech-stack">
                {exp.techStack.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          );
        })}

        {filteredExperience.length === 0 && (
          <p className="experience-empty">No experience entries match this filter.</p>
        )}
      </section>
    </main>
  );
}

function StatCard({ icon, iconClass, label, value }) {
  return (
    <div className="experience-stat-card">
      <div className={`stat-icon ${iconClass}`}>{icon}</div>
      <div className="stat-copy">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{value}</span>
      </div>
    </div>
  );
}