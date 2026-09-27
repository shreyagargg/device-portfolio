import { useState } from "react";
import desktop from "../../assets/desktopWallpaper.png";
import "../style.css";
import { PORTFOLIO_SECTIONS } from "../../constants/navigation"
import { DesktopIcon } from "../component/Folder";
import { Card } from "../component/Card";

export function LandingPage() {
    const [openCard, setOpenCard] = useState(false);

    return (
        <div className="wallpaper">
            <img src={desktop} alt="wall" />
            <div className="desktop-content">
                {PORTFOLIO_SECTIONS.map((section) => (
                    <DesktopIcon
                    key={section.id}
                    label={section.label}
                    onClick={() => setOpenCard(true)}
                    />
                ))}
            </div>

            {openCard && (
                <Card onClose={() => setOpenCard(false)} />
            )}
        </div>
    );
}