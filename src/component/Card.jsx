import { useRef, useState, Fragment } from "react";
import Draggable from "react-draggable";

import { TitleBar } from "./TitleBar";
import { SidebarTree } from "./SidebarTree";

import { PORTFOLIO_SECTIONS } from "../constants/navigation";
import { FILE_REGISTRY } from "../config/FileRegistry";
import { findFirstFile } from "./NavigationUtils";

import "./style.css";

export function Card({
  section,
  onClose,
  onMinimize,
  onMaximize,
  isMaximized = false,
  isMinimized = false,
}) {
  const nodeRef = useRef(null);

  const [sidebarWidth, setSidebarWidth] = useState(20);
  const [currentFile, setCurrentFile] = useState(() =>
    findFirstFile(PORTFOLIO_SECTIONS.find((item) => item.id === section.id)),
  );
  const [filePath, setFilePath] = useState([]);

  const handleFileOpen = (file, path) => {
    setCurrentFile(file);
    setFilePath(path);
  };

  const goBack = () => {
    setCurrentFile(null);
    setFilePath([]);
  };

  const handleSidebarResize = (event) => {
    event.preventDefault();

    const card = nodeRef.current;
    if (!card) return;

    const leftSide = card.querySelector(".leftSide");
    if (!leftSide) return;

    const startX = event.clientX;
    const startWidth = leftSide.offsetWidth;
    const cardWidth = card.querySelector(".content")?.offsetWidth;

    if (!cardWidth) return;

    const handleMouseMove = (moveEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);

      const percentage = (newWidth / cardWidth) * 100;

      setSidebarWidth(Math.min(60, Math.max(20, percentage)));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const renderFileContent = () => {
    if (!currentFile) return null;

    const FileComponent = FILE_REGISTRY[currentFile.id];

    if (FileComponent) {
      return <FileComponent onNavigate={handleFileOpen} />;
    }

    return (
      <div className="file-content">
        <h1>{currentFile.label}</h1>
        <p>Content for this file will appear here.</p>
      </div>
    );
  };

  const renderBreadcrumb = () => (
    <div className="breadcrumb">
      <button
        className="back-button"
        onClick={goBack}
        disabled={!currentFile}
        aria-label="Go back"
      >
        ←
      </button>

      <span>Home</span>

      {filePath.map((item, index) => (
        <Fragment key={`${item.id}-${index}`}>
          <span>›</span>
          <span>{item.label}</span>
        </Fragment>
      ))}

      {currentFile && (
        <>
          <span>›</span>
          <strong>{currentFile.label}</strong>
        </>
      )}
    </div>
  );

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".title-bar"
      bounds="parent"
      disabled={isMaximized}
      position={isMaximized ? { x: 0, y: 0 } : undefined}
    >
      <div
        ref={nodeRef}
        className={`card ${isMaximized ? "maximized" : ""}`}
        style={{ display: isMinimized ? "none" : "flex" }}
      >
        <TitleBar
          title={currentFile?.label || section.label}
          onClose={onClose}
          onMinimize={onMinimize}
          onMaximize={onMaximize}
          isMaximized={isMaximized}
        />

        <div className="content">
          <div className="leftSide" style={{ width: `${sidebarWidth}%` }}>
            <SidebarTree
              items={PORTFOLIO_SECTIONS}
              activeFile={currentFile}
              onFileOpen={handleFileOpen}
            />
          </div>

          <div
            className="sidebar-resizer"
            onMouseDown={handleSidebarResize}
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize sidebar"
          />

          <div className="rightSide">
            {renderBreadcrumb()}

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

        <div className="resize-handle" />
      </div>
    </Draggable>
  );
}
