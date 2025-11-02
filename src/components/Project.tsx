import React from "react";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";

const projects = [
  {
    title: "Filmate AI",
    img: mock10,
    link: "https://www.filmate.club/",
    desc: "Movie finder app with semantic search and sentiment analysis using OpenAI, Qdrant, React, and Flask.",
  },
  {
    title: "High Speed Chase",
    img: mock09,
    link: "https://yujisatojr.itch.io/highspeedchase",
    desc: "3D multiplayer racing game developed with C# and Unity, available on Itch.io.",
  },
  {
    title: "Astro Raiders",
    img: mock08,
    link: "https://yujisatojr.itch.io/spacecraft",
    desc: "2D shooting game (Unity) developed and released on Itch.io.",
  },
];

export default function Project() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-12">
        Personal Projects
      </h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 text-center"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.img}
                alt={`${project.title} thumbnail`}
                className="rounded-xl w-full object-cover mb-4 hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                {project.title}
              </h2>
            </a>
            <p className="text-gray-600 text-sm">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
