import React, { useMemo } from "react";

// Define FooterLinkProps interface
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="relative text-white group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="relative z-10 text-sm md:text-base">{children}</span>
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
  </a>
);

export const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shariq-khan-3a64aa204/' },
  { name: 'Behance', href: 'https://www.behance.net/shariqkhan786' },
  { name: 'Dribbble', href: 'https://dribbble.com/Shariqkhan74' },
  { name: 'Medium', href: 'https://shariqkhan74.medium.com/' },
  { name: 'X', href: 'https://x.com/i/flow/login?redirect_after_login=%2FShariqkhan742' },
];

const Footer: React.FC = () => {
  const socialLinksMemo = useMemo(() => socialLinks, []);

  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60">
      <main className="flex-1">
        {/* Other content of your website goes here */}
      </main>
      <footer className="p-4 md:p-10 border rounded-lg m-2 md:m-6 text-white">
        <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-16">
          <div>
            <div className="text-sm md:text-3xl">
              let's
              <br /> turn your vision
              <br /> into reality.
            </div>
            <div className="mt-2 md:mt-6 text-[10px] md:text-xs">
              BASED IN INDIA - WORK WORLDWIDE
            </div>
          </div>
          <div>
            <div className="flex justify-end items-center">
              <div className="h-px bg-white md:w-1/2 w-[10%] mr-2"></div>
              <FooterLink href="mailto:Shariqkhab7@gmail.com?subject=Checking%20In&body=HI!">
                EMAIL ME
              </FooterLink>
            </div>
            <div className="flex mt-2 md:mt-6 gap-4 md:gap-20">
              <FooterLink href="https://www.fiverr.com/shariqkhan7">Fiverr</FooterLink>
              <FooterLink href="https://www.upwork.com/freelancers/~016f9c08687d2151ae">Upwork</FooterLink>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
          </a>

          {/* Social Links */}
          <div className="w-full flex flex-col items-center flex-1">
            <div className="w-full max-w-[80%] border-t mb-2" />
            <div className="flex space-x-[.5em] md:space-x-[6em]">
              {socialLinksMemo.map(({ name, href }) => (
                <FooterLink key={name} href={href}>
                  {name}
                </FooterLink>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
