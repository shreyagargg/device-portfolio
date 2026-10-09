import React, { useRef } from "react";
import Draggable from "react-draggable";
import { FolderIcon } from "./FolderIcon";

export function DesktopIcon({ label, onClick }) {

  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
    >
      <div
        ref={nodeRef}
        className="desktop-icon"
      >
        <button
          className="desktop-icon-btn"
          onDoubleClick={onClick}
        >
          <FolderIcon />

          <span className="icon-label">
            {label}
          </span>
        </button>
      </div>
    </Draggable>
  );
}