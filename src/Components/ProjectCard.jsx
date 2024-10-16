import React from "react";
import Button2 from "./Button2";

const ProjectCard = ({ project }) => {
  return (
    <div className=" p-2 rounded-b-md w-[300px]  h-full bg-[#1F1F1F] border-blue-100 border rounded-lg hover:scale-105 transition-all ">
      <div>
        <img
          src={project.image}
          alt=""
          srcset=""
          className=" rounded-md opacity-90 hover:opacity-100"
        />
      </div>

      <div className=" p-3">
        <p className=" font-semibold">{project.name}</p>
        <div className=" flex flex-wrap">
          {project.technology.map((item, key) => {
            return (
              <div className=" flex items-center gap-1 m-2">
                <span className="h-2 w-2 bg-blue-200 rounded-md"></span>
                <p className=" text-[15px] font-medium text-gray-500">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" flex justify-around items-center">
        
      
          <Button2 title={"Demo"} demoLink={project.LiveLink}></Button2>{" "}
       

        <Button2 title={"Code"}></Button2>
      </div>
    </div>
  );
};

export default ProjectCard;
