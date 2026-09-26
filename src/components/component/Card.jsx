import React from "react";
import "../style.css";
import { PORTFOLIO_SECTIONS } from "../../constants/navigation"
import { TitleBar } from "./TitleBar";

export function Card(){
    return(
        <div className="card">
            <TitleBar />
            <div className="content">
            <div className="leftSide">
                {PORTFOLIO_SECTIONS.map((section) => (
                    <h1>{section.label}</h1>
                ))}
              

            </div>
            <div className="rightSide">
                   {PORTFOLIO_SECTIONS.map((section) => (
                    <h1>{section.label}</h1>
                ))}

            </div>
  </div>

        </div>
    )
}