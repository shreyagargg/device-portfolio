import React from "react";
import "./../style.css";

export function EducationCard({ standard, percentage, year }) {
  return (
    <div className="edu-card">
      <h2>{standard}</h2>
      <div className="lower-line">
        <p style={{ fontWeight: "bold" }}>{percentage}</p>
        <p>{year}</p>
      </div>
    </div>
  );
}
