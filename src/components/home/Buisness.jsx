import React from "react";
import logo from "../../../public/udemyLogo.png";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
const Buisness = () => {
  return (
    <div className="xl:container mx-auto px-4 py-9">
      <div className="flex justify-center items-center gap-[90px]">
        <div className="w-[380px]">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-[120px]" />

            <p className="text-[30px] font-semibold text-[#5624d0]">business</p>
          </div>
          <h1
            className=" font-bold text-[37px] leading-[60px]"
            style={{ fontFamily: "Roboto" }}
          >
            Развивайте свою команду вместе с Udemy Business
          </h1>
          <div className="flex gap-4 items-start">
            <GoDotFill size={40} className="mt-[-5px]" />
            <p className="text-[19px]">
              Неограниченный доступ к более чем 25 000 лучших курсов на Udemy
              для своей команды — когда угодно, где угодно
            </p>
          </div>
          <div className="flex gap-4 py-2 items-center">
            <GoDotFill size={13} />
            Подборка курсов на четырнадцати языках
          </div>
          <div className="flex  gap-4 items-start">
            <GoDotFill size={18} className="mt-1" />
            <p className="text-[19px]">
              Лучшие сертификации в сфере технологий и бизнеса
            </p>
          </div>
          <div className="flex gap-2 mt-5">
            <button className="border p-3 border-[#000] bg-[#000] font-bold  hover:bg-[#333] text-[#fff]">
              Получить Udemy Business
            </button>
            <button className="border border-[#000] p-3 font-bold hover:bg-[#eee]">
              Подробнее
            </button>
          </div>
        </div>
        <img
          className="w-[400px] h-[560px]"
          src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_1200x1200.jpg"
          alt="img"
        />
      </div>
      <div className="flex items-center justify-center gap-[100px] py-[60px]">
        <img
          src="https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg"
          alt="img1"
          className="w-[400px]"
        />
        <div className="w-[400px]">
          <h1
            className="text-[37px] font-bold leading-10"
            style={{ fontFamily: "Roboto" }}
          >
            Станьте преподавателем
          </h1>
          <p className="my-4">
            Преподаватели со всего мира обучают миллионы студентов на Udemy. Мы
            даем вам средства преподавать то, что вы любите.
          </p>
          <button className="border p-3 border-[#000] bg-[#000] font-bold  hover:bg-[#333] text-[#fff]">
            Начните преподавать сегодня
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buisness;
