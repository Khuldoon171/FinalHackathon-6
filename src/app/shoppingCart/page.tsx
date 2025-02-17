"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = () => {
  return (
    <div className="container md:mx-auto px-4 lg:px-20">
      {/* Breadcrumbs */}
      <nav className="text-gray-600 mb-6">
        <span className="text-gray-400">Home / Shop / </span>
        <span className="font-semibold">Asgaard Sofa</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div>
          <Image
            src="/Group 102.png"
            alt="Asgaard Sofa"
            width={500}
            height={500}
            className="rounded-md"
          />
          <div className="flex gap-2 mt-4">
            <Image
              src="/sofaaa.png"
              alt="Thumbnail"
              width={80}
              height={80}
              className="cursor-pointer border border-gray-200 rounded-md"
            />
            <Image
              src="/Group 107.png"
              alt="Thumbnail"
              width={80}
              height={80}
              className="cursor-pointer border border-gray-200 rounded-md"
            />
            <Image
              src="/Group 107.png"
              alt="Thumbnail"
              width={80}
              height={80}
              className="cursor-pointer border border-gray-200 rounded-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">Asgaard Sofa</h1>
          <p className="text-yellow-600 font-semibold text-xl mt-2">
            Rs. 250,000.00
          </p>

          {/* Color Selection */}
          <div className="mt-4">
            <h3 className="text-gray-700 font-semibold">Color:</h3>
            <div className="flex gap-2 mt-2">
              <button className="w-8 h-8 rounded-full border-2 border-gray-300 bg-red-500"></button>
              <button className="w-8 h-8 rounded-full border-2 border-gray-300 bg-blue-500"></button>
              <button className="w-8 h-8 rounded-full border-2 border-gray-300 bg-green-500"></button>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4">
            <h3 className="text-gray-700 font-semibold">Quantity:</h3>
            <div className="flex gap-3 mt-2">
              <button className="px-4 py-2 border rounded">-</button>
              <span className="text-xl">1</span>
              <button className="px-4 py-2 border rounded">+</button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <Link href="/cart">
              <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg">
                Add to Cart
              </button>
            </Link>
            <button className="border border-gray-400 px-6 py-3 rounded-lg">
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* Description Tabs */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="mt-4 text-gray-700">
          Experience ultimate comfort with the Asgaard Sofa. Designed with
          premium materials and modern aesthetics, this sofa blends seamlessly
          with any interior style.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
