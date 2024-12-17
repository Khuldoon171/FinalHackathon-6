"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ShoppingPage = () => {
  return (
    <div
      className="w-full h-auto"
      style={{
        position: "relative",
        backgroundImage: "url(/cart.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "5000px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "",
          zIndex: 1,
        }}
      ></div>
      <h1
        style={{
          position: "relative",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
        }}
      >
        <button className="w-[140px] h-[50px] font-extrabold text-xl border-[1px] border-neutral-950 rounded-full mt-[110rem] ml-[75rem]  text-black">
          <Link href={"/cart"}>Cart</Link>
        </button>
      </h1>
      
    </div>
  );
};

export default ShoppingPage;
