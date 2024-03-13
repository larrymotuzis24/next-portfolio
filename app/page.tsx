import Slideshow from "./components/Slideshow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { BiLogoRedux, BiLogoFirebase } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-6">
      <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-6 mx-auto bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-md border border-gray-700 shadow-sm text-white">
        <div className="flex items-center">
          <Link
            href="/about"
            className="hover:text-blue-600 transition-colors mr-4"
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
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

      <div className="mt-6 pb-4 flex flex-col justify-center items-center px-4">
        <div className="border-8 border-gray-300 shadow-2xl rounded-lg overflow-hidden bg-white bg-opacity-60 max-w-6xl w-full p-4">
          <h2 className="text-3xl font-bold text-black dark:text-black text-center relative underline-gradient">
            Recent Work
          </h2>

          <Slideshow />

          <div className="flex flex-col items-center justify-center pt-4">
            <h2 className="text-3xl font-extrabold text-black mb-2">
              Technologies I&apos;ve been working with
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 px-4 md:px-12 py-4">
              {/* Frontend Section */}
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

              {/* Backend Section */}
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
        </div>
      </div>
    </main>
  );
}
