import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";

const ProductComparison = () => {
  return (
    <div className="w-full h-auto mt-12">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <Image
        className="w-full h-auto md:h-[316px] object-cover"
        src="/my stuff/Group7.png"
        alt="Group Image"
        width={1000}
        height={1000}
      />

      {/* Main Content */}
      <div className="w-full flex flex-col items-center px-4 sm:px-8 lg:px-16 mt-6">
        {/* Comparison Image */}
        <Image
          className="w-full max-w-[1332px] h-auto"
          src="/my stuff/Group165.png"
          alt="Comparison Image"
          width={1000}
          height={1000}
        />

        {/* Additional Frame Image */}
        <Image
          className="w-full max-w-[1330px] h-auto object-cover md:h-[270px] mt-8"
          src="/my stuff/Frame161.png"
          alt="Frame Image"
          width={1000}
          height={1000}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductComparison;
