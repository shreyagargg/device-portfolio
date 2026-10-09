import React from "react";
import profile from "../../assets/profile-pht.png";

export function AboutCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "20px",
        padding: "20px",
        width: "100%",
        boxSizing: "border-box",
        backdropFilter: "blur(1px)",
        backgroundColor: "whiteSmoke"
      }}
    >
      {/* LEFT: IMAGE CONTAINER (Isse image stretch hona strict band ho jayega) */}
      <div
        style={{
          flexShrink: 0,
          width: "120px",
          height: "120px",
          maxWidth: "120px",
          maxHeight: "120px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "50%",
          border: "3px solid #c239d7",
          boxShadow: "0 4px 12px rgba(194, 57, 215, 0.25)"
        }}
      >
        <img
          src={profile}
          alt="Shreya Garg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }}
        />
      </div>

      {/* RIGHT: TEXT CONTENT */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ margin: "0 0 2px 0", fontSize: "1.5rem", fontWeight: 700, color: "#1a202c" }}>
          Shreya Garg
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px"
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#c239d7"
            }}
          >
            Computer Science Graduate
          </h2>

          {/* ONLINE STATUS */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#34d399",
              fontSize: "0.8rem",
              fontWeight: 600
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                backgroundColor: "#34d399",
                borderRadius: "50%",
                display: "inline-block"
              }}
            ></span>
            Online
          </span>
        </div>

        <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.5, color: "#4a5568" }}>
          Hi! I'm Shreya, a passionate Software Engineer and Full Stack Developer who loves building meaningful applications that solve real-world problems.
          <br /><br />
          I enjoy creating beautiful user experiences, developing Android applications, exploring backend technologies, and integrating AI into practical products. I'm always excited to learn something new and build impactful software.
        </p>
      </div>
    </div>
  );
}