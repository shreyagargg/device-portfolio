import "./style.css";
import { Minus, Maximize2, X} from "lucide-react";

export function TitleBar({ title, onClose }) {
    return (
        <div className="title-bar">
            <div className="window-title">
                {title}
            </div>

            <div className="window-buttons">
                <Minus className="icon" />
                <Maximize2 className="icon" />
                <X
                    className="icon close-icon"
                    onClick={onClose}
                />

            </div>

        </div>
    );
}