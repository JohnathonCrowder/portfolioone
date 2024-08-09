import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CodeFusionX"
          des=" Streamlined coding With Ai Assistance. Supports multiple languages and formats with an intuitive interface. Effortlessly upload and combine programming files to submit to Ai Models. "
          src={projectOne}
          git_link={"https://github.com/JohnathonCrowder/CodeFusionX"}
          web_link={"https://codefusionx.onrender.com/"}
        />
        <ProjectsCard
          title="Cave Mapping Tool"
          des=" CaveMapper USA is a Flask-powered project showcasing an interactive map for exploring cave locations across the United States.  It combines geospatial technology with user engagement to promote cave exploration and conservation.

          Explore caves with CaveMapper USA today!"
          src={projectFour}
          git_link={"https://github.com/JohnathonCrowder/CaveMapWebpage"}
          web_link={"https://cavemaps.onrender.com/"}
        />
        <ProjectsCard
          title="GreenThumb Landscaping"
          des=" Created a sleek, responsive website for GreenThumb Landscaping with Flask. Features include an interactive project gallery, service overview, and contact form. This project highlights my web development skills and ability to deliver a professional, user-centric design."
          src={projectTwo}
          git_link={"https://github.com/JohnathonCrowder/GreenThumbLandscaping"}
          web_link={"https://landscape-website.onrender.com/"}
        />
        <ProjectsCard
          title="Heartland Dachshunds"
          des="Built a charming, user-friendly website for my grandma's dachshund breeding business. Showcases available puppies, breeder information, and contact details with a warm, welcoming design. This project highlights my ability to create a personalized, engaging online presence for small businesses."
          src={projectThree}
          git_link={"https://github.com/JohnathonCrowder/"}
          web_link={"https://heartlanddachshunds.onrender.com/"}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects