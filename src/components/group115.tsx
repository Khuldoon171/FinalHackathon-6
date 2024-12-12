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
import ProductInner from '../../public/my stuff/ProductInner.png'
import Furniture1 from '../../public/my stuff/Furniture1.png'
import Footer from "./footer";

const Group115 = () => {
  return (
    <div className="md:w-full w-full px-4">
  {/* Header Section */}
  <h1 className="text-2xl md:text-4xl font-bold text-center mt-12">
    Browse The Range
  </h1>

  <p className="text-lg md:text-xl text-center mt-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>

  {/* Images Section */}
  <div className="mt-10 flex flex-wrap justify-center gap-6">
    <Image
      className="w-full sm:w-[300px] h-[400px] object-cover"
      src={Dining}
      alt="Dining-image"
      width={400}
      height={400}
    />
    <Image
      className="w-full sm:w-[300px] h-[400px] object-cover"
      src={Living}
      alt="Living-image"
      width={400}
      height={400}
    />
    <Image
      className="w-full sm:w-[300px] h-[400px] object-cover"
      src={Bedroom}
      alt="Bedroom-image"
      width={400}
      height={400}
    />
  </div>

  {/* Categories Section */}
  <ul className="flex flex-wrap justify-center text-lg font-semibold mt-6 gap-10">
    <li>Dining</li>
    <li>Living</li>
    <li>Bedroom</li>
  </ul>
</div>
  );
};

export const Product = () => {
  return (
    // Our Product Div
    <div className="md:w-full w-full border mt-8 px-4 py-6">
  <h1 className="font-bold text-2xl md:text-4xl text-center">
    Our Products
  </h1>

  <div className="flex flex-wrap justify-center gap-6 mt-8">
    {/* Featured Products */}
    <Image
      className="w-full sm:w-[285px] h-[300px] object-cover"
      src={Featured1}
      alt="Featured 1-image"
      width={1000}
      height={1000}
    />
    <Image
      className="w-full sm:w-[285px] h-[300px] object-cover"
      src={Featured2}
      alt="Featured 2-image"
      width={1000}
      height={1000}
    />
    <Image
      className="w-full sm:w-[285px] h-[300px] object-cover"
      src={Featured3}
      alt="Featured 3-image"
      width={1000}
      height={1000}
    />
    <Image
      className="w-full sm:w-[285px] h-[300px] object-cover"
      src={Featured4}
      alt="Featured 4-image"
      width={1000}
      height={1000}
    />
  </div>

  {/* Additional Products */}
  <div className="flex flex-wrap justify-center gap-6 mt-6">
    <Image
      className="w-full sm:w-[285px] h-[300px] object-cover"
      src={Products1}
      alt="Products1-image"
      width={1000}
      height={1000}
    />
    <Image
      className="w-full sm:w-[285px] h-[300px] object-cover"
      src={Products2}
      alt="Products2-image"
      width={1000}
      height={1000}
    />
    <Image
      className="w-full sm:w-[285px] h-[300px] object-cover"
      src={Products3}
      alt="Products3-image"
      width={1000}
      height={1000}
    />
    <Image
      className="w-full sm:w-[285px] h-[300px] object-cover"
      src={Products4}
      alt="Products4-image"
      width={1000}
      height={1000}
    />
  </div>

  {/* Button */}
  <button className="mt-6 mx-auto block w-[200px] h-[48px] border text-center text-[#B88E2F] border-[#B88E2F] rounded-lg hover:bg-[#B88E2F] hover:text-white">
    Show More
  </button>
</div>
  );
};

export const Inspir=()=>{
  return(
      // inspiration div
    <div className="w-full h-auto">
  <h1 className="w-full md:w-[422px] h-auto text-[30px] md:text-[39px] text-center md:text-left mx-auto md:ml-[430px] mt-[6rem] md:mt-[15rem] font-bold">
    50+ Beautiful Rooms Inspiration
  </h1>
  <p className="w-[90%] md:w-[368px] h-auto text-[14px] md:text-[16px] mx-auto md:ml-[430px] mt-4 md:-mt-1 text-center md:text-left">
    Our designer already made a lot of beautiful prototypes of rooms that inspire you
  </p>
  <div className="w-full flex justify-center md:block">
    <button className="w-[176px] h-[48px] bg-[#B88E2F] mt-6 md:mt-10 md:ml-[430px] text-[16px] font-semibold text-[#FFFFFF]">
      Explore More
    </button>
  </div>
  {/* Image div */}
  <div className="w-full mt-10 md:-mt-[20rem] flex justify-center md:justify-end">
    <Image
      className="w-[90%] md:w-[1196px] h-auto"
      src={ProductInner}
      alt="product-image"
      width={404}
      height={582}
    />
  </div>
</div>

  )
}

export const Furniture = ()=>{
  return(
    // Furnitur div
    <div className="w-full max-w-[1799px] h-auto mx-auto mt-32 px-4">
    <Image 
      className="w-full h-auto" 
      src={Furniture1} 
      alt="Furniture image" 
      width={1500} 
      height={1500} 
    />
    <Footer/>
  </div>
  
  )

}

export default Group115;
