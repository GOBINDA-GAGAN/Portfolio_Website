import React from "react";
import Title from "../Components/Title";
import skills from "../assets/Skillsadata";
import SkillCard from "../Components/SkillsCard";

const Skills = () => {
  return (
    <div className="h-full bg-[#000000]">
      <Title
        title={"My Skills"}
        subtitle={
          "Skills are abilities developed through practice, education, and experience."
        }
      ></Title>
      <div className=" md:w-9/12 w-full mx-auto  rounded-lg w">
        <div className=" w-full ">
          <div className=" grid md:grid-cols-2 xl:grid-cols-3  place-items-center flex-1 gap-5">
            {skills.map((item, index) => {
              return (
                <SkillCard
                  key={index}
                  item={item}
                  category={item.items}
                ></SkillCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
