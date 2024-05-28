import React from "react";
import BT1 from "../../assets/images/XDIcon1.png";
import BT2 from "../../assets/images/benefitsIcon2.png";
import BT3 from "../../assets/images/benefitsIcon3.png";
import BT4 from "../../assets/images/benefitsIcon4.png";
import BT5 from "../../assets/images/benefitsIcon5.png";
import BT6 from "../../assets/images/benefitsIcon6.png";

function CustomerBenefits() {
  return (
    <div className="main3 px-7 lg:py-16 py-7">
      <div className="text-center mb-10">
        <p className="sup">EASY & INTUITIVE</p>
        <h2 className="lg:text-5xl text-3xl font-bold">Customer Benefits</h2>
      </div>
      {/* Dive images */}
      <div className="flex flex-col md:flex-row justify-evenly lg:pt-10 pt-7 container mx-auto gap-7 ">
        <div className="flex flex-col items-center gap-7 w-full">
          <div className="p-8  bg-white rounded-lg w-full flex flex-col items-center justify-center lg:py-14 relative">
            <div className="XDLogo">
              <img
                src={BT1}
                alt="BT1"
                className="w-20 hover-shift lg:py-4  py-5"
              />
            </div>

            <h3 className="text-xl font-semibold mb-1">XD Files Included</h3>
            <p className="bef">Get source files for free</p>
          </div>
          <div className="p-8 bg-white rounded-lg w-full flex flex-col items-center justify-center lg:py-14">
            <img
              src={BT4}
              alt="BT4"
              className="w-52 hover-shift lg:py-4 py-5"
            />
            <h3 className="text-xl font-semibold mb-1">Premium Plugins</h3>
            <p className="bef">Bundled with the theme</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-7 w-full">
          <div className="p-8 bg-white rounded-lg w-full flex flex-col items-center justify-center lg:py-14">
            <img
              src={BT2}
              alt="BT2"
              className="w-44 hover-shift lg:py-7 py-5"
            />
            <h3 className="text-xl font-semibold mb-1">
              Buy Once, Use Forever
            </h3>
            <p className="bef">Free lifetime updates</p>
          </div>
          <div className="p-8 bg-white rounded-lg w-full flex flex-col items-center justify-center lg:py-14">
            <img
              src={BT5}
              alt="BT5"
              className="w-24 hover-shift lg:py-4 py-5"
            />
            <h3 className="text-xl font-semibold mb-1">All Demo Data</h3>
            <p className="bef">Simple guided installation</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-7 w-full">
          <div className="p-8 bg-white rounded-lg w-full flex flex-col items-center justify-center lg:py-14 relative">
            <div className="MSGLogo">
              <img
                src={BT3}
                alt="BT3"
                className="w-28 hover-shift lg:py-4 py-5"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">
              6 Months of Premium Support
            </h3>
            <p className="bef">Get professional tech support</p>
          </div>
          <div className="p-8 bg-white rounded-lg w-full flex flex-col items-center justify-center lg:py-14 relative">
            <div className="NOTLogo">
              <img
                src={BT6}
                alt="BT6"
                className="w-28 hover-shift lg:py-5 py-5"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">
              FAQ & Video Tutorials
            </h3>
            <p className="bef">All information in one place</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerBenefits;
