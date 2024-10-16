import React from 'react'

const SkillsCard = ({item, category}) => {
  return (
    <div className="p-3 flex flex-wrap">
    <div className="  bg-[#1F1F1F] rounded-lg  w-[300px] max-h-[400px] h-full md:h-[300px] border border-gray-500 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
      <p className="font-semibold text-2xl text-center py-2 text-[#f0f1f0]">
        {item.category}
      </p>

      <div className=" flex justify-center gap-3 flex-wrap mt-2 p-2">
        {category.map((item) => {
          return (
            <div
              className="px-4  py-1 border-[0.3px] rounded flex items-center
             gap-1"
            >
              <img
                src={item.logo}
                alt=""
                srcset=""
                className=" w-7 h-7  object-contain "
                loading="lazy"
              />
              <p className="  text-[#606F86] font-semibold text-[10px]">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default SkillsCard;
