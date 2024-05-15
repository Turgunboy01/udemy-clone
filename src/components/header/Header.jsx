import React from "react";
import logo from "../../../public/udemyLogo.png";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { PiGlobe } from "react-icons/pi";
const Header = () => {
  return (
    <div className="flex items-center gap-5 px-7 py-2 shadow-md ">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" className="w-[120px] h-[60px] object-cover" />
        <button className="hover:text-[#4506B4] text-[14px]">Категории</button>
      </div>
      <div className=" flex-[1] flex items-center gap-3 border border-[#111] rounded-full px-6 py-3">
        <FaSearch className=" text-[#b0aeae]" />
        <input
          type="text"
          placeholder="Ищите что угодно"
          className="w-full outline-none border-0"
        />
      </div>
      <div className=" flex items-center">
        <button className="py-4 px-2 mx-2 hover:text-[#4506B4] text-[14px]">
          Udemy Business
        </button>{" "}
        <button className="py-4 px-2 mx-2 hover:text-[#4506B4] text-[14px]">
          Преподавайте на Udemy
        </button>{" "}
        <button className="py-4 px-2 mx-2 hover:text-[#4506B4] ">
          <MdOutlineShoppingCart className="w-6 h-6" />
        </button>
        <button className="border py-2 px-4 mx-2 border-[#000] text-[#000] font-semibold hover:bg-[#eee]">
          {" "}
          Войти
        </button>
        <button className="border py-2 px-4 mx-2 bg-[#000] text-[#fff] font-semibold hover:bg-[#333]">
          Регистрация
        </button>
        <button className="border py-2 px-2 mx-2 border-[#000] text-[#000] hover:bg-[#eee]">
          <PiGlobe className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;
