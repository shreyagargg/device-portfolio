import React, { useRef } from "react";
import Draggable from "react-draggable";

export function DesktopIcon({ label, onClick }) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} bounds="parent">
 <button ref={nodeRef} className="desktop-icon-btn" onDoubleClick={onClick}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.414 3.414A2 2 0 0 1 11.828 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586z"
            opacity="0.6"
          />
          <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2z" />
        </svg>
        <span className="icon-label">{label}</span>
      </button>
    </Draggable>
  );
}