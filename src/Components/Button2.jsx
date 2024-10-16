import React from "react";
import { Link } from "react-router-dom";

const Button2 = ({ title, demoLink }) => {
  console.log(demoLink);
  return (
    
    <div>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-[#06B6D4] text-white px-6 py-3 rounded-xl font-medium flex items-center hover:bg-[#0894A5] transition-all duration-300">
          {title}
        </button>
      </a>
    </div>
  );
};

export default Button2;
