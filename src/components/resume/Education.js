import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Highschool Diploma"
            subTitle="MVTHS (2014 - 2018)"
            result="3.90/4"
            des="Laid the groundwork for programming and technical skills with coursework in engineering, robotics, and software development."
          />
          {/* Add more ResumeCard components as needed */}
        </div>
      </div>
      {/* part Two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Google IT Automation with Python"
            subTitle="Coursera"
            result="USA"
            des="Completed a comprehensive program from Google focusing on Python programming and IT automation. Gained practical skills in scripting for automation, version control with Git, troubleshooting IT systems, and using configuration management tools like Ansible. Equipped with hands-on experience in automating repetitive tasks and managing IT infrastructure efficiently."
          />
          {/* Add more ResumeCard components as needed */}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;