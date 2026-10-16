import { useState, useEffect, useRef } from "react";
import "./style.css";
import {Wifi,BatteryMedium,Volume2,Maximize2,Minimize2,X,ExternalLink,FileText,FolderGit2,User,Sparkles,Briefcase,Mail,Cpu,} from "lucide-react";
import profile from "../assets/profile-pht.png";
import Resume from "../assets/Resume_Oct.pdf";
import { PORTFOLIO_SECTIONS } from "../constants/navigation";

const SECTION_ICONS = {
  about: User,
  projects: FolderGit2,
  skills: Cpu,
  experience: Briefcase,
  contact: Mail,
};

export function TaskBar({
  openCard,
  isMinimized = false,
  isMaximized = false,
  onToggleMinimize,
  onToggleMaximize,
  onCloseWindow,
  onOpenSection,
}) {
  const [now, setNow] = useState(new Date());
  const [isStartOpen, setIsStartOpen] = useState(false);
  const startMenuRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Close start menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(e.target) &&
        !e.target.closest(".taskbar-start-btn")
      ) {
        setIsStartOpen(false);
      }
    };

    if (isStartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isStartOpen]);

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const date = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const handleAppClick = (section) => {
    if (openCard && openCard.id === section.id) {
      // Toggle minimize/restore if already open
      if (onToggleMinimize) onToggleMinimize();
    } else {
      if (onOpenSection) onOpenSection(section);
    }
    setIsStartOpen(false);
  };

  return (
    <>
      {/* Start Menu Popup */}
      {isStartOpen && (
        <div className="start-menu-popup" ref={startMenuRef}>
          <div className="start-menu-user">
            <img
              src={profile}
              alt="Shreya Garg"
              className="start-menu-avatar"
            />
            <div className="start-menu-user-info">
              <h3>Shreya Garg</h3>
              <p>Full Stack Developer 💜</p>
            </div>
          </div>

          <div className="start-menu-section-title">Pinned Applications</div>
          <div className="start-menu-grid">
            {PORTFOLIO_SECTIONS.map((section) => {
              const Icon = SECTION_ICONS[section.id] || Sparkles;
              return (
                <button
                  key={section.id}
                  type="button"
                  className="start-menu-item"
                  onClick={() => handleAppClick(section)}
                >
                  <Icon size={16} color="#c084fc" />
                  <span>{section.label}</span>
                </button>
              );
            })}

            <a
              href={Resume}
              download="Shreya-Garg-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="start-menu-item"
              style={{ textDecoration: "none" }}
            >
              <FileText size={16} color="#38bdf8" />
              <span>Resume PDF</span>
            </a>
          </div>

          <div className="start-menu-footer">
            <a
              href="https://github.com/shreyagargg"
              target="_blank"
              rel="noreferrer"
              className="start-menu-link"
            >
              <ExternalLink size={12} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-garg-281aa7219/"
              target="_blank"
              rel="noreferrer"
              className="start-menu-link"
            >
              <ExternalLink size={12} />
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/ShreyaGarg63/"
              target="_blank"
              rel="noreferrer"
              className="start-menu-link"
            >
              <ExternalLink size={12} />
              LeetCode
            </a>
          </div>
        </div>
      )}

      {/* Main Taskbar */}
      <footer className="taskbar" role="toolbar" aria-label="Taskbar">
        {/* Left Section: Start Button + App Tabs */}
        <div className="taskbar-left">
          <button
            type="button"
            className={`taskbar-start-btn ${isStartOpen ? "active" : ""}`}
            onClick={() => setIsStartOpen((prev) => !prev)}
            aria-label="Start menu"
            title="Start"
          >
            <div className="windows-logo">
              <span />
              <span />
              <span />
              <span />
            </div>
            <span>Start</span>
          </button>

          <div className="taskbar-apps">
            {/* Pinned / Open App Shortcuts */}
            {PORTFOLIO_SECTIONS.map((section) => {
              const Icon = SECTION_ICONS[section.id] || Sparkles;
              const isOpen = openCard && openCard.id === section.id;

              return (
                <button
                  key={section.id}
                  type="button"
                  className={`taskbar-app-btn ${isOpen ? "is-active" : ""} ${
                    isOpen && isMinimized ? "is-minimized" : ""
                  }`}
                  onClick={() => handleAppClick(section)}
                  title={
                    isOpen
                      ? isMinimized
                        ? `Restore ${section.label}`
                        : `Minimize ${section.label}`
                      : `Open ${section.label}`
                  }
                >
                  <span className="taskbar-app-icon">
                    <Icon size={16} color={isOpen ? "#c084fc" : "#94a3b8"} />
                  </span>
                  <span>{section.label}</span>

                  {/* Window Controls embedded in active Taskbar item */}
                  {isOpen && (
                    <span className="taskbar-window-controls">
                      <button
                        type="button"
                        className="taskbar-mini-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onToggleMaximize) onToggleMaximize();
                        }}
                        title={isMaximized ? "Restore" : "Maximize"}
                      >
                        {isMaximized ? (
                          <Minimize2 size={11} />
                        ) : (
                          <Maximize2 size={11} />
                        )}
                      </button>

                      <button
                        type="button"
                        className="taskbar-mini-btn close"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onCloseWindow) onCloseWindow();
                        }}
                        title="Close window"
                      >
                        <X size={11} />
                      </button>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Section: System Tray & Clock & Show Desktop */}
        <div className="taskbar-right">
          <div className="taskbar-tray">
            <Wifi color="#cbd5e1" size={16} title="Internet Connected" />
            <BatteryMedium color="#cbd5e1" size={16} title="Battery 85%" />
            <Volume2 color="#cbd5e1" size={16} title="Volume 75%" />
          </div>

          <div className="taskbar-date-time" title={`${time} | ${date}`}>
            <p>{time}</p>
            <p>{date}</p>
          </div>

          <div
            className="taskbar-show-desktop"
            onClick={() => {
              if (openCard && onToggleMinimize) onToggleMinimize();
            }}
            title={
              isMinimized ? "Restore Window" : "Minimize All (Show Desktop)"
            }
            aria-label="Show Desktop"
          />
        </div>
      </footer>
    </>
  );
}
