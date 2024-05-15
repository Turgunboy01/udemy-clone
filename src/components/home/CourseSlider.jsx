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
    slidesToScroll: 4,
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
      img: " https://img-b.udemycdn.com/course/480x270/4268236_f119_5.jpg",
      rating: 4.8,
      title: "Веб дизайн в Figma 2024 - с нуля до результата, основы UX/UI",
      price: "44.99",
      sale_price: "9.99",
      desc: "Dmitrii Fokeev",
      peoples: 2495,
    },
    {
      img: " https://img-b.udemycdn.com/course/480x270/5928220_a191_4.jpg",
      rating: 5.0,
      title: "Терминал Linux. Основы работы в командной строке.",
      price: 74.99,
      sale_price: 9.99,
      desc: "Kiril Jhonson",
      peoples: 3,
    },
    {
      img: "https://img-b.udemycdn.com/course/240x135/5228176_e100_5.jpg",
      rating: 4.8,
      title: "Node.js - Полный Курс по Node.js",
      price: 74.99,
      sale_price: 9.99,
      desc: "Bogdan Stashchuk | Software Engineer, MBA, PhD",
      peoples: 510,
    },
    {
      img: "https://img-b.udemycdn.com/course/240x135/4523534_18f8_4.jpg ",
      rating: 4.9,
      title: "Docker - Полный курс Docker",
      price: 74.99,
      sale_price: 9.99,
      desc: "Bogdan Stashchuk | Software Engineer, MBA, PhD",
      peoples: 1078,
    },
    {
      img: "https://img-b.udemycdn.com/course/240x135/3051582_4472.jpg",
      rating: 4.7,
      title: "Машинное обучение в Python: Machine Learning & Data Science",
      price: 74.99,
      sale_price: 9.99,
      desc: "Jose Portilla, Vlad Burmistrov, Pierian Training",
      peoples: 549,
    },
    {
      img: "https://img-b.udemycdn.com/course/240x135/4320084_d093_6.jpg",
      rating: 4.9,
      title: "Тестировщик с нуля 2024. Web/Mobile, Postman, SQL, Git, Bash",
      price: 120.99,
      sale_price: 99.99,
      desc: "Artsiom Rusau",
      peoples: 1561,
    },
    {
      img: "https://img-b.udemycdn.com/course/240x135/1982920_95b4_15.jpg ",
      rating: 4.8,
      title: "Unreal Engine — полное руководство по разработке на С++",
      price: 74.99,
      sale_price: 9.99,
      desc: "Yurri Popov",
      peoples: 1346,
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
