import React from "react";
import "../style.css";
import { Minimize2, Maximize2, X} from "lucide-react";

export function TitleBar({ title, onClose }) {
    return (
        <div className="title-bar">

            <div className="window-title">
                {title}
            </div>

            <div className="window-buttons">
                <Minimize2 className="icon" />
                <Maximize2 className="icon" />
                <X
                    className="icon close-icon"
                    onClick={onClose}
                />

            </div>

        </div>
    );
}