import { useState, useEffect, useCallback, useMemo } from "react";
import { debounce } from "lodash";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 w-full z-50 px-20 transition duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="flex h-20 items-center justify-between">
        <a href="#home" className="text-white text-lg">
          <img src="/logo.svg" alt="Project logo" className="w-12 h-12" />
        </a>
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
      </div>
    </header>
  );
};

export default Header;
