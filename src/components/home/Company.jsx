import React from "react";

const Company = () => {
  return (
    <div className=" bg-[#f7f9fa]">
      <div className="xl:container mx-auto pt-[60px] pb-[100px]  px-10 pl-[70px] mb-[50px]">
        {/* sa */}
        <h1 className="mb-[2.5rem] text-center text-[#6a6f73] text-[20px]">
          Нам доверяют более 15 000 компаний и миллионы учащихся по всему миру
        </h1>
        <div className="grid justify-items-center lg:grid-cols-8 grid-cols-4 ">
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
            alt=""
          />
          <img
            src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
