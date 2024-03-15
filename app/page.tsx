"use client";
import React, { useState } from "react";
import Slideshow from "./components/Slideshow";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { BiLogoRedux, BiLogoFirebase } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import ContactForm from "./components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <main className="flex flex-col min-h-screen p-6">
      <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-6 mx-auto bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-md border border-gray-700 shadow-sm text-white">
        <div className="flex items-center">
          <Link
            href="#about"
            className="hover:text-blue-600 transition-colors mr-4"
          >
            About Me
          </Link>
          <a
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            className="hover:text-blue-600 transition-colors cursor-pointer"
            role="button"
          >
            Contact
          </a>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Larry Motuzis
          </h2>
        </div>
        <div className="flex items-center">
          <Link
            href="https://github.com/larrymotuzis24"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors mr-4"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/larry-motuzis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ width: "24px", height: "24px", color: "#0077B5" }}
            />
          </Link>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
          <div
            className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
            aria-hidden="true"
          ></div>

          <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-xl w-full">
            <div className="p-6">
              <ContactForm onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 pb-4 flex flex-col justify-center items-center px-4">
        <div className="border-8 border-gray-300 shadow-2xl rounded-lg overflow-hidden bg-white bg-opacity-80 max-w-6xl w-full p-4">
          <h2 className="text-3xl font-bold text-black dark:text-black text-center relative underline-gradient">
            Recent Work
          </h2>

          <Slideshow />
        </div>


        <div className="bg-white mt-6 mb-6 bg-opacity-90 rounded-lg shadow-xl md:p-12 flex flex-col lg:flex-col items-center">
          <h2 className="text-3xl font-extrabold text-black mb-2">
            Technologies I&apos;ve been working with
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 px-4 md:px-12 py-4">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-black mb-4">Frontend</h3>
              <ul className="list-none space-y-2 text-center font-extrabold">
                <li className="flex items-center">
                  <FaReact className="text-2xl mr-4 text-blue-600" />
                  React
                </li>
                <li className="flex items-center">
                  <BiLogoRedux className="text-2xl mr-4 text-purple-600" />
                  Redux-Toolkit
                </li>
                <li className="flex items-center">
                  <TbBrandTypescript className="text-2xl mr-4 text-blue-500" />
                  TypeScript
                </li>
                <li className="flex items-center">
                  <SiTailwindcss className="text-2xl mr-4 text-teal-400" />
                  TailWind CSS
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-black mb-4">Backend</h3>
              <ul className="list-none space-y-2 text-center font-extrabold">
                <li className="flex items-center">
                  <FaNodeJs className="text-2xl mr-4 text-green-600" />
                  Node.js
                </li>
                <li className="flex items-center">
                  <FaPhp className="text-2xl mr-4 text-purple-600" />
                  PHP
                </li>
                <li className="flex items-center">
                  <BiLogoFirebase className="text-2xl mr-4 text-yellow-500" />
                  Firebase
                </li>
                <li className="flex items-center">
                  <SiMongodb className="text-2xl mr-4 text-green-500" />
                  MongoDB
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section
          id="about"
          className="py-8 lg:py-18 bg-cover bg-center"
          style={{ backgroundImage: 'url("/bg2.webp")' }}
        >
          <div className="container mx-auto px-4">
            <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 md:p-12 flex flex-col lg:flex-row items-center">
              <div className="lg:flex-1 lg:mr-8 text-center lg:text-left">
                <div className="relative mx-auto lg:mx-0 rounded-full w-48 h-48 lg:w-56 lg:h-56 shadow-lg">
                  <Image
                    src="/lm_profile.JPG"
                    alt="Professional"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div className="relative mx-auto lg:mx-0 rounded-full w-48 h-48 lg:w-56 lg:h-56 shadow-lg mt-4 lg:mt-8">
                  <Image
                    src="/lm_bball.png"
                    alt="Basketball"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center 20%"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="lg:flex-1 mt-6 lg:mt-0">
                <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-left text-gray-800 mb-4">
                  About Me
                </h2>
                <p className="text-md lg:text-lg text-gray-700 text-center lg:text-left">
                  I am a former division one basketball player turned software
                  developer. As a full-stack web developer, I&apos;ve had the
                  opportunity to work with clients on creating and redesigning
                  company websites, as well as developing web applications
                  tailored to meet their unique needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
