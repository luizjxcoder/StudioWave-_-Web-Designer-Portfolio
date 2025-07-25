import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white font-semibold text-xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Studio
              </span>
              <span className="ml-1">Wave</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink to="/" label="Home" />
              <NavLink to="/work" label="Work" />
              <NavLink to="/about" label="About" />
              <NavLink to="/skills" label="Skills" />
              <NavLink to="/contact" label="Contact" />
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-300 focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-black/95 backdrop-blur-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/work" label="Work" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/about" label="About" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/skills" label="Skills" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/contact" label="Contact" onClick={() => setIsOpen(false)} />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors relative group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-white/5"
  >
    {label}
  </Link>
);

export default Navbar;
