import { EducationCard } from "../../features/about/EducationCard";
import "./../style.css";

export function AboutEducation() {
  return (
    <div className="education">
      <h1>Education</h1>
      <div className="edu-cards">
        <EducationCard
          standard={"class 10"}
          percentage={"89%"}
          year={"2018-2019"}
        />
        <EducationCard
          standard={"class 12"}
          percentage={"88.8%"}
          year={"2020-2021"}
        />
        <EducationCard
          standard={"B Tech"}
          percentage={"8.1 CGPA"}
          year={"2022-2026"}
        />
      </div>
    </div>
  );
}
