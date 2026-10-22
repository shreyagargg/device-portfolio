import {Code2, Server, Database, Cloud, Zap, Star, Copy, Cpu, Layers, Terminal, Play} from "lucide-react";
import { useState } from "react";
import "./project.css";

const projectXStack = [
  {
    category: "Frontend",
    items: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
    icon: Code2,
    color: "frontend",
  },
  {
    category: "Backend & Microservices",
    items: ["Node.js", "Go (Golang)", "gRPC / Protocol Buffers", "GraphQL", "Express"],
    icon: Server,
    color: "backend",
  },
  {
    category: "Data & Engine",
    items: ["PostgreSQL", "Redis Cache", "Apache Kafka", "Vector DB (Pinecone)"],
    icon: Database,
    color: "data",
  },
  {
    category: "DevOps & Infra",
    items: ["Docker", "Kubernetes", "AWS ECS", "GitHub Actions", "Prometheus"],
    icon: Cloud,
    color: "infra",
  },
];

export function SyAiScreen() {
  const [simPayload, setSimPayload] = useState(
    '{\n  "cluster_id": "us-east-9",\n  "parallel_workers": 16,\n  "cache_enabled": true\n}'
  );
  const [simResponse, setSimResponse] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const runApiSimulation = () => {
    setIsSimulating(true);
    setSimResponse(null);

    setTimeout(() => {
      setIsSimulating(false);
      setSimResponse({
        status: 200,
        status_text: "OK",
        latency_ms: 1.4,
        node: "edge-worker-04",
        payload_received: true,
        data: {
          execution_id: "exec_x_" + Math.random().toString(36).substring(7),
          tasks_queued: 16,
          cache_hit_ratio: "99.4%",
          grpc_stream_status: "CONNECTED",
        },
      });
    }, 600);
  };

  const handleCopy = async () => {
    const command = "git clone https://github.com/shreya-garg/project-x.git";
    try {
      await navigator.clipboard.writeText(command);
    } catch (error) {
      console.error("Could not copy clone command:", error);
    }
  };

  return (
    <div className="project-screen">
      <section className="project-header">
        <div className="header-topline">
          <span className="flagship-badge">
            <Zap className="icon-small icon-filled" /> Flagship Engine
          </span>
          <div className="github-stars">
            <Star className="icon-star" />
            <span>142 Stars on GitHub</span>
          </div>
        </div>

        <h1 className="project-title">Project X: Distributed Execution Engine</h1>
        <p className="project-description">
          An event-driven distributed workflow orchestration platform handling
          high-concurrency payload streaming, gRPC communication, and real-time
          frontend monitoring.
        </p>

        <div className="project-actions">
          <a
            href="https://github.com/shreya-garg"
            target="_blank"
            rel="noreferrer"
            className="action-link"
          >
            <Code2 className="icon-action" /> GitHub Code
          </a>
          <button onClick={handleCopy} className="clone-button" type="button">
            <Copy className="icon-action purple-icon" /> Clone Repo
          </button>
        </div>
      </section>

      <section className="architecture-panel">
        <h2 className="section-heading">
          <Layers className="section-icon" />
          <span>Architecture Pipeline Flow</span>
        </h2>

        <div className="architecture-grid">
          <div className="architecture-step step-frontend">
            <strong>1. Frontend UI</strong>
            <span>React 18 + Zustand</span>
          </div>
          <div className="architecture-step step-backend">
            <strong>2. API Gateway</strong>
            <span>gRPC Web &amp; Proxy</span>
          </div>
          <div className="architecture-step step-data">
            <strong>3. Event Stream</strong>
            <span>Apache Kafka Engine</span>
          </div>
          <div className="architecture-step step-infra">
            <strong>4. DB &amp; Cache</strong>
            <span>Postgres + Redis</span>
          </div>
        </div>
      </section>

      <section className="tech-section">
        <h2 className="section-heading tech-heading">
          <Cpu className="section-icon" />
          <span>Comprehensive Tech Stack</span>
        </h2>

        <div className="tech-grid">
          {projectXStack.map((group) => {
            const Icon = group.icon;
            return (
              <article className="tech-card" key={group.category}>
                <h3 className="tech-card-heading">
                  <Icon className="section-icon" />
                  <span>{group.category}</span>
                </h3>
                <div className="tech-tags">
                  {group.items.map((item) => (
                    <span className={`tech-tag tag-${group.color}`} key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="simulator-panel">
        <div className="simulator-header">
          <div className="simulator-title">
            <Terminal className="terminal-icon" />
            <span>Live Payload Simulator</span>
          </div>
          <span className="endpoint-label">POST /api/v1/workflow/execute</span>
        </div>

        <div className="simulator-controls">
          <textarea
            aria-label="Request JSON payload"
            value={simPayload}
            onChange={(event) => setSimPayload(event.target.value)}
            rows={3}
            className="payload-input"
          />

          <button
            onClick={runApiSimulation}
            disabled={isSimulating}
            className="run-button"
            type="button"
          >
            <Play className="icon-action icon-filled" />
            <span>{isSimulating ? "Streaming Execution..." : "Run Engine Request"}</span>
          </button>
        </div>

        {simResponse && (
          <div className="simulator-response">
            <div className="response-meta">
              <span>Status: 200 OK</span>
              <span>Latency: {simResponse.latency_ms}ms</span>
            </div>
            <pre>{JSON.stringify(simResponse.data, null, 2)}</pre>
          </div>
        )}
      </section>
    </div>
  );
}
