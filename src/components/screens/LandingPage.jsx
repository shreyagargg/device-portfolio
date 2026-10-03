import { useState } from "react";
import desktop from "./../../assets/profile-pht.png";
import "../style.css";
import { PORTFOLIO_SECTIONS } from "../../constants/navigation"
import { DesktopIcon } from "../component/Folder";
import { Card } from "../component/Card";
import { TaskBar } from "../component/TaskBar";

export function LandingPage() {
    const [openCard, setOpenCard] = useState(null);

    return (
        <div className="wallpaper">
            <img src={desktop} alt="wall" />
            <div className="desktop-content">
                {PORTFOLIO_SECTIONS.map((section) => (
                    <DesktopIcon
                    key={section.id}
                    label={section.label}
                    onClick={() => setOpenCard(section)}
                    />
                ))}
            </div>

            {openCard && (
                <Card 
                section = {openCard}
                onClose={() => setOpenCard(false)} />
            )}

            <TaskBar />
        </div>
    );
}