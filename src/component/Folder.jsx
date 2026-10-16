import { useRef } from "react";
import Draggable from "react-draggable";
import { FolderIcon } from "./FolderIcon";
import "./style.css"

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
          onClick={(e) => {
            if (
              typeof window !== "undefined" &&
              (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches)
            ) {
              onClick(e);
            }
          }}
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