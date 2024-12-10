import React from "react";
import Furniro from "../../public/Furniro.png";
import Image from "next/image";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import background from "../../public/background.png";

const Header = () => {
  return (
    // main div
    <div className="w-full h-auto bg-white border-2">
    {/* Background Image Section */}
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="bg-[#FFF3E3] p-6 sm:p-8 md:w-[80%] lg:w-[50%] xl:w-[40%] rounded-lg shadow-lg text-center">
        <p className="text-xl font-bold">New Arrival</p>
        <p className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] font-bold text-[#B88E2F] mt-4">
          Discover Our New Collection
        </p>
        <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis.
        </p>
        <button className="w-full sm:w-auto px-6 py-3 sm:h-[74px] bg-[#B88E2F] text-white font-medium mt-8 rounded-md">
          BUY NOW
        </button>
      </div>
    </div>
  
    {/* Navigation Bar */}
    <div className="w-full h-auto flex items-center justify-between px-6 sm:px-12 md:px-20 py-4 fixed top-0 bg-white shadow-md z-10">
      {/* Logo */}
      <Image
        className="w-[100px] sm:w-[120px] h-auto"
        src={Furniro}
        alt="template"
        width={150}
        height={150}
      />
  
      {/* Navigation Links */}
      <ul className="hidden md:flex items-center space-x-6 font-extrabold text-sm md:text-base lg:text-lg">
        <li className="hover:text-[#B88E2F] cursor-pointer transition-all">Home</li>
        <li className="hover:text-[#B88E2F] cursor-pointer transition-all">Shop</li>
        <li className="hover:text-[#B88E2F] cursor-pointer transition-all">About</li>
        <li className="hover:text-[#B88E2F] cursor-pointer transition-all">Contact</li>
      </ul>
  
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <IoMenu className="w-6 h-6 text-gray-800" />
      </div>
  
      {/* Icons */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        <IoPersonOutline className="w-6 h-6 text-gray-800" />
        <IoSearchOutline className="w-6 h-6 text-gray-800" />
        <IoIosHeartEmpty className="w-6 h-6 text-gray-800" />
        <IoCartOutline className="w-6 h-6 text-gray-800" />
      </div>
    </div>
  </div>

  );
};

export default Header;
