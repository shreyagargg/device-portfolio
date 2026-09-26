import React from "react";
import "../style.css";
import {Minimize2, Maximize2, X} from "lucide-react"

export function TitleBar(){
    return(
        <div className="title-bar">
            <Minimize2 className="icon" color="#fff"/>
            <Maximize2 className="icon" color="#fff"/>
            <X className="icon" color="#fff"/>
        </div>
    )

} 