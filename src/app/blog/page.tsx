import React from "react";
import Group7B from "../../../public/my stuff/Group7B.png";
import Group185 from "../../../public/my stuff/Group185.png";
import Image from "next/image";
import Frame161 from "../../../public/my stuff/Frame161.png";
import Footer from "@/components/footer";

const Blog = () => {
  return (
    <div className="w-full h-auto">
      {/* Blog Image */}
      <div className="w-full h-[316px] sm:h-[400px] md:h-[500px]">
        <Image
          className="w-full h-full object-cover"
          src={Group7B}
          alt="Group7B-image"
          width={2000}
          height={2000}
        />
      </div>

      {/* Main Image Section */}
      <div className="w-full h-auto my-10">
        <Image
          className="w-full h-auto object-contain"
          src={Group185}
          alt="Group-image"
          width={2000}
          height={2000}
        />
      </div>

      {/* Bottom Image Section */}
      <div className="w-full h-[270px] sm:h-[300px] md:h-[400px] mt-20">
        <Image
          className="w-full h-full object-cover"
          src={Frame161}
          alt="Frame-161"
          width={2000}
          height={2000}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
