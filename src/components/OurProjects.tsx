import React from "react";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

const OurProjects: React.FC = () => {
  const projects = [
    {
      title: "Project Aurora",
      desc: "A demo app showcasing realtime visuals and responsive UI.",
      img: mock10,
      link: "#",
    },
    {
      title: "Nebula Runner",
      desc: "Prototype racing game built for quick iteration and testing.",
      img: mock09,
      link: "#",
    },
    {
      title: "Starlight CMS",
      desc: "A minimal content platform used to drive static demo content.",
      img: mock08,
      link: "#",
    },
  ];

  return (
    <section id="our-projects" className="projects-container">
      <h1>Our Projects</h1>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project" key={p.title}>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <img
                src={p.img}
                className="zoom"
                alt={`${p.title} thumbnail`}
                loading="lazy"
                decoding="async"
              />
            </a>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <h2>{p.title}</h2>
            </a>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
