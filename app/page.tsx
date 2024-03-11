import Slideshow from "./components/Slideshow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-10">
<nav className="flex items-center justify-between w-full max-w-5xl px-4 py-6 mx-auto text-sm font-mono bg-gradient-to-b from-zinc-200 to-transparent border-b border-gray-300 backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30">
  <div className="flex items-center">
    <h2 className="text-xl font-bold mr-8">Larry Motuzis</h2>
    <Link href="/about" className="hover:text-blue-600 transition-colors mr-4">About Me</Link>
    <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
  </div>
  <div className="flex items-center">
    <Link href="https://github.com/larrymotuzis24"   target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors mr-4">
    <FontAwesomeIcon icon={faGithub} style={{ width: '24px', height: '24px' }} />
    </Link>
    <Link href="https://www.linkedin.com/in/larry-motuzis/"    target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
    <FontAwesomeIcon icon={faLinkedin} style={{ width: '24px', height: '24px' }} />
    </Link>
  </div>
</nav>
<div className="text-center pt-10">
    <p className="text-xl mt-2">Full Stack Developer with a passion for building scalable web applications and engaging user experiences.</p>
  </div>
  
    <div className="flex items-center pt-10 justify-center w-full h-full" style={{ minHeight: '640px' }}>
      <Slideshow />
    </div>
  </main>
  
  );
}
