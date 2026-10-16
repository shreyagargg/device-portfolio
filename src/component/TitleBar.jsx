import "./style.css";
import { Minus, Maximize2, Minimize2, X } from "lucide-react";

export function TitleBar({
  title,
  onClose,
  onMinimize,
  onMaximize,
  isMaximized = false,
}) {
  return (
    <div
      className="title-bar"
      onDoubleClick={onMaximize}
      title="Double click to maximize/restore"
    >
      <div className="window-title">{title}</div>

      <div className="window-buttons">
        <button
          type="button"
          className="window-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (onMinimize) onMinimize();
          }}
          title="Minimize"
          aria-label="Minimize window"
        >
          <Minus size={14} />
        </button>

        <button
          type="button"
          className="window-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (onMaximize) onMaximize();
          }}
          title={isMaximized ? "Restore Down" : "Maximize"}
          aria-label={isMaximized ? "Restore Down" : "Maximize"}
        >
          {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
        </button>

        <button
          type="button"
          className="window-btn close-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (onClose) onClose();
          }}
          title="Close"
          aria-label="Close window"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
