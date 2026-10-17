import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {Milestone,Calendar,GraduationCap,Code2,Rocket,Award,ArrowUpDown,Sparkles,} from "lucide-react";
import { TIMELINE_DATA } from "../../constants/TimelineData";
import "./about.css";
import "./../features.css";

const MILESTONE_ICONS = {
  "tl-2022": GraduationCap,
  "tl-2024": Code2,
  "tl-2025": Rocket,
  "tl-2026": Award,
};

export function Journey() {
  const [isAscending, setIsAscending] = useState(true);

  const sortedData = useMemo(() => {
    const list = [...TIMELINE_DATA];
    return list.sort((a, b) => {
      const yearA = parseInt(a.year, 10);
      const yearB = parseInt(b.year, 10);
      return isAscending ? yearA - yearB : yearB - yearA;
    });
  }, [isAscending]);

  return (
    <div className="journey-page">
      {/* Header */}
      <header className="journey-header">
        <div>
          <div className="features-heading">
            <div className="features-heading-icon">
              <Milestone size={20} />
            </div>
            <h1>Timeline &amp; Journey</h1>
          </div>
          <p className="journey-subtitle">
            Key milestones, learning curves, and engineering evolution along my
            path 💜
          </p>
        </div>

        <div className="journey-doodle" aria-hidden="true">
          <span>Growth &amp; Milestones 🚀</span>
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

      {/* Toolbar: Sort & count */}
      <div className="journey-toolbar">
        <button
          type="button"
          className="journey-sort-btn"
          onClick={() => setIsAscending((prev) => !prev)}
          title="Toggle chronological order"
        >
          <ArrowUpDown size={14} />
          <span>
            {isAscending
              ? "Chronological (2022 → 2026)"
              : "Latest First (2026 → 2022)"}
          </span>
        </button>

        <span className="journey-count-pill">
          {sortedData.length} Milestones
        </span>
      </div>

      {/* Timeline Stream */}
      <div
        className="journey-stream"
        role="feed"
        aria-label="Journey Milestones"
      >
        {sortedData.map((item, index) => {
          const NodeIcon = MILESTONE_ICONS[item.id] || Sparkles;
          const isMilestone = item.status === "Milestone";

          return (
            <motion.div
              key={item.id || item.year}
              className="journey-milestone"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              {/* Circular Node Dot */}
              <div className="journey-node" aria-hidden="true">
                <NodeIcon size={20} />
              </div>

              {/* Milestone Card */}
              <article
                className={`journey-card ${isMilestone ? "milestone-highlight" : ""}`}
              >
                <div className="journey-card-top">
                  <div className="journey-badge-group">
                    <span className="journey-year-pill">
                      <Calendar size={13} />
                      {item.year}
                    </span>
                    <span className="journey-tag-pill">{item.tag}</span>
                  </div>

                  <span className="journey-status-dot">{item.status}</span>
                </div>

                <h2 className="journey-title">{item.title}</h2>
                <p className="journey-desc">{item.description}</p>

                {item.techStack && (
                  <div className="journey-tech-list">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="journey-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
