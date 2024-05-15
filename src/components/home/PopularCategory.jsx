import React from "react";
import PopularCategoryCard from "./PopularCategoryCard";

const categoryData = [
  {
    name: "Дизайн",
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg",
  },
  {
    name: "Разработка",
    img:
      " https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg",
  },
  {
    name: "Маркетинг",
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-2x-v2.jpg",
  },
  {
    name: "ИТ и ПО",
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg",
  },
  {
    name: "Личностный рост",
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
  },
  {
    name: "Бизнес",
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
  },
  {
    name: "Фотография",
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
  },
  {
    name: "Музыка",
    img:
      "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
  },
];

const PopularCategory = () => {
  return (
    <div className="xl:container mx-auto px-4 mb-14">
      <h1 className="text-[24px] mb-6 font-bold">Популярные категории</h1>
      <div className="grid grid-cols-4 gap-5">
        {categoryData.map((item) => (
          <PopularCategoryCard img={item.img} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
