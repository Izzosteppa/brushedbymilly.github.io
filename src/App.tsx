import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              SN
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-purple-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
              <a href="#skills" className="hover:text-purple-500 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-purple-500 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={toggleMenu}>Home</a>
              <a href="#about" className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={toggleMenu}>About</a>
              <a href="#skills" className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={toggleMenu}>Skills</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-800 rounded-md" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Izzosteppa" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/siyanda-ngqoba/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
              <Linkedin />
            </a>
            <a href="mailto:siyandangqoba78@gmail.com" className="hover:text-purple-500 transition-colors">
              <Mail />
            </a>
          </div>
          <p className="text-center mt-4 text-gray-400">© 2024 Siyanda Ngqoba. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;