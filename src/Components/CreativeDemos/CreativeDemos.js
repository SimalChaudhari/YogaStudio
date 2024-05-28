import React from "react";
import CT1 from "../../assets/images/CT1.jpg";
import CT2 from "../../assets/images/CT2.jpg";
import CT3 from "../../assets/images/CT3.jpg";
import CT4 from "../../assets/images/CT4.jpg";
import CT5 from "../../assets/images/CT5.jpg";

function CreativeDemos() {
  return (
    <div className="main2 px-7 lg:py-16 py-7">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <p className="sup">CREATIVE DEMOS</p>
          <h2 className="lg:text-5xl text-3xl">Creative Demos</h2>
        </div>
      </div>
      {/* Dive images */}
      <div className="flex flex-col md:flex-row justify-evenly lg:pt-10 pt-7">
        <div className="flex flex-col items-center lg:p-12">
          <img src={CT1} alt="CT1" className="w-full md:w-auto hover-shift" />
          <h2 className="py-5 text-xl">Yoga Studio</h2>
          <img src={CT2} alt="CT2" className="w-full md:w-auto hover-shift" />
          <h2 className="py-5 text-xl">Stretching & Fitness</h2>
        </div>

        <div className="flex flex-col items-center lg:p-12">
          <img src={CT3} alt="CT3" className="w-full md:w-auto hover-shift" />
          <h2 className="py-5 text-xl">Studio & Shop</h2>
          <img src={CT4} alt="CT4" className="w-full md:w-auto hover-shift" />
          <h2 className="py-5 text-xl">Yoga Tours</h2>
        </div>

        <div className="flex flex-col items-center lg:p-12">
          <img src={CT5} alt="CT5" className="w-full md:w-auto hover-shift" />
          <h2 className="py-5 text-xl">Equipment Shop</h2>
        </div>
      </div>

      <div className="flex items-center justify-center pb-10">
        <div className="text-center">
          <button className="Purchase_btn py-3 px-7 text-white hover:bg-orange-800">Purchase Theme</button>
        </div>
      </div>
    </div>
  );
}

export default CreativeDemos;
