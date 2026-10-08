import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import { TitleBar } from "./TitleBar";
import { SidebarTree } from "./SidebarTree";
import { PORTFOLIO_SECTIONS } from "../../constants/navigation";
import "../style.css";
import {AboutScreen} from "../screens/AboutScreen"
import { SessionInfo } from "./SessionInfo";

export function Card({ section, onClose }) {
  const nodeRef = useRef(null);

  const [sidebarWidth, setSidebarWidth] = useState(30);
  const [currentFile, setCurrentFile] = useState(null);
  const [filePath, setFilePath] = useState([]);

  // --------------------------------
  // OPEN FILE
  // --------------------------------

  const handleFileOpen = (file, path) => {
    setCurrentFile(file);
    setFilePath(path);
  };

  // --------------------------------
  // BACK
  // --------------------------------

  const goBack = () => {
    setCurrentFile(null);
    setFilePath([]);
  };

  const handleSidebarResize = (e) => {
    e.preventDefault();

    const card = e.currentTarget.parentElement;
    const leftSide = card.querySelector(".leftSide");
    const startX = e.clientX;
    const startWidth = leftSide.offsetWidth;

    const handleMouseMove = (event) => {
      const newWidth = startWidth + (event.clientX - startX);
      const percentage = (newWidth / card.offsetWidth) * 100;

      setSidebarWidth(Math.min(60, Math.max(20, percentage)));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // --------------------------------
  // FILE CONTENT
  // --------------------------------

  const renderFileContent = () => {
    if (!currentFile) return null;

    switch (currentFile.id) {
      case "introduction":
        return (
          < AboutScreen />
        );

      case "session":
        return (
          < SessionInfo />
        );

    
      case "coursework":
        return (
          <div className="file-content">
            <h1>Coursework</h1>

            <p>
              Data Structures, DBMS, Operating Systems, Computer Networks,
              Software Engineering and Web Development.
            </p>
          </div>
        );

      case "teaching":
        return (
          <div className="file-content">
            <h1>Teaching Experience</h1>

            <p>
              Teaching Computer Science to Classes 6–8, covering programming
              concepts, databases, MS Office and basic web technologies.
            </p>
          </div>
        );

      case "react":
        return (
          <div className="file-content">
            <h1>React</h1>

            <p>Building reusable and responsive interfaces using React.js.</p>
          </div>
        );

      case "javascript":
        return (
          <div className="file-content">
            <h1>JavaScript</h1>

            <p>
              Working with modern JavaScript, state management, APIs and DOM
              concepts.
            </p>
          </div>
        );

      default:
        return (
          <div className="file-content">
            <h1>{currentFile.label}</h1>

            <p>Content for this file will appear here.</p>
          </div>
        );
    }
  };

  // --------------------------------
  // BREADCRUMB
  // --------------------------------

  const renderBreadcrumb = () => {
    return (
      <div className="breadcrumb">
        <button
          className="back-button"
          onClick={goBack}
          disabled={!currentFile}
        >
          ←
        </button>

        <span>Home</span>

        {filePath.map((item, index) => (
          <React.Fragment key={`${item.id}-${index}`}>
            <span>›</span>

            <span>{item.label}</span>
          </React.Fragment>
        ))}

        {currentFile && (
          <>
            <span>›</span>

            <strong>{currentFile.label}</strong>
          </>
        )}
      </div>
    );
  };

  // --------------------------------
  // UI
  // --------------------------------

  return (
    <Draggable nodeRef={nodeRef} handle=".title-bar" bounds="parent">
      <div ref={nodeRef} className="card">
        {/* =========================
            TITLE BAR
        ========================== */}

        <TitleBar
          title={currentFile ? currentFile.label : section.label}
          onClose={onClose}
        />

        <div className="content">
          {/* =========================
              LEFT SIDEBAR
          ========================== */}

          <div
            className="leftSide"
            style={{
              width: `${sidebarWidth}%`,
            }}
          >
            <SidebarTree
              items={PORTFOLIO_SECTIONS}
              activeFile={currentFile}
              onFileOpen={handleFileOpen}
            />
          </div>

          {/* =========================
              SIDEBAR RESIZER
          ========================== */}

          <div className="sidebar-resizer" onMouseDown={handleSidebarResize} />

          {/* =========================
              RIGHT SIDE
          ========================== */}

          <div className="rightSide">
            {/* BREADCRUMB */}

            {renderBreadcrumb()}

            {/* =========================
                FILE OPEN
            ========================== */}

            {currentFile ? (
              <div className="file-view">{renderFileContent()}</div>
            ) : (
              <div className="empty-folder">
                <div className="empty-folder-icon">📁</div>

                <p>Select a file from the sidebar to view its contents.</p>
              </div>
            )}
          </div>
        </div>

        {/* =========================
            WINDOW RESIZE
        ========================== */}

        <div className="resize-handle" />
      </div>
    </Draggable>
  );
}
