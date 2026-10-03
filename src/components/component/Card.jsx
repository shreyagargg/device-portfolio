import React, { useRef, useState } from "react";
import { TitleBar } from "./TitleBar";
import Draggable from "react-draggable";
import { PORTFOLIO_SECTIONS } from "../../constants/navigation";
import { Tile } from "./Tile";
import "../style.css";
import { AboutScreen } from "../screens/Aboutscreen";
import profile from "../../assets/profile-pht.png"; // Ensure filename matches exactly


export function Card({ section, onClose }) {
  const nodeRef = useRef(null);

  const [activeSection, setActiveSection] = useState(section);
  const [sidebarWidth, setSidebarWidth] = useState(30);

  return (
    <Draggable nodeRef={nodeRef} handle=".title-bar" bounds="parent">
      <div ref={nodeRef} className="card">
        <TitleBar title={activeSection.title} onClose={onClose} />

        <div className="content">
          {/* LEFT SIDEBAR */}
          <div className="leftSide" style={{ width: "$(sidebarWidth)%" }}>
            {PORTFOLIO_SECTIONS.map((item) => (
              <Tile
                key={item.id}
                tileName={item.label}
                active={activeSection.id === item.id}
                onClick={() => setActiveSection(item)}
              />
            ))}
          </div>

            <div
        className="sidebar-resizer"
        onMouseDown={(e) => {
            e.preventDefault();

            const card = e.currentTarget.parentElement;
            const startX = e.clientX;
            const startWidth = card.querySelector(".leftSide").offsetWidth;

            const handleMouseMove = (event) => {
                const newWidth =
                    startWidth + (event.clientX - startX);

                const percentage =
                    (newWidth / card.offsetWidth) * 100;

                setSidebarWidth(
                    Math.min(60, Math.max(20, percentage))
                );
            };

            const handleMouseUp = () => {
                document.removeEventListener(
                    "mousemove",
                    handleMouseMove
                );

                document.removeEventListener(
                    "mouseup",
                    handleMouseUp
                );
            };

            document.addEventListener(
                "mousemove",
                handleMouseMove
            );

            document.addEventListener(
                "mouseup",
                handleMouseUp
            );
        }}
    />

          {/* RIGHT CONTENT */}
          <div className="rightSide">
            {activeSection.id === "about" && (
              <AboutScreen />
              // <div>
              //   <h1>About Me</h1>
              //   <p>Your about section content goes here.</p>
              // </div>
            )}

            {activeSection.id === "projects" && (
              <div>
       <img className="profile-avatar" src={profile} alt="Shreya Garg" />
 
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
