import React from "react";
import "../style.css";
import { Minimize2, Maximize2, X } from "lucide-react"

export function TitleBar({ onClose }) {
    return (
        <div className="title-bar">
            <div className="windows-button">
                <Minimize2 className="icon" color="#fff" />
                <Maximize2 className="icon" color="#fff" />
                <X className="icon close-icon" color="#fff" onClick={onClose}/>
            </div>
        </div>
    )
} 