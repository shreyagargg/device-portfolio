import { useState, useEffect, useRef } from "react";
import "./style.css";
import { Wifi, BatteryMedium, Volume2} from "lucide-react";

export function TaskBar({
  openCard,
  isMinimized = false,
  onToggleMinimize,
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

  return (
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
  );
}