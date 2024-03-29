"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

const projects: ProjectProps[] = [
  {
    src: "/projects/cvg-website.png",
    alt: "CVG",
    title: "CVG",
    description: "Cooper Valuation Group company website redesign",
    link: "https://www.coopervaluationgroup.com/",
  },
  {
    src: "/projects/ABN.png",
    alt: "ABN",
    title: "Assist Basketball Network",
    description: "Redisigned/relaunched company website",
    link: "https://assistbasketballnetwork.com/",
  },
  {
    src: "/projects/tic-tac-toe.png",
    alt: "tic-tac-toe",
    title: "Tic-Tac-Toe vs AI",
    description: "Face off in a duel vs AI player in a classic Tic-Tac-Toe game.",
    link: "https://larrymotuzis24.github.io/tic-tac-toe/",
  },
];

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
<div className="relative flex justify-center items-center w-full shadow-2xl rounded-lg overflow-hidden pb-6" style={{ minHeight: '640px' }}>
    {projects.map((project, index) => (
      <div
        key={index}
        className={`absolute transition-opacity duration-1000 ease-in-out ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: index === currentIndex ? "auto" : "none", width: '940px', height: '640px' }}
      >
        <div className="relative w-full h-full">
          <Image
            src={project.src}
            alt={project.alt}
            fill
            className="object-cover"
            quality={90}
            sizes="(max-width: 840px) 100vw, 640px"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Project
          </a>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default Slideshow;
