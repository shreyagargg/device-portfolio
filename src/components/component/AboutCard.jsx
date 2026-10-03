import React from "react";
import "./../style.css";
import profile from "../../assets/profile-pht.png"; // Ensure filename matches exactly

export function AboutCard() {
  return (
    <div className="about-card">
      <img className="profile-avatar" src={profile} alt="Shreya Garg" />
      <div className="right-content">
        <h2>Shreya Garg</h2>
        <h3>Computer Science Graduate</h3>
        <p>
          Hi! I'm Shreya, a passionate Software Engineer and Full Stack Developer
          who loves building meaningful applications that solve real-world problems.
          I enjoy creating beautiful user experiences, developing Android applications,
          exploring backend technologies, and integrating AI into practical products.
          I'm always excited to learn something new and build impactful software.
        </p>
      </div>
    </div>
  );
}