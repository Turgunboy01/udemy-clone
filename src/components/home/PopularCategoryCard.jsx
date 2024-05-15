import React from "react";

const PopularCategoryCard = ({ img, name }) => {
  return (
    <div>
      <div className="w-[260px] overflow-hidden">
        <img
          src={img}
          className="w-[100%] hover:scale-105  transition-[.8s] duration-300 ease-in-out "
          alt=""
        />
      </div>
      <p className="font-bold mt-2">{name}</p>
    </div>
  );
};

export default PopularCategoryCard;
