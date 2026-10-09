import React from "react";
import { AboutCard } from "./AboutCard";
import { EducationCard } from "./EducationCard";
import { SessionInfo } from "./SessionInfo";

export function AboutScreen() {
  return (
    <div className="about-screen">
      <AboutCard />
      {/* <SessionInfo /> */}
    </div>
  );
}
