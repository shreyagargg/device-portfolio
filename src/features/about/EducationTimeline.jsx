import React from "react";
import { EducationCard } from "./EducationCard";
import {education} from "../../constants/education"

export function EducationTimeline() {
  return (
<div style={{ padding: "40px", backgroundColor: "#f8fafc" }}>
      <h2 style={{ marginBottom: "24px", color: "#0f172a" }}>Education</h2>
      
      {/* Grid container to display cards neatly */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
        gap: "20px" 
      }}>
        {education.map((item) => (
          <EducationCard
            key={item.id}
            degree={item.degree}
            institution={item.institution}
            year={item.year}
            marks={item.marks}
          />
        ))}
      </div>
    </div>
  );
}