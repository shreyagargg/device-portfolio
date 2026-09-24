import React from "react";
import "../style.css";

export function Card(){
    const list = ["About", "Contact Me", "Projects", "Achievements", "Key Skills", "Education"]
    return(
        <div className="card">
            <div className="leftSide">
                <ol>
                    <li>list[0]</li>
                    <li>list[1]</li>
                    <li>list[2]</li>
                </ol>

            </div>
            <div className="rightSide">

            </div>


        </div>
    )
}