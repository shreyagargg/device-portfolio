import React from "react";
import { AboutCard } from "../component/AboutCard";
import { EducationCard } from "../component/EducationCard";

export function AboutScreen() {
    return (
        <div className="about-screen">
            <AboutCard />
            <div className="education">
                <h1>Education</h1>
                <div className="edu-cards">
                    <EducationCard
                        standard={"class 10"}
                        percentage={89}
                        year={"2019-2020"}
                    />
                    <EducationCard
                        standard={"class 12"}
                        percentage={89}
                        year={"2019-2020"}
                    />
                    <EducationCard
                        standard={"B Tech"}
                        percentage={89}
                        year={"2019-2020"}
                    />
                </div>
            </div>
        </div>
    );
}
