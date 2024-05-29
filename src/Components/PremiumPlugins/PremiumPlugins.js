import React from "react";
import PM1 from "../../assets/images/PM1.svg";
import PM2 from "../../assets/images/PM2.svg";
import PM3 from "../../assets/images/PM3.svg";
import PM4 from "../../assets/images/PM4.svg";
import PM5 from "../../assets/images/PM5.svg";
import PM6 from "../../assets/images/PM6.svg";

function PremiumPlugins() {
  return (
    <div className="main2 flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:py-20 pb-20">
        <div className="flex flex-wrap justify-center items-center gap-7 p-5 lg:w-1/2 plugins">
          <div className="bg-white text-center lg:w-52 lg:h-48 md:w-52 md:h-48 w-full h-52 flex flex-col items-center justify-center">
            <img src={PM1} alt="PM1" className="mx-auto" />
            <h2 className="pb-1 pt-5">Elementor</h2>
            <p className="bef">SUPPORTED PLUGIN</p>
          </div>
          <div className="bg-white text-center lg:w-52 lg:h-48 md:w-52 md:h-48 w-full h-52 flex flex-col items-center justify-center">
            <img src={PM2} alt="PM2" className="mx-auto" />
            <h2 className="pb-1 pt-5">Contact Form 7</h2>
            <p className="bef">SUPPORTED PLUGIN</p>
          </div>
          <div className="bg-white text-center lg:w-52 lg:h-48 md:w-52 md:h-48 w-full h-52 flex flex-col items-center justify-center">
            <img src={PM3} alt="PM3" className="mx-auto" />
            <h2 className="pb-1 pt-5">Revolution Slider</h2>
            <p className="bef">PREMIUM PLUGIN</p>
          </div>
          <div className="bg-white text-center lg:w-52 lg:h-48 md:w-52 md:h-48 w-full h-52 flex flex-col items-center justify-center">
            <img src={PM4} alt="PM4" className="mx-auto" />
            <h2 className="pb-1 pt-5">MailChimp</h2>
            <p className="bef">SUPPORTED PLUGIN</p>
          </div>
          <div className="bg-white text-center lg:w-52 lg:h-48 md:w-52 md:h-48 w-full h-52 flex flex-col items-center justify-center">
            <img src={PM5} alt="PM5" className="mx-auto" />
            <h2 className="pb-1 pt-5">Cookie Information</h2>
            <p className="bef">SUPPORTED PLUGIN</p>
          </div>
          <div className="bg-white text-center lg:w-52 lg:h-48 md:w-52 md:h-48 w-full h-52 flex flex-col items-center justify-center">
            <img src={PM6} alt="PM6" className="mx-auto" />
            <h2 className="pb-1 pt-5">Advanced Popups</h2>
            <p className="bef">SUPPORTED PLUGIN</p>
          </div>
        </div>

        <div className="md:ml-10 mt-2 md:mt-0 lg:w-1/2 px-6 flex flex-col items-center lg:items-start">
          <div className="content-wrap text-left">
            <p className="sup lg:pb-5 pb:2">PREMIUM PLUGINS</p>
            <h2 className="font-bold lg:text-5xl text-3xl lg:pb-5 pb:3 max-w-[500px]">
              $100-worth of Premium Plugins for Free!
            </h2>
            <p className="text-left bef pb-7 max-w-[550px]">
              With our theme, you get a bundle of premium plugins to help you create exactly what you want. Get the best experience with less effort.
            </p>
          </div>
          <h2 className="bg-lime-600 hover:bg-lime-700 text-white text-center px-10 py-5 text-sm">
            View New
          </h2>
        </div>
        
      </div>
    </div>
  );
}

export default PremiumPlugins;
