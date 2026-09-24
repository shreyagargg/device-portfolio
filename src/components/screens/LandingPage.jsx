import { useRef } from "react";
import Draggable from "react-draggable";
import desktop from "../../assets/desktopWallpaper.png";
import "../style.css";

export function LandingPage() {
    // Create individual refs for each draggable icon
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    return (
        <div className="wallpaper">
            <img src={desktop} alt="wall" />
            {/* bounds="parent" keeps the draggable elements inside this container */}
            <div className="desktop-content">
                
                <Draggable nodeRef={ref1} bounds="parent">
                    <button ref={ref1} className="desktop-icon-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.414 3.414A2 2 0 0 1 11.828 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586z" opacity="0.6" />
                            <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2z" />
                        </svg>
                        <span className="icon-label">My Documents</span>
                    </button>
                </Draggable>

                <Draggable nodeRef={ref2} bounds="parent">
                    <button ref={ref2} className="desktop-icon-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.414 3.414A2 2 0 0 1 11.828 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586z" opacity="0.6" />
                            <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2z" />
                        </svg>
                        <span className="icon-label">My Documents</span>
                    </button>
                </Draggable>

                <Draggable nodeRef={ref3} bounds="parent">
                    <button ref={ref3} className="desktop-icon-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.414 3.414A2 2 0 0 1 11.828 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586z" opacity="0.6" />
                            <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2z" />
                        </svg>
                        <span className="icon-label">My Documents</span>
                    </button>
                </Draggable>

                <Draggable nodeRef={ref4} bounds="parent">
                    <button ref={ref4} className="desktop-icon-btn">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.414 3.414A2 2 0 0 1 11.828 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586z" opacity="0.6" />
                            <path d="M2 9v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9H2z" />
                        </svg>
                        <span className="icon-label">My Documents</span>
                    </button>
                </Draggable>

                <Draggable nodeRef={ref5} bounds="parent">
                    <button ref={ref5} className="desktop-icon-btn">
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