import React from "react";
import Lomg1 from "../../assets/images/AIH1.png";
// import Lomg2 from "../../assets/images/AIH2.jpg";
// import Lomg3 from "../../assets/images/AIH3.png";

function AI_Helper() {
  return (
    <div className="main3 lg:py-8 py-4">
      <div className="container mx-auto lg:pb-32 pb-10">
        <div className="px-4 lg:px-80 md:px-40 py-6 text-center">
          <h2 className="lg:text-5xl text-xl">
            Create Premium Images with AI Engine or our AI Helper
          </h2>
        </div>

        <div className="relative flex items-center justify-center lg:pt-6 pt-4 px-6 AIH">
        {/* <div className="AIH"> */}
          <img src={Lomg1} alt="Lomg1" className="w-full md:w-10/12" />
        {/* </div> */}
          {/* <img
            src={Lomg2}
            alt="Lomg2"
            className="absolute lg:bottom-12 md:bottom-7 bottom-4 lg:left-40 md:left-12 left-4 lg:w-3/12 md:w-56 w-24 border-8 border-white"
          />
          <img
            src={Lomg3}
            alt="Lomg3"
            className="absolute lg:-top-36 md:-top-16 bottom-44 lg:right-60 md:right-32 right-10 transform translate-y-1/2 lg:w-48 md:w-24 w-14"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default AI_Helper;
