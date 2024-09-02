import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiFlask } from "react-icons/si";
import { DiJsBadge } from "react-icons/di";



const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Website Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm        <span className="text-designColor capitalize">         Johnathon Crowder</span>
        </h1>
        <div className="h-[100px] sm:h-auto overflow-hidden sm:overflow-visible">
  <h2 className="text-4xl font-bold text-white">
    a <span>{text}</span>
    <Cursor
      cursorBlinking="false"
      cursorStyle="|"
      cursorColor="#ff014f"
    />
  </h2>
</div>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Welcome to my portfolio! I am a dedicated programmer with a passion for Python and web development, specializing in creating efficient, user-friendly websites and automation solutions. With a keen eye for detail and a commitment to delivering high-quality code, I strive to bring creativity and functionality together in every project. Explore my work to see how I can help bring your ideas to life through innovative programming solutions.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiFlask />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <DiJsBadge  />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner