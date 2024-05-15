import React from "react";

const Hero = () => {
  return (
    <div className="xl:container mx-auto pt-[60px] pb-[100px]  px-10 pl-[70px] mb-[50px] bg-no-repeat  bg-right bg-cover bg-[url('https://img-b.udemycdn.com/notices/web_carousel_slide/image_responsive/f1925b8b-6db6-4df0-a5b1-77e7bfb53bae.jpg')]">
      {/* <img src="" alt="" className="w-full h-[300px] object-contain" /> */}
      <div className="p-6 w-[430px] bg-white">
        <h1
          className="text-[40px] font-semibold"
          style={{ fontFamily: "EB Garamond" }}
        >
          Живите свою лучшую жизнь
        </h1>
        <p className="text-[19px] pb-2">
          Стройте карьеру и не забывайте о своих увлечениях с курсами от 9,99 $
          до 23 мая.
        </p>
      </div>
    </div>
  );
};

export default Hero;
