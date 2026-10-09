import React from "react";
import { EducationCard } from "./EducationCard";
import {education} from "./../../constants/education"

export function EducationTimeline() {
  return (
    <section className="education-section">
      <h2>Education Journey</h2>
      <div className="card-list">
        {education.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}