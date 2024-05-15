import React from "react";

const Category = () => {
  return (
    <div className=" bg-[#f5f7f8] py-[64px] ">
      <div className="xl:container mx-auto px-4">
        <h1 className="text-[24px] font-bold mb-[35px]">
          Популярные темы по категории
        </h1>
        <div className="grid grid-cols-4 gap-8">
          <div className="">
            <h2 className="text-[19px] text-[#2d2f31]  font-bold">
              Development
            </h2>
            <div className=" mt-6">
              <a
                href="#"
                className="text-[#5624d0] underline text-[17px] font-bold"
              >
                Phyton
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                36,354,994 learners
              </p>
            </div>
            <div className="mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                Web Devolopment
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                11,415,615 learners
              </p>
            </div>{" "}
            <div className="mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                Machine Learning
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                7,070,015 learners
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[19px] text-[#2d2f31]  font-bold">Business</h2>
            <div className=" mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                Financial Analysis
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                36,354,994 learners
              </p>
            </div>
            <div className=" mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                SQL
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                5,977,561 learners
              </p>
            </div>{" "}
            <div className=" mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                {" "}
                PMP
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                1,733,398 learners
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[19px] text-[#2d2f31]  font-bold">
              IT and Software
            </h2>
            <div className=" mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                Amazon AWS
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                6,123,456 learners
              </p>
            </div>
            <div className=" mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                Ethical Hacing{" "}
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                10,931,066 learners
              </p>
            </div>{" "}
            <div className=" mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                Cyber Security
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                3,998,037 learners
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-[19px] text-[#2d2f31]  font-bold">Design</h2>
            <div className=" mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                Photoshop
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                10,909,736 learners
              </p>
            </div>
            <div className=" mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                Graphic Design
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                3,381,052 learners
              </p>
            </div>{" "}
            <div className=" mt-6">
              <a
                className="text-[#5624d0] underline text-[17px] font-bold"
                href="#"
              >
                Drawing{" "}
              </a>
              <p className="text-[14px] mt-2 text-[#6a6f73]">
                2,410,849 learners
              </p>
            </div>
          </div>
        </div>
        <button className="border hover:bg-[#eee] border-[#000] px-4 py-2 mt-[24px] font-bold">
          Просмотреть другие темы
        </button>
      </div>
    </div>
  );
};

export default Category;
