import React from "react";

const Title = ({title,subtitle}) => {
  return (
    <div>
      <div className="md:w-9/12 w-full mx-auto p-3">
        <h1 className="text-4xl font-bold  text-[#06B6D4]">{title}</h1>
        <p className="pt-2 pb-2 px-1 text-gray-300">
          {subtitle}
        </p>
        <div className="border rounded-lg m-3"></div>
      </div>
    </div>
  );
};

export default Title;
