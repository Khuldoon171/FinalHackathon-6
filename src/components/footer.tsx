import React from "react";

const Footer = () => {
  return (
    // Main div
    <div className="w-full h-[505px]">
      {/* content div */}
      <div className="w-[1240px] h-[419px] mt-[48 px] ml-[100px]">
        <p className="text-[24px] font-bold mt-[48px]">
          Funiro.
          <br />
          <br />
          <p className="w-[285px] h-[72px] opacity-30 font-normal text-[16px]">
            400 University Drive Suite 200 Coral <br /> Gables,
            <br />
            FL 33134 USA
          </p>
          {/* Links Content */}
          <ul className="text-[16px] font-medium ml-[525px] -mt-[130px]">
            <li className="opacity-30">Links</li>
            <li className="mt-[40px]">Home</li>
            <li className="mt-[40px]">Shop</li>
            <li className="mt-[40px]">About</li>
            <li className="mt-[40px]">Contact</li>
          </ul>
          {/* Help content */}
          <ul className="text-[16px] font-medium ml-[735px] -mt-[275px]">
            <li className="opacity-30">Help</li>
            <li className="mt-[40px]">Payment Options</li>
            <li className="mt-[40px]">Returns</li>
            <li className="mt-[40px]">Privacy Policies</li>
          </ul>
          {/* News Letter */}
          <ul className="text-[16px] font-medium ml-[947px] -mt-[215px]">
            <li className="opacity-30">Newsletter</li>
            </ul>
            <br />
            <button className=" ml-[947px] text-[14px] font-normal underline ">
            <input className="underline space-x-4 mr-3"  placeholder="Enter Your Email Address" type="text"/> SUBSCRIBE</button>
        </p>
        <p className="mt-[330px] text-[16px] font-normal">2023 furino. All rights reverved</p>

      </div>
    </div>
  );
};

export default Footer;
