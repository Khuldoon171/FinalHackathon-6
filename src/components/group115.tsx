import Image from "next/image";
import React from "react";
import Dining from "../../public/Dining.png";
import Living from "../../public/living.png";
import Bedroom from "../../public/Bedroom.png";
import Featured1 from "../../public/my stuff/Featured 1.png";
import Featured2 from "../../public/my stuff/Featured 2.png";
import Featured3 from "../../public/my stuff/Featured 3.png";
import Featured4 from "../../public/my stuff/Featured 4.png";
import Products1 from "../../public/my stuff/Products1.png";
import Products2 from "../../public/my stuff/Products2.png";
import Products3 from "../../public/my stuff/Products3.png";
import Products4 from "../../public/my stuff/Products4.png";

const Group115 = () => {
  return (
    <div className="w-fit h-[685px] ml-[131px]">
      <h1 className="text-[32px] font-bold ml-[460px] mt-[50px] w-[350px] h-[48px]">
        Browse The Range
      </h1>

      <p className="w-[559px] h-[29px] text-[20px] font-normal ml-[340px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      {/* Image */}
      <p className="w-[1160px] h-[480px] flex mt-20 gap-8">
        <Image
          className="w-[381px] h-[480px]"
          src={Dining}
          alt="Dining-image"
          width={400}
          height={400}
        />
        <Image
          className="w-[381px] h-[480px]"
          src={Living}
          alt="Living-image"
          width={400}
          height={400}
        />
        <Image
          className="w-[381px] h-[480px]"
          src={Bedroom}
          alt="Bedroom-image"
          width={400}
          height={400}
        />
      </p>
      <p className=" ">
        <ul className="text-[24px] font-semibold w-[1440px] ml-20 mt-5 flex gap-[400px]">
          <li>Dining</li>
          <li>Living</li>
          <li className="-ml-[70px]">Bedroom</li>
        </ul>
      </p>
    </div>
  );
};

export const Product = () => {
  return (
    // Our Product Div
    <div className="w-fit h-[1084px] border-[1px] mt-8">
      <h1 className="font-bold text-[40px] flex justify-center">
        Our Products
      </h1>
      <div className="w-[1236px] h-[446px] flex ml-[102px] gap-[32px]">
        <Image
          className="w-[285px] h-[446px]"
          src={Featured1}
          alt="Featured 1-image"
          width={1000}
          height={1000}
        />
        <Image
          className="w-[285px] h-[446px]"
          src={Featured2}
          alt="Featured 2-image"
          width={1000}
          height={1000}
        />
        <Image
          className="w-[285px] h-[446px]"
          src={Featured3}
          alt="Featured 3-image"
          width={1000}
          height={1000}
        />
        <Image
          className="w-[285px] h-[446px]"
          src={Featured4}
          alt="Featured 4-image"
          width={1000}
          height={1000}
        />
      </div>
      {/* Product image */}
      <div className="w-[1236px] h-[446px] flex ml-[102px] gap-[32px] mt-5">
        <Image
          className="w-[285px] h-[446px]"
          src={Products1}
          alt="Products1-image"
          width={1000}
          height={1000}
        />
        <Image
          className="w-[285px] h-[446px]"
          src={Products2}
          alt="Products2-image"
          width={1000}
          height={1000}
        />
        <Image
          className="w-[285px] h-[446px]"
          src={Products3}
          alt="Products3-image"
          width={1000}
          height={1000}
        />
        <Image
          className="w-[285px] h-[446px]"
          src={Products4}
          alt="Products4-image"
          width={1000}
          height={1000}
        />
      </div>
      <button className="w-[245px] h-[48px] border-[1px] ml-[598px] text-[#B88E2F] mt-10">
        Show More
      </button>
    </div>
  );
};

export default Group115;
