import React from "react";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="w-full h-auto relative bg-contain">
      {/* Header */}
      <Header />

      {/* Cart Total Image */}
      <div className="w-full h-auto">
        <Image
          className="w-full object-cover"
          src="/my stuff/cart145.png"
          alt="Cart Image"
          width={1000}
          height={1000}
        />
      </div>

      {/* Check Out Button */}
      <div className="w-full flex justify-center mt-6">
        <Link
          href="/checkout"
          className="w-[300px] ml-[81.5rem] -mt-[21rem] sm:w-[340px] p-4 sm:p-6 text-center h-[70px] sm:h-[90px] font-semibold text-xl sm:text-2xl md:text-4xl border border-neutral-950 rounded-xl bg-white hover:bg-gray-200 transition duration-300"
        >
          Check Out
        </Link>
      </div>

      {/* Frame Image */}
      <div className="w-full mt-10">
        <Image
          className="w-full h-auto object-cover md:h-[270px]"
          src="/my stuff/Frame161.png"
          alt="Frame Image"
          width={500}
          height={500}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;
