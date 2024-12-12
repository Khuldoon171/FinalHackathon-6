"use client"; 

import React from "react";
import Furniro from "../../public/Furniro.png";
import Image from "next/image";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Replace useRouter

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {/* Header Section */}
      <header
        className={`w-full h-auto bg-white border-2 font-sans ${
          isHomePage ? "bg-cover bg-center" : ""
        }`}
        style={{
          backgroundImage: isHomePage ? "url('/background.png')" : "none",
        }}
      >
        {/* Navigation Bar */}
        <div className="w-full h-auto flex items-center justify-between px-6 sm:px-12 md:px-20 py-4 fixed top-0 bg-white shadow-md z-10">
          {/* Logo */}
          <Image
            src={Furniro}
            alt="template"
            width={120}
            height={80}
          />

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-6 font-extrabold text-sm md:text-base lg:text-lg">
            <Link href={"/"}>
              <li className="hover:text-[#B88E2F] cursor-pointer transition-all">
                Home
              </li>
            </Link>
            <Link href={"/shop"}>
              <li className="hover:text-[#B88E2F] cursor-pointer transition-all">
                Shop
              </li>
            </Link>
            <Link href={"/blog"}>
              <li className="hover:text-[#B88E2F] cursor-pointer transition-all">
                Blog
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:text-[#B88E2F] cursor-pointer transition-all">
                Contact
              </li>
            </Link>
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
      </header>

      {/* Background Content Only for Home Page */}
      {isHomePage && (
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          <div className="bg-[#FFF3E3] p-6 sm:p-8 md:w-[643px] md:h-[443px] lg:w-[50%] xl:w-[40%] rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">New Arrival</p>
            <p className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] font-bold text-[#B88E2F] mt-4">
              Discover Our New Collection
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis.
            </p>
            <button className="md:w-[222px] sm:w-auto px-6 py-3 sm:h-[74px] bg-[#B88E2F] text-white font-medium mt-8 rounded-md">
              BUY NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
