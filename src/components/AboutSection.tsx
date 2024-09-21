import { useMemo } from "react";

const AboutSection = () => {
  const skills = useMemo(() => [
    "UI/UX",
    "MOBILE & WEB DESIGN",
    "GRAPHIC DESIGN",
    "BRANDING",
    "AUTHOR",
  ], []);

  return (
    <div id="about" className="flex flex-col min-h-screen p-4 md:pt-20 sm:px-8 md:px-20 lg:px-40 xl:px-60">
      <div className="flex-1 flex justify-around flex-col">
        {/* About Me Section */}
        <div className="flex flex-col md:flex-row items-start">
          <h2 className="text-sm font-bold mb-4 md:mb-0 md:w-1/3">
            About Me
          </h2>
          <p className="text-lg text-white md:w-2/3">
            Hi! I'm Shariq Khan, a passionate graphic designer with 4 years
            of experience in UI/UX design, motion graphics, and video
            editing. I specialize in transforming ideas into stunning
            visuals, whether for startups, small businesses, or larger
            companies. Let's collaborate and bring your vision to life.
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col md:flex-row items-start">
          <h2 className="text-sm font-bold mb-2 md:mb-0 md:w-1/3">Skills</h2>
          <div className="flex flex-wrap gap-2 md:gap-4 text-white text-sm md:w-2/3">
            {skills.map((skill, index) => (
              <span key={index} className="text-2xl m-0 p-0">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
