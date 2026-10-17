import { useState } from "react";
import desktop from "./assets/profile-pht.png";
import "./App.css";
import { PORTFOLIO_SECTIONS } from "./constants/navigation";
import { DesktopIcon } from "./component/Folder";
import { Card } from "./component/Card";
import { TaskBar } from "./component/TaskBar";

export function LandingPage() {
  const [openCard, setOpenCard] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleOpenSection = (section) => {
    setOpenCard(section);
    setIsMinimized(false);
  };

  const handleCloseWindow = () => {
    setOpenCard(null);
    setIsMinimized(false);
    setIsMaximized(false);
  };

  const handleToggleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

  const handleToggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  return (
    <div className="wallpaper">
      <img src={desktop} alt="wall" />
      <div className="desktop-content">
        {PORTFOLIO_SECTIONS.map((section) => (
          <DesktopIcon
            key={section.id}
            label={section.label}
            onClick={() => handleOpenSection(section)}
          />
        ))}
      </div>

      {openCard && (
        <Card
          key={openCard.id}
          section={openCard}
          isMinimized={isMinimized}
          isMaximized={isMaximized}
          onMinimize={() => setIsMinimized(true)}
          onMaximize={handleToggleMaximize}
          onClose={handleCloseWindow}
        />
      )}

      <TaskBar
        openCard={openCard}
        isMinimized={isMinimized}
        onToggleMinimize={handleToggleMinimize}
      />
    </div>
  );
}
