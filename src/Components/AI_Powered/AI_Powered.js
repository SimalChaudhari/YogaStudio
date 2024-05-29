import React from "react";
import LG1 from "../../assets/images/logo1.svg";
import LG2 from "../../assets/images/logo2.svg";
import LG3 from "../../assets/images/logo3.svg";
import Lomg1 from "../../assets/images/AI_1.jpg";
import Lomg2 from "../../assets/images/AI_2.jpg";
import Lomg3 from "../../assets/images/AI_3.jpg";

function AI_Powered() {
  return (
    <div className="main3 lg:py-8 py-4">
      <div className="container mx-auto lg:py-20 pb-10">
        <div className="flex items-center justify-center gap-2 lg:gap-4 lg:py-6 py-4 overflow-x-auto">
          <img src={LG1} alt="LG1" className="w-24 lg:w-auto" />
          <img src={LG2} alt="LG2" className="w-24 lg:w-auto" />
          <img src={LG3} alt="LG3" className="w-24 lg:w-auto" />
        </div>

        <div className="py-6 text-center flex items-center justify-center ">
          <h2 className="lg:text-5xl text-xl  max-w-[950px]">
            Make AI-Powered Texts & Images with Multilingual OpenAI Prompts
          </h2>
        </div>

        <div className="relative flex flex-wrap items-center justify-center lg:pt-6 pt-4 px-6">
          <img src={Lomg1} alt="Lomg1" className="w-full md:w-10/12" />
          <img
            src={Lomg2}
            alt="Lomg2"
            className="absolute lg:bottom-12 md:bottom-7 bottom-4 lg:left-0 md:left-12 left-4 lg:w-4/12 md:w-56 w-28"
          />
          <img
            src={Lomg3}
            alt="Lomg3"
            className="absolute lg:right-0 right-4 lg:bottom-96 md:bottom-40 bottom-24 transform translate-y-1/2 lg:w-52 md:w-24 w-10"
          />
        </div>

        <div className="lg:px-36 px-6">
          <h2 className="bg-green-600 text-white text-center p-2 lg:text-xl text-sm">
            Takes Seconds to Make Proofread Content
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AI_Powered;
