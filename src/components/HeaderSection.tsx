import { useState, useEffect, useCallback, useMemo } from "react";
import { debounce } from "lodash";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 0);
    }, 50);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleEmailClick = useCallback(() => {
    const newTab = window.open("mailto:Shariqkhab7@gmail.com?subject=Checking%20In&body=HI!", "_blank");

    if (newTab) {
      newTab.opener = null;
    }
  }, []);

  const navLinks = useMemo(() => [
    { section: "about", label: "About" },
    { section: "work", label: "Work" },
    { section: "book", label: "Book" },
  ], []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 px-6 md:px-20 transition duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-lg" : "bg-transparent"
      } md:bg-transparent ${
        isMenuOpen ? "md:bg-transparent" : ""
      }`}
    >
      <div className="flex h-20 items-center justify-between">
        <a href="#home" className="text-white text-lg">
          <img src="/logo.svg" alt="Project logo" className="w-10 h-10 md:w-12 md:h-12" />
        </a>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-20 items-center">
          {navLinks.map(({ section, label }) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-white font-bold hover:text-gray-300"
            >
              {label}
            </a>
          ))}
          <button
            className="border rounded-lg border-white text-white font-bold text-sm py-2 px-4 hover:bg-white hover:text-black transition-colors duration-300"
            onClick={handleEmailClick}
          >
            Email me
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-black opacity-90  text-white p-6 md:hidden">
            <nav className="flex flex-col items-start space-y-4">
              {navLinks.map(({ section, label }) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="font-bold text-lg hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <button
                className="border rounded-lg border-white text-white font-bold text-sm py-2 px-4 hover:bg-white hover:text-black transition-colors duration-300"
                onClick={() => {
                  handleEmailClick();
                  setIsMenuOpen(false);
                }}
              >
                Email me
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
