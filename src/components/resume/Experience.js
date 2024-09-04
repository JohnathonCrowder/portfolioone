import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="DataAnnotation  - (2023 - Present)"
            result="USA"
            des="Training Ai Models for a variety of tasks. Developing coding solutions for a variety of problems. This work is confidential, so i can't go into too much detail."
          />
          <ResumeCard
            title="Freelance Software Developer"
            subTitle="Self-Employed - (2018 - Present)"
            result="USA"
            des="Working on a large variety of projects over the years. I have alot of experience coding in general and feel comfortable working in many different areas and languages. I find my own clients and help solve whatever problems they need help with. "
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Other Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Programming Instructor"
            subTitle="4-H Youth Development (2016 - 2018)"
            result="USA"
            des="This was some volunteer work I did for 4-H. I was responsible for teaching children how to build and program Lego EV3 Sumo Robots for competition."
          />
          <ResumeCard
            title="First Robotics Programmer"
            subTitle="First Robotics (2014 - 2018)"
            result="USA"
            des="My highschool robotics team. This is where I developed a passion for coding. I worked with a team of programmers to write Python code to control robots for First Competition. I also played a part in setting up all the electronics for multiple robots. "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;