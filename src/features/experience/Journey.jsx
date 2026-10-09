import { motion } from "framer-motion";
import { TIMELINE_DATA } from "../../constants/TimelineData";
// import "./style.css";

export function Journey() {
  return (
    <div className="timeline">
      <motion.div
        className="timeline-line"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />

      {TIMELINE_DATA.map((item, index) => (
        <motion.div
          key={item.year}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 1.3 + index * 0.45,
          }}
        >
          <motion.div
            className="timeline-dot"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 1.15 + index * 0.45,
            }}
          />

          <div className="timeline-card">
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
