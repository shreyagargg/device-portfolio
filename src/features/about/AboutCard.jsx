import profile from "../../assets/profile-pht.png";
import "./about.css";

export function AboutCard() {
  return (
    <div className="about">
      <div className="left" >
        <img src={profile} alt="Shreya Garg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* RIGHT: TEXT CONTENT */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1
          style={{
            margin: "0 0 2px 0",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a202c",
          }}
        >
          Shreya Garg
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#c239d7",
            }}
          >
            Full Stack Developer
          </h2>

          {/* ONLINE STATUS */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#34d399",
              fontSize: "0.8rem",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                backgroundColor: "#34d399",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
            Online
          </span>
        </div>

        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            lineHeight: 1.5,
            color: "#4a5568",
          }}
        >
          Full-stack & Android developer building apps people enjoy using.
          Creator of SyAi, an AI productivity assistant. 400+ LeetCode problems
          solved, 1500+ contest rating. Currently learning system design and
          backend with Node.js.
        </p>
      </div>
    </div>
  );
}
