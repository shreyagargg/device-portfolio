import "./about.css";

export function HobbyCard({ icon, name }) {
  return (
    <div className="hobby">
      {icon}
      <h3>{name}</h3>
    </div>
  );
}
