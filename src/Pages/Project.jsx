import React, { useState } from "react";
import Title from "../Components/Title";
import ProjectCard from "../Components/ProjectCard";
import projectData from "../assets/Projectdata"; 
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Project = () => {
  // State to toggle between showing recent (top 3) or all projects
  const [allProjects, setAllProjects] = useState(false);

  // Get the top 3 projects or all projects based on state
  const displayedProjects = allProjects ? projectData : projectData.slice(0, 3);

  return (
    <div className="h-full bg-[#000000] overflow-hidden ">
      <Title
        title={"My Projects"}
        subtitle={
          "Project is a temporary effort designed to achieve a unique goal or result."
        }
      />
      <div className="w-8/12 mx-auto text-white">
        <div className="px-4 py-2  flex  justify-between items-center rounded-xl">
          <div className="flex gap-3 items-center">
            <p
              className={`font-semibold bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded-xl transition-transform cursor-pointer`}
              onClick={() => setAllProjects(false)}
            >
              Recent
            </p>
            <p
              className={`font-semibold bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded-xl cursor-pointer`}
              onClick={() => setAllProjects(true)} 
            >
              All Projects
            </p>
          </div>
          <Link to="https://github.com/GOBINDA-GAGAN" target="_blank">
          <div className=" flex items-center gap-3 px-1 py-2 bg-blue-500 rounded-md text-white  font-semibold">
        <span>All source Code Here</span>   
            <span>
            <FaArrowRight /></span>
          </div>
          </Link>
        </div>

        <div className="p-2 rounded-3xl  flex gap-10 flex-wrap justify-center m-7  h-full">
          {displayedProjects.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
