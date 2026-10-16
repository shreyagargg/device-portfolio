
import { useMemo, useState } from "react";
import { Cpu, Trophy, ExternalLink, Search} from "lucide-react";
import { skillsData } from "../../constants/skills";
import "./skills.css";
import "./../features.css"

export function SkillsCard() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    ...new Set(skillsData.map((skill) => skill.category)),
  ];

  const filteredSkills = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return skillsData.filter((skill) => {
      const matchesCategory =
        selectedCategory === "All" ||
        skill.category === selectedCategory;

      const matchesSearch =
        skill.name.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="skills-card">
      {/* Header */}
      <header className="skills-header">
        <div className="features-heading">
          <div className="features-heading-icon">
            <Cpu size={20} />
          </div>

          <h1>Skills</h1>
        </div>

        <p className="skills-subtitle">
          Technologies, frameworks, and problem solving toolkits I work with 💜
        </p>

        <div className="skills-doodle">
          <span>Code &amp; Create ⚡</span>

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

      {/* Problem Solving Spotlight */}
      <section className="leetcode-spotlight">
        <div className="leetcode-content">
          <div className="leetcode-icon">
            <Trophy size={24} />
          </div>

          <div className="leetcode-info">
            <div className="leetcode-heading">
              <h3>LeetCode &amp; Problem Solving</h3>
              <span className="leetcode-badge">350+ Solved</span>
            </div>

            <p>
              Data Structures, Dynamic Programming, and Graph algorithms in
              C++ &amp; JS.
            </p>
          </div>
        </div>

        <a
          href="https://leetcode.com"
          target="_blank"
          rel="noreferrer"
          className="leetcode-link"
        >
          View LeetCode
          <ExternalLink size={14} />
        </a>
      </section>

      {/* Search and Category Filters */}
      <section className="skills-toolbar">
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-search">
          <Search size={14} />

          <input
            type="text"
            placeholder="Search skill..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            aria-label="Search skills"
          />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="skills-grid">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <article className="skill-item" key={skill.id}>
              <div className="skill-top">
                <div className="skill-details">
                  <div
                    className="skill-icon"
                    style={{
                      backgroundColor: skill.bgColor,
                      color: skill.textColor,
                    }}
                  >
                    {skill.iconText}
                  </div>

                  <div className="skill-text">
                    <div className="skill-title-row">
                      <h3>{skill.name}</h3>
                      <span className="skill-level">{skill.level}</span>
                    </div>

                    <p>{skill.description}</p>
                  </div>
                </div>

                <a
                  href={skill.docUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="skill-doc-link"
                  title={`Documentation for ${skill.name}`}
                  aria-label={`Documentation for ${skill.name}`}
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))
        ) : (
          <p className="skills-empty">
            No skills found. Try another search! 🔎
          </p>
        )}
      </section>
    </div>
  );
}
