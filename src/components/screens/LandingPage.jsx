import { useRef } from "react";
import Draggable from "react-draggable";
import desktop from "../../assets/desktopWallpaper.png";
import "./screen.css";

export function LandingPage() {
    const nodeRef = useRef(null)
    return (
        <div className="wallpaper">
            <img src={desktop} alt="wall" />
            <div className="desktop-content" ref={nodeRef}>
                <Draggable nodeRef={nodeRef}>
                    <button className="desktop-icon-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.414 3.414A2 2 0 0 1 11.828 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586z" opacity="0.6" />
                            <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2z" />
                        </svg>
                        <span className="icon-label">My Documents</span>
                    </button>
                </Draggable>

                <Draggable nodeRef={nodeRef}>
                    <button className="desktop-icon-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.414 3.414A2 2 0 0 1 11.828 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586z" opacity="0.6" />
                            <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2z" />
                        </svg>
                        <span className="icon-label">My Documents</span>
                    </button>
                </Draggable>

                <Draggable nodeRef={nodeRef}>
                    <button className="desktop-icon-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.414 3.414A2 2 0 0 1 11.828 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586z" opacity="0.6" />
                            <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2z" />
                        </svg>
                        <span className="icon-label">My Documents</span>
                    </button>
                </Draggable>

                <Draggable nodeRef={nodeRef}>
                    <button className="desktop-icon-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.414 3.414A2 2 0 0 1 11.828 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586z" opacity="0.6" />
                            <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2z" />
                        </svg>
                        <span className="icon-label">My Documents</span>
                    </button>
                </Draggable>

                <Draggable nodeRef={nodeRef}>
                    <button className="desktop-icon-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.414 3.414A2 2 0 0 1 11.828 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586z" opacity="0.6" />
                            <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2z" />
                        </svg>
                        <span className="icon-label">My Documents</span>
                    </button>
                </Draggable>

            </div>
        </div>
    );
}