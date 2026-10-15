import { EducationCard } from "./EducationCard";
import {education} from "../../constants/education"

export function EducationTimeline() {
  return (
<div style={{ padding: "4px", backgroundColor: "whitesmoke" }}>
      <h2 style={{ marginBottom: "12px", color: "#0f172a" }}>Education</h2>
      
      {/* Grid container to display cards neatly */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
        gap: "12px" 
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