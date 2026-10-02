import React, { useRef, useState } from "react";
import { TitleBar } from "./TitleBar";
import Draggable from "react-draggable";
import { PORTFOLIO_SECTIONS } from "../../constants/navigation";
import { Tile } from "./Tile";
import "../style.css";

export function Card({ section, onClose }) {
  const nodeRef = useRef(null);

  const [activeSection, setActiveSection] = useState(section);

  return (
    <Draggable nodeRef={nodeRef} handle=".title-bar" bounds="parent">
      <div ref={nodeRef} className="card">
        <TitleBar title={activeSection.title} onClose={onClose} />

        <div className="content">
          {/* LEFT SIDEBAR */}
          <div className="leftSide">
            {PORTFOLIO_SECTIONS.map((item) => (
              <Tile
                key={item.id}
                tileName={item.label}
                active={activeSection.id === item.id}
                onClick={() => setActiveSection(item)}
              />
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="rightSide">
            {activeSection.id === "about" && (
              <div>
                <h1>About Me</h1>
                <p>Your about section content goes here.</p>
              </div>
            )}

            {activeSection.id === "projects" && (
              <div>
                <h1>Projects</h1>
                <p>Your projects will appear here.</p>
              </div>
            )}

            {activeSection.id === "skills" && (
              <div>
                <h1>Skills</h1>
                <p>Your skills will appear here.</p>
              </div>
            )}
          </div>
        </div>

        <div className="resize-handle" />
      </div>
    </Draggable>
  );
}
