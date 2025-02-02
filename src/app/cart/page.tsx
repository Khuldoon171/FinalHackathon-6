import Image from "next/image";
import ShopeHero from "../../../public/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import Sofa from "../../../public/sofaaa.png"
import Vector from "../../../public/Vector (4).png"
import Link from "next/link";

export default function Cart() {
  return (
    <>
      <div className="relative">
        <Image src={ShopeHero} alt="Picture of the author" />
        <div className="absolute top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <h3 className="font-bold text-[1.5rem]">Cart</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>cart</h3>
          </div>
        </div>
        {/* <div> */}
        {/* </div> */}
      </div>

      <div className="">
        <div className=" producDetails flex justify-around items-center p-4 w-[60%] h-[4rem] bg-[#F9F1E7] ">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div> 
        <div>

<br />            
<div className="flex justify-evenly gap-1">
            <Image src={Sofa} width={200} height={200} alt="Picture of the author" />
            <p>Asgaard sofa</p>
            <p>Rs. 250,000.00</p>
            <input type="number" />
            <p>Rs. 250,000.00</p>


        <div className="cartTotal  bg-[#F9F1E7] text-center w-[20rem] h-[15rem] pt-[4rem] ">
          <h2 className="font-bold text-[1.5rem]">Cart Totals</h2>
          <p><span className="font-bold">Subtotal </span>  Rs. 250,000.00</p>
          <p><span className="font-bold">Total</span> Rs. 250,000.00</p>

          <Link href="/checkout"><button className="mt-5 rounded-md border-gray-900 border-2 p-2 pr-3  pl-3 text-2xl bg-gray-300">Check Out</button></Link>
        </div>
            </div>
        </div>

      </div>

      <div className="mb-3 mt-10 flex justify-evenly items-center p-2 w-[100%] h-[8rem] bg-[#F9F1E7]">
        <div className=" ">
          <Image
            src="/Group.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />

          <h4 className="font-bold">High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div>
          <Image
            src="/warr.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div>
          <Image
            src={Vector}
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
        <div>
          <Image
            src="/customer.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}