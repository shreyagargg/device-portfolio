import "./about.css";

export function SessionInfo() {
  const infoData = [
    { label: "User", value: "Shreya", isBold: true },
    { label: "Role", value: "Developer", isAccent: true },
    { label: "Status", value: "Learning", isStatus: true },
    { label: "Education", value: "B Tech CSE" },
    { label: "Location", value: "Delhi" },
    { label: "Target", value: "Full Stack Developer", isAccent: true },
    { label: "Total experience", value: "1 year" },
  ];

  return (
    <div className="card-container">
      {/* Header */}
      <div className="card-header">
        <div className="card-title">
          <span className="info-icon">i</span>
          <h2>SESSION INFORMATION</h2>
        </div>
        <span className="version">v2.4.0</span>
      </div>

      {/* Body List */}
      <div className="card-body">
        {infoData.map((item, index) => (
          <div className="info-row" key={index}>
            <span className="info-label">{item.label}</span>
            <span
              className={`info-value ${item.isBold ? "bold" : ""} ${
                item.isAccent ? "accent" : ""
              } ${item.isStatus ? "status" : ""}`}
            >
              {item.isStatus && <span className="status-dot"></span>}
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="card-footer">
        <span className="prompt-path">C:\&gt;</span>
        <span className="prompt-text"> Dream . Build . Repeat _</span>
      </div>
    </div>
  );
}