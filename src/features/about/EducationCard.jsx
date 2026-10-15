import { GraduationCap, Calendar, Award, Building2 } from "lucide-react";
import "./about.css";

export function EducationCard({ degree, institution, year, marks }) {
  return (
    <div className="edu-card">
      <div className="edu-card-header">
        <div className="edu-icon-wrapper">
          <GraduationCap className="edu-icon" size={20} />
        </div>
        <div className="edu-title-group">
          <h3 className="edu-degree">{degree}</h3>
          <p className="edu-institution">
            <Building2 size={14} className="inline-icon" />
            {institution}
          </p>
        </div>
      </div>

      <div className="edu-card-footer">
        <div className="edu-meta">
          <Calendar size={14} className="inline-icon" />
          <span>{year}</span>
        </div>
        <div className="edu-badge">
          <Award size={14} className="inline-icon" />
          <span>{marks}</span>
        </div>
      </div>
    </div>
  );
}