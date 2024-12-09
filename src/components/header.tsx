import React from "react";
import Furniro from "../../public/Furniro.png";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import background from "../../public/background.png";

const Header = () => {
  return (
    // main div
    <div className="w-full h-[100] bg-[#FFFFFF] border-2 ">
      {/* back-ground image */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        {/* Discover Our New Collection */}
        <p className="w-[643px] ml-[739px] mt-[190px] h-[443px] bg-[#FFF3E3]">
          <br />
          <b className="ml-[40px]">New Arrival</b>{" "}
          <p className="text-[52px] ml-[40px] font-bold text-[#B88E2F]">
            Discover Our New Collection
          </p>
          <p className="ml-[40px] w-[546px] h-[52px] text-[18px] font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <br />
          <button className="w-[222px] h-[74px] ml-[40px] mt-[60px] bg-[#B88E2F]">
            BUY NOW
          </button>
        </p>
      </div>
      {/* Nav Item div */}
      <div className="w-[1286] h-[41px] ml-[54px] mt-[29px] flex justify-between fixed top-0">
        {/* image fur */}
        <Image
          className="w-[185] h-[41px]"
          src={Furniro}
          alt="template"
          width={150}
          height={150}
        />

        <ul className="text-black font-extrabold font-poppins flex gap-[75px] ml-[30rem]">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Templates */}
        <span className="flex gap-10 font-medium ml-[30rem]">
          <IoPersonOutline className="w-[28px] h-[28px]" />
          <IoSearchOutline className="w-[28px] h-[28px]" />
          <IoIosHeartEmpty className="w-[28px] h-[28px]" />
          <IoCartOutline className="w-[28px] h-[28px]" />
        </span>
      </div>
    </div>
  );
};

export default Header;
