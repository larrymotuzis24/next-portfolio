import Slideshow from "./components/Slideshow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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
              style={{ width: "24px", height: "24px", color: '#0077B5'}}
            />
          </Link>
        </div>
      </nav>
      <div className="text-center my-12">
  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Larry Motuzis</h2>
  <p className="text-xl mt-4 font-medium text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
    Full Stack Developer with a passion for building scalable web applications and engaging user experiences.
  </p>
</div>

      <div className="mt-12 flex justify-center items-center px-4">
  <div className="border-8 border-gray-300 shadow-2xl rounded-lg overflow-hidden bg-white bg-opacity-60 max-w-6xl w-full p-4">
    <Slideshow />
  </div>
</div>
      <div
        className="flex flex-col pt-4 self-center"
        >
          <h1> Skills </h1>
          <div className="flex flex-row">
            <div>
              <h2> Front End </h2>
            </div>
            <div>
              <h2> Back End </h2>
            </div>
          </div>
       
      </div>
    </main>
  );
}
