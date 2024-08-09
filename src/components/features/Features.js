import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaRobot } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiNumpy } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Automation Scripting"
          des="Specializing in Python automation scripting, I create custom solutions to streamline business tasks like data management, file processing, and system monitoring. My focus is on enhancing workflow efficiency and boosting overall productivity through automation."
          icon={<FaRobot />}
        />
        <Card
          title="Data Analysis"
          des="Specializing in Python-based data analysis, I excel in data cleaning, manipulation, and visualization using Pandas, NumPy, and Matplotlib. My services include crafting clear insights and interactive dashboards to drive informed decision-making and business growth."
          icon={<SiNumpy />}
        />
        <Card
          title="Desktop Applications "
          des="I create sleek and functional custom solutions using Python. From data analysis tools to project management systems, my applications prioritize user-friendly interfaces and robust performance. I focus on delivering software that empowers businesses to enhance productivity."
          icon={<SiProgress />}
        />
        <Card
          title="Api Development"
          des="Excelling in Python API development, I develop robust solutions that streamline data integration and foster efficient communication across applications. Emphasizing RESTful principles and rigorous security measures, I craft APIs that deliver reliability, scalability, and performance, perfectly aligned with your business objectives."
          icon={<FaMobile />}
        />
        <Card
          title="Web Development"
          des="Experienced in Python web development, I specialize in crafting dynamic and responsive web sites and applications with robust backend architecture and intuitive user interfaces."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="I specialize in reliable web hosting solutions that ensure your site performs securely and scales smoothly. From server setup to robust security, I optimize your online presence for seamless accessibility and user satisfaction."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features