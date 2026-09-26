import desktop from "../../assets/desktopWallpaper.png";
import "../style.css";
import { PORTFOLIO_SECTIONS } from "../../constants/navigation"
import { DesktopIcon } from "../component/Folder";

export function LandingPage() {

    return (
        <div className="wallpaper">
            <img src={desktop} alt="wall" />
            <div className="desktop-content">
                {PORTFOLIO_SECTIONS.map((section) => (
                    <DesktopIcon
                    key={section.id}
                    label={section.label}
                    onClick={() => alert(`${section.label} clicked`)}
                    />
                ))}
            </div>
        </div>
    );
}