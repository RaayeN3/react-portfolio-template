import React from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { SiReact, SiNextdotjs, SiNestjs } from "react-icons/si";
import { FaNodeJs, FaDatabase } from "react-icons/fa";

const frontendLabels = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Tailwind",
  "Redux",
  "Accessibility",
];

const backendLabels = [
  "Node.js",
  "Express",
  "NestJS",
  "Python",
  "Flask",
  "Django",
  "REST",
  "GraphQL",
  "Docker",
  "CI/CD",
];

const databaseLabels = [
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "SQL",
  "Prisma/ORM",
  "Indexing",
  "Backups",
  "Replication",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <div className="tech-logos">
              <SiReact className="icon" />
              <SiNextdotjs className="icon" />
            </div>
            <h3>Frontend</h3>
            <p>
              Designing responsive, accessible, and high-performance user
              interfaces using modern frontend technologies and best practices
              (React + Next.js).
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontendLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="tech-logos">
              <FaNodeJs className="icon" />
              <SiNestjs className="icon" />
            </div>
            <h3>Backend</h3>
            <p>
              Building robust APIs and services, integrating authentication, and
              scaling server-side components for production.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backendLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="db-logos">
              <FaDatabase className="icon db-icon" />
            </div>
            <h3>Database</h3>
            <p>
              Designing and maintaining relational database systems (SQL) with
              attention to performance, backups, and reliability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {databaseLabels.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
