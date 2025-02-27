import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-purple-600">Maf Innovation Lab</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">About Us</Link>
            <Link to="/programs" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">Programs</Link>
            <Link to="/events" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">Events</Link>
            <Link to="/sponsors" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">Sponsors</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium">Contact</Link>
            <Link to="/donate" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Donate</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">About Us</Link>
            <Link to="/programs" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">Programs</Link>
            <Link to="/events" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">Events</Link>
            <Link to="/sponsors" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">Sponsors</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600 font-medium">Contact</Link>
            <Link to="/donate" className="block px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Donate</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;