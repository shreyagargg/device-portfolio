import { useState, useEffect } from "react";
import "./style.css"
import { Wifi, BatteryMedium, Volume2 } from "lucide-react";

export function TaskBar(){
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {setNow(new Date())}, 1000);
        return () => clearInterval(interval);
    }, []);
    
    const time = now.toLocaleTimeString("en-In", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    })

    const date = now.toLocaleDateString("en-In", {
        day: "2-digit",
        minute: "2-digit",
        year: "numeric"
    })

    return (
        <div className="taskbar">
            <Wifi color="whitesmoke" size = {18} />
            <BatteryMedium color="whitesmoke" size = {18} />
            <Volume2 color="whitesmoke" size = {18} />
            <div className="taskbar-date-time">
                <p>{time}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}