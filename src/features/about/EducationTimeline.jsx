import { EducationCard } from "./EducationCard";
import { education } from "../../constants/education";
import { GraduationCap } from "lucide-react";
import "./about.css"
import "./../features.css"

export function EducationTimeline() {
  return (
    <div style={{ padding: "8px", backgroundColor: "white" }}>

      <div className="features-heading">
        <div className="features-heading-icon">
          <GraduationCap size={20} />
        </div>

        <h1>Education</h1>
      </div>

      {/* Grid container to display cards neatly */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "12px",
        }}
      >
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
