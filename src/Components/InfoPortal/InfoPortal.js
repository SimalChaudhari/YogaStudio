import React from "react";
import INFO1 from "../../assets/images/Info1.png";
import INFO2 from "../../assets/images/Info2.jpg";
import INFO3 from "../../assets/images/Info3.jpg";
import INFO4 from "../../assets/images/Info4.jpg";

const InfoPortal = () => {
  return (
    <div className="main2">
      <div className="container mx-auto flex flex-col justify-center items-center lg:py-40 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="px-10 py-10 md:py-0 text-left">
            <div className="content-wrap">
              <p className="py-2 uppercase text-sm font-bold tracking-wider">
                INFO PORTAL
              </p>
              <h2 className="font-bold lg:text-6xl text-[1.8rem] py-3">
                FAQ & Video Tutorials
              </h2>
              <p className="text-left bef lg:w-[650px] pb-7">
                All useful information about the theme and its functionality is
                conveniently gathered in one place for you. Lots of articles and
                video tutorials will tell you how to easily customize this
                product.
              </p>
              <h2 className="bg-orange-700 hover:bg-orange-600 text-white text-center px-6 py-5 text-sm w-[8rem]">
                View New
              </h2>
            </div>
          </div>

          <div className="item lg:mt-10 md:mt-0 relative">
            <div className="absolute lg:top-32 top-14 lg:-right-24 -right-3 transform -translate-x-1/2 -translate-y-1/2 lg:w-40 w-20">
              <img src={INFO4} alt="INFO4" className="" />
            </div>
            <div className="absolute lg:-right-36 -right-10 lg:-bottom-10 -bottom-10 transform -translate-x-1/2 lg:w-60 w-32">
              <img src={INFO3} alt="INFO3" className="" />
            </div>
            <div className="absolute lg:top-24 top-3 lg:left-28 left-[6.1rem] transform -translate-x-1/2 translate-y-1/2 lg:w-80 w-40">
              <img src={INFO2} alt="INFO2" className="" />
            </div>
            <img
              src={INFO1}
              alt="INFO1"
              className="lg:w-[42.75rem] w-auto lg:p-0 md:p-0 px-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPortal;
