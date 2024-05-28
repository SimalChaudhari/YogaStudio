import React, { useState } from "react";
import Layout from "../../Components/Layout";
import { CreativeDemos, CustomerBenefits, HeroSection } from "../../Components/index";
import hero1 from "../../assets/images/1.jpg";
import hero2 from "../../assets/images/6.jpg";
// import hero3 from "../../assets/images/2.jpg";
import hero4 from "../../assets/images/3.jpg";
import hero5 from "../../assets/images/4.jpg";
import { ArrowDown } from "@phosphor-icons/react";
// import hero6 from "../../assets/images/5.jpg";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Layout>
      <div
        // className="main min-h-screen px-7 lg:pt-7"
        className="main lg:min-h-screen px-7 pb-7 lg:pt-7"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <HeroSection />
        <div className="relative mt-10">
        <div className="Home1">

          {/* <div className="absolute top-[500px] left-0 hidden md:block">
            <img src={hero3} alt="3" className="w-1/2 object-cover" />
          </div> */}

          <div className="lg:px-14 mx-auto">
            {/* <div className="absolute top-0 left-0"> */}
            <div className="flex justify-between">
              <div className="">
                <img
                  src={hero1}
                  alt="1"
                  className={
                    isHovered
                      ? "shaking-image w-24 md:w-44 lg:w-52 object-cover"
                      : "w-24 md:w-44 lg:w-52 object-cover"
                  }
                  // className="w-24 md:w-44 lg:w-52 object-cover"
                />
              </div>
              {/* <div className="absolute top-0 right-0"> */}
              <div className="">
                <img
                  src={hero2}
                  alt="2"
                  className={
                    isHovered
                      ? "shaking-image w-24 md:w-44 lg:w-52 object-cover"
                      : "w-24 md:w-44 lg:w-52 object-cover"
                  }
                  // className="w-24 md:w-44 lg:w-52 object-cover"
                />
              </div>
            </div>

            <div className="lg:px-14 mx-auto p-4 text-center pt-12 lg:pt-0">
              <h1
                className="text-4xl md:text-5xl lg:text-9xl font-bold mb-4 animate__animated animate__fadeInUp custom-title"
                data-animation="animate__fadeInUp"
                data-delay="300">
                Gym & Healthcare
              </h1>

              <p
                className="lg:text-lg mb-4 animate__animated animate__fadeInUp"
                data-animation="animate__fadeInUp"
                data-delay="500">
                Powerful WordPress Theme
              </p>
            </div>
            <div className="flex lg:justify-evenly justify-around my-10">
              {/* <div className="absolute top-[500px] left-[550px]"> */}
              <div className="">
                <img
                  src={hero4}
                  alt="4"
                  // className="w-24 md:w-44 lg:w-52 object-cover"
                  className={
                    isHovered
                      ? "shaking-image w-24 md:w-44 lg:w-52 object-cover"
                      : "w-24 md:w-44 lg:w-52 object-cover"
                  }
                />
              </div>
              {/* <div className="absolute top-[500px] left-[1050px]"> */}
              <div className="">
                <img
                  src={hero5}
                  alt="5"
                  // className="w-24 md:w-44 lg:w-52 object-cover"
                  className={
                    isHovered
                      ? "shaking-image w-24 md:w-44 lg:w-52 object-cover"
                      : "w-24 md:w-44 lg:w-52 object-cover"
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ArrowDown size={50} />
          </div>

          {/* <div className="absolute top-[500px] right-0 hidden md:block">
            <img src={hero6} alt="6" className="w-1/2 object-cover" />
          </div> */}
        </div>
        </div>
      </div>
      <div>
        <CreativeDemos className=""/>
        <CustomerBenefits className=""/>
      </div>
    </Layout>
  );
};

export default HomePage;
