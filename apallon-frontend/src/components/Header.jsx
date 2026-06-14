import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { dark, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass =
    'hover:text-purple-600 dark:hover:text-purple-400 transition text-sm font-medium';

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={dark ? '/apallon-logo-dark.png' : '/apallon-logo-light.png'}
            alt="Apallon"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 hidden sm:inline">
            Apallon
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/blog" className={linkClass}>Blog</Link>
          <Link to="/projects" className={linkClass}>Projects</Link>
          <Link to="/about" className={linkClass}>About</Link>
          <Link to="/resume" className={linkClass}>Resume</Link>
          <Link to="/contact" className={linkClass}>Contact</Link>
        </div>

        {/* Right side: toggle + hamburger */}
        <div className="flex items-center gap-2">
          {/* Theme toggle (always visible) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Hamburger button (mobile only) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            <Link to="/blog" className={`block py-2 ${linkClass}`} onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link to="/projects" className={`block py-2 ${linkClass}`} onClick={() => setMobileOpen(false)}>Projects</Link>
            <Link to="/about" className={`block py-2 ${linkClass}`} onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/resume" className={`block py-2 ${linkClass}`} onClick={() => setMobileOpen(false)}>Resume</Link>
            <Link to="/contact" className={`block py-2 ${linkClass}`} onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;