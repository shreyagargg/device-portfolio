import React, { useRef } from "react";
import Draggable from "react-draggable";
import "../style.css";
import { PORTFOLIO_SECTIONS } from "../../constants/navigation";
import { TitleBar } from "./TitleBar";
import { Tile } from "./Tile";

export function Card({ onClose }) {

    const nodeRef = useRef(null);

    return (
        <Draggable
            nodeRef={nodeRef}
            handle=".title-bar"
            bounds="parent"
        >
            <div ref={nodeRef} className="card">

                <TitleBar onClose={onClose} />

                <div className="content">

                    <div className="leftSide">
                        {PORTFOLIO_SECTIONS.map((section) => (
                            <Tile key={section.id} tileName = {section.label} />
                        ))}
                    </div>

                    <div className="rightSide">
                        {PORTFOLIO_SECTIONS.map((section) => (
                            <h1 key={section.id}>
                                {section.label}
                            </h1>
                        ))}
                    </div>

                </div>

                {/* Resize handle */}
                <div className="resize-handle" />

            </div>
        </Draggable>
    );
}