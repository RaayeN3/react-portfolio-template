import React, { memo } from "react";

import "../assets/styles/Project.scss";

// Move projects data outside component to prevent recreation on each render
const projects = [
  {
    title: "Project Aurora",
    desc: "A demo app showcasing realtime visuals and responsive UI.",
    img: `${process.env.PUBLIC_URL}/ecommerce2.png`,
    link: "https://github.com/Mohamedbenabbes5/Eshop_MERN_Stack",
  },
  {
    title: "Nebula Runner",
    desc: "Prototype racing game built for quick iteration and testing.",
    img: `${process.env.PUBLIC_URL}/ecommerce1.png`,
    link: "https://github.com/RaayeN3/shopit",
  },
  {
    title: "Starlight CMS",
    desc: "A minimal content platform used to drive static demo content.",
    img: `${process.env.PUBLIC_URL}/portfolio1.png`,
    link: "#",
  },
  {
    title: "J-Flow Project Management",
    desc: "A minimal content platform used to drive static demo content.",
    img: `${process.env.PUBLIC_URL}/custom1.png`,
    link: "https://github.com/RaayeN3/jflowfront",
  },
];

// Memoized Project component to prevent unnecessary re-renders
const Project = memo(({ project }: { project: typeof projects[0] }) => (
  <div className="project">
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <img
        src={project.img}
        className="zoom"
        alt={`${project.title} thumbnail`}
        loading="lazy"
        decoding="async"
        width="600"
        height="338"
      />
    </a>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <h2>{project.title}</h2>
    </a>
    <p>{project.desc}</p>
  </div>
));

const OurProjects: React.FC = () => {
  return (
    <section id="our-projects" className="projects-container">
      <h1>Our Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default memo(OurProjects);
