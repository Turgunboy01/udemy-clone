import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

const CourseSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const SliderData = [
    {
      img: " https://img-b.udemycdn.com/course/480x270/4450454_36df_6.jpg",
      rating: 4.9,
      title: "JavaScript - Полный Курс по JavaScript (Включает 80 Задач)",
      price: 74.99,
      sale_price: 9.99,
      desc: "Bogdan Stashchuk | Software Engineer, MBA, PhD",
      peoples: "2478",
    },
    {
      img: "https://img-b.udemycdn.com/course/240x135/4782518_1d83_3.jpg ",
      rating: 4.8,
      title: "React - Полный Курс по React, Redux и Redux Toolkit",
      price: 74.99,
      sale_price: 9.99,
      desc: "Bogdan Stashchuk | Software Engineer, MBA, PhD",
      peoples: 1558,
    },
    {
      img: "https://img-b.udemycdn.com/course/480x270/2619572_7be0_3.jpg",
      rating: 4.8,
      title: "SQL для начинающих: с нуля до сертификата Oracle",
      price: 69.99,
      sale_price: 9.99,
      desc: "Zour Tregulov",
      peoples: 4811,
    },
    {
      img: "https://img-b.udemycdn.com/course/240x135/1998388_de6b_3.jpg ",
      rating: 4.9,
      title: "Java (Джава) для начинающих: с нуля до сертификата Oracle",
      price: 9.99,
      sale_price: 64.99,
      desc: "Zour Tregulov",
      peoples: 4435,
    },
    {
      img: "https://img-b.udemycdn.com/course/480x270/5929080_eaee_2.jpg",
      rating: 5.0,
      title: "SQL практикум на базе MySQL",
      price: 54.99,
      sale_price: 9.99,
      desc: "Kirrill Jhonson",
      peoples: 1,
    },
    {
      img: "https://img-b.udemycdn.com/course/240x135/2280568_ac2f.jpg",
      rating: 4.5,
      title: "Полное руководство по Python 3: от новичка до специалиста",
      price: 74.99,
      sale_price: 9.99,
      desc: "Илья Фофанов, DevSchool • Progressive Training Solutions",
      peoples: 9131,
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
    {
      img: "",
      rating: "",
      title: "",
      price: "",
      sale_price: "",
      desc: "",
      peoples: "",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {SliderData.map((item, index) => (
          <Card
            img={item.img}
            title={item.title}
            price={item.price}
            desc={item.desc}
            sale_price={item.sale_price}
            peoples={item.peoples}
            rating={item.rating}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
