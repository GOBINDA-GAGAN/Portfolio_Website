import React from "react";
import Navbar from "../Components/Navbar";
import logo5 from "/logo5.png";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import Button from "../Components/Button";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  const socialMediaLinks = [
    {
      name: "GitHub",
      link: "https://github.com/your-username",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/your-profile",
      icon: <FaLinkedin />,
    },
    {
      name: "YouTube",
      link: "https://youtube.com/c/your-channel",
      icon: <FaYoutube />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/your-username",
      icon: <FaTwitter />,
    },
  ];

  return (
    <>
      <div className="h-full bg-[#000000] text-white  overflow-x-hidden ">
        <div className=" md:w-9/12 mx-auto w-full ">
          <div className=" flex justify-between flex-col md:flex-row items-center">
            <div className="w-[100%] text-center">
              <h1 className=" text-2xl md:text-5xl font-bold pt-4">
                Trust me, I'm an{" "}
                <span className="text-[#06B6D4] font-bold w">
                  Engineering Student .{" "}
                </span>
              </h1>
              <p
                className=" p-3 text-gray-400 md
            "
              >
                I’m Gobinda Gagan Dey, a passionate 3rd-year Computer Science
                student who truly loves coding and software development! 🌟
                Every challenge excites me as I enhance my skills in algorithms
                and explore emerging technologies. On my YouTube channel, I
                joyfully share my journey, filled with tech discoveries, coding
                tutorials, and innovative gadgets. Join me in this thrilling
                adventure through the world of technology!✨
              </p>
              <div className=" m-3 grid place-items-center">
                <Button></Button>
              </div>
            </div>
            <div className="w-[40%] space-y-3 flex flex-col items-center">
              <img
                src={logo5}
                alt="gobinda gagan"
                srcset=""
                loading="lazy"
                className=" rounded-lg  md:h-[100%] w-[100%]"
              />
              <div className=" flex p-4 justify-center items-center gap-9 rounded-xl">
                {socialMediaLinks.map((link, index) => {
                  return (
                    <span className="text-2xl text-gray-400 hover:text-[#06B6D4]">
                      {link.icon}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <Skills></Skills>
        </div>
        <div className=" ">
          <Project></Project>
        </div>
        <div>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
};

export default Home;
