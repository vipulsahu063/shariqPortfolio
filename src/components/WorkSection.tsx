import { useMemo } from "react";

const WorkSection = () => {
  // Memoize the projects array to avoid unnecessary recalculations
  const memoizedProjects = useMemo(() => [
    { src: "/small.webp", alt: "Project One", title: "001", link: "/project-one" },
    { src: "/big.webp", alt: "Project Two", title: "002", span: "row-span-2 col-span-2", link: "https://www.behance.net/gallery/206535061/Social-Media-Campaign-Real-Estate" },
    { src: "/small (2).webp", alt: "Project Three", title: "003", link: "https://www.behance.net/gallery/181177149/Landing-Page-UI-designwebsite-design-Figma" },
    { src: "/big (2).webp", alt: "Project Four", title: "004", span: "row-span-2 col-span-2", link: "https://www.behance.net/gallery/206028153/Educational-institutions-Social-Media-campaign" },
    { src: "/small (3).webp", alt: "Project Five", title: "005", link: "https://www.behance.net/gallery/205883975/Bella-Vita-Branding-UxUi-Design" },
    { src: "/small (4).webp", alt: "Project Six", title: "006", link: "https://www.behance.net/gallery/195154419/Gucci-Guilty-Marketing-Campaign" },
  ], []);

  return (
    <section id="work" className="px-60">
      <h2 className="text-3xl font-bold mb-6">My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {memoizedProjects.map(({ src, alt, title, span, link }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative overflow-hidden shadow-md transition-transform duration-300 ${span || ""} flex items-end group`}
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 group-hover:blur-0 blur-sm"
            />
            <div className="p-4 absolute bottom-0 left-0 right-0 transition-opacity duration-300 group-hover:opacity-0 z-10">
              <h3 className="text-2xl tracking-[.75rem] mb-2 font-extrabold">{title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
