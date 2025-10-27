import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-fuchsia-700 fixed top-0 w-full z-50 py-2 px-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Botón Móvil */}
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-14 w-14 rounded-full transition-transform duration-500 hover:scale-150"
                src="/img/Logo.png"
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="rounded-md bg-gray-900 px-4 py-4 text-sm sm:text-base md:text-lg lg:text-xl font-bebas font-bold text-white hover:text-yellow-500"
                >
                  Inicio
                </Link>
                <Link
                  to="/semestre-i-ii"
                  className="rounded-md px-6 py-4 text-sm sm:text-base md:text-lg lg:text-xl font-bebas font-bold text-black hover:bg-yellow-500 hover:text-black"
                >
                  Semestre I-II
                </Link>
                <Link
                  to="/semestre-iii"
                  className="rounded-md px-6 py-4 text-sm sm:text-base md:text-lg lg:text-xl font-bebas font-bold text-black hover:bg-yellow-500 hover:text-black"
                >
                  Semestre III
                </Link>
                <Link
                  to="/semestre-iv"
                  className="rounded-md px-6 py-4 text-sm sm:text-base md:text-lg lg:text-xl font-bebas font-bold text-black hover:bg-yellow-500 hover:text-black"
                >
                  Semestre IV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`sm:hidden ${isMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            to="/"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white hover:text-yellow-500"
            onClick={toggleMenu}
          >
            Inicio
          </Link>
          <Link
            to="/semestre-i-ii"
            className="block rounded-md px-3 py-2 text-base font-bebas font-bold font-medium text-black hover:bg-yellow-500 hover:text-black"
            onClick={toggleMenu}
          >
            Semestre I-II
          </Link>
          <Link
            to="/semestre-iii"
            className="block rounded-md px-3 py-2 text-base font-bebas font-bold font-medium text-black hover:bg-yellow-500 hover:text-black"
            onClick={toggleMenu}
          >
            Semestre III
          </Link>
          <Link
            to="/semestre-iv"
            className="block rounded-md px-3 py-2 text-base font-bebas font-bold font-medium text-black hover:bg-yellow-500 hover:text-black"
            onClick={toggleMenu}
          >
            Semestre IV
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;