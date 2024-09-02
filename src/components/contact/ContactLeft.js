import React from 'react'
import { FaLaptopCode, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Johnathon Crowder</h3>
        <p className="text-lg font-normal text-gray-400">
          Full-Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 (618) 316-2840</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">JohnathonCrowder@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
  <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
  <div className="flex gap-4">
    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="bannerIcon">
      <FaLaptopCode />
    </a>
    <a href="https://github.com/JohnathonCrowder" target="_blank" rel="noopener noreferrer" className="bannerIcon">
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/johnathon-crowder-465645281/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
      <FaLinkedinIn />
    </a>
  </div>
</div>
    </div>
  );
}

export default ContactLeft