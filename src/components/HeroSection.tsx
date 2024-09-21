import { socialLinks } from "./FooterSection";
import { useMemo } from "react";

const HeroSection = () => {
  // Memoize socialLinks to avoid recalculating them on each render
  const memoizedSocialLinks = useMemo(() => socialLinks, []);

  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img
          src="/shariq.jpg" // Replace with your image path
          alt="Hero Image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-end md:text-left mt-10 md:mt-0 px-4 md:px-16">
        {/* Intro Section */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-40 md:text-[.75rem] md:text-base opacity-25">
          <span >Freelancer</span>
          <span  className="ml-2 md:ml-40">Based in India</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl text-center md:text-start md:text-6xl text-white mb-8 md:mb-40 uppercase">
          <span className="block mb-2 md:mb-5 font-CinzelDecorative">Shariq Khan</span>
          <span className="block font-semibold">Digital Designer</span>
        </h1>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-10 mb-10">
          {memoizedSocialLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="relative text-white group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10">{name}</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
