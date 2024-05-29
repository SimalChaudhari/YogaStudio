import React from "react";
import EL1 from "../../assets/images/EL1.jpg";
import EL2 from "../../assets/images/EL2.jpg";
import EL3 from "../../assets/images/EL3.jpg";
import EL4 from "../../assets/images/EL4.jpg";

const Elementor = () => {
  return (
    <div className="main2">
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center lg:py-40 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="px-10 py-10 md:py-0 text-left">
            <div className="content-wrap">
              <p className="py-2 uppercase text-sm font-bold tracking-wider">Create Unlimited Variations</p>
              <h2 className="font-bold lg:text-5xl text-[1.8rem] py-3">
                Elementor Page Builder
              </h2>
              <p className="text-left bef lg:w-[650px] pb-7">
                Enjoy the intuitive interface and flexibility of one of the most
                user-friendly page builders for WordPress. Enhanced with a set
                of additional elements, it enables you to customize layouts with
                ease.
              </p>
              <div className="bkl flex flex-col md:flex-row justify-start lg:gap-20">
                <ul className="text-left">
                  <li><h2 className="py-2 text-base">Drag and Drop Editor</h2></li>
                  <li><h2 className="py-2 text-base">No Coding Required</h2></li>
                  <li><h2 className="py-2 text-base">70+ Custom Elements</h2></li>
                </ul>
                <ul className="text-left">
                  <li><h2 className="py-2 text-base">Visual Builder</h2></li>
                  <li><h2 className="py-2 text-base">Responsive Editing</h2></li>
                  <li><h2 className="py-2 text-base">Undo / Redo</h2></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="item lg:mt-10 md:mt-0 relative">
            <div className="absolute lg:top-32 top-14 lg:left-0 left-14 transform -translate-x-1/2 -translate-y-1/2 lg:w-16 w-7">
              <img src={EL4} alt="2" className=""/>
            </div>
            <div className="absolute lg:-left-[5.3rem] left-14 lg:top-48 top-28 transform -translate-x-1/2 lg:w-[18.1rem] w-[4.2rem]">
              <img src={EL3} alt="3" className=""/>
            </div>
            <div className="absolute lg:bottom-14 bottom-10 lg:left-5 left-[6.5rem] transform -translate-x-1/2 translate-y-1/2 lg:w-auto w-40">
              <img src={EL2} alt="4" className=""/>
            </div>
            <img src={EL1} alt="1" className="lg:w-[32.75rem] w-auto lg:p-0 md:p-0 px-14"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elementor;
