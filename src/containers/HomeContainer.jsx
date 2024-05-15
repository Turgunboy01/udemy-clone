import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/home/Hero";
import Company from "../components/home/Company";
import Category from "../components/home/Category";
import PopularCategory from "../components/home/PopularCategory";
import Buisness from "../components/home/Buisness";

const HomeContainer = () => {
  return (
    <div className=" ">
      <Hero />
      <Company />
      <PopularCategory />
      <Category />
      <Buisness />
    </div>
  );
};

export default HomeContainer;
