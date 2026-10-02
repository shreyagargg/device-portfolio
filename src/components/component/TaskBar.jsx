import React from "react";
import "./../style.css"
import { Wifi, BatteryMedium, Volume2 } from "lucide-react";

export function TaskBar(){
    return (
        <div className="taskbar">
            <Wifi color="whitesmoke" size = {18} />
            <BatteryMedium color="whitesmoke" size = {18} />
            <Volume2 color="whitesmoke" size = {18} />
            <div className="taskbar-date-time">
                <p>10:00 pm</p>
                <p>10:00: 2026</p>
            </div>
        </div>
    )
}