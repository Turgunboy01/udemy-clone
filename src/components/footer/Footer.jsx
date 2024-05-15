import React from "react";
import { PiGlobe } from "react-icons/pi";
import logo from "../../../public/logo_white.png";

const Footer = () => {
  return (
    <div className=" bg-[#2d2f31] pt-6 px-12">
      <div className="flex justify-between  footer">
        <div className="flex gap-7">
          <div className="w-[256px] ">
            <ul>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Udemy Business
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Преподавайте на Udemy
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Скачать приложение
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  О нас
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Наши координаты
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[256px]">
            <ul>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Карьера
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className=" text-[#fff] w-[150px]">
                  Блог
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Справка и поддержка
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Партнер
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Инвесторы
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[256px]">
            <ul>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Условия использования
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Политика конфиденциальности
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Настройки файлов cookie
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Карта сайта
                </a>
              </li>
              <li className=" py-1  text-[14px]">
                <a href="#" className="  text-[#fff] w-[150px]">
                  Заявление о доступности
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between h-[50px]">
          <button className=" text-[#fff] flex items-center gap-2 border px-4 pr-8 py-2">
            <PiGlobe size={20} /> Русский
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center pt-[64px] pb-8">
        <a href="#">
          <img src={logo} alt="logo" className="w-[91px]" />
        </a>
        <p className="text-[#fff]">&copy; 2024 Udemy, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
