import React from "react";
import { IoStarSharp } from "react-icons/io5";

const Card = ({ rating, img, title, price, sale_price, desc, peoples }) => {
  return (
    <div className="w-[260px]">
      <img src={img} alt="" className="w-full" />
      <h3 className=" font-bold ">{title}</h3>
      <p className="text-[13px]">{desc.slice(0, 40)}....</p>
      <div className="flex items-center gap-2">
        <p className=" font-bold">{rating}</p>
        <p className="flex">
          <IoStarSharp className="text-[#aa702d]" />
          <IoStarSharp className="text-[#aa702d]" />
          <IoStarSharp className="text-[#aa702d]" />
          <IoStarSharp className="text-[#aa702d]" />
          <IoStarSharp className="text-[#aa702d]" />
        </p>
        <p className="text-[14px] text-[#8e8c8c]">({peoples})</p>
      </div>
      <div className="flex gap-2">
        <p className=" font-bold">{sale_price}$</p>
        <span className=" text-[#8e8c8c] font-medium line-through">
          {price}$
        </span>
      </div>
    </div>
  );
};

export default Card;
