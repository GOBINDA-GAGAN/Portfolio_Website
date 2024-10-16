import React from "react";
import { FaDownload, FaFileAlt } from "react-icons/fa";

const Button = () => {
  return (
    <button className="bg-[#06B6D4] text-white px-6 py-3 rounded-xl font-medium flex items-center hover:bg-[#0894A5] transition-all duration-300">
      <FaFileAlt className="mr-2" />
      Resume
      <FaDownload className="ml-2" />
    </button>
  );
};

export default Button;
