import React from "react";

const Footer = () => {
  return (
    // Main div
    <div className="w-full h-auto md:mt-10 md:-ml-[200px]">
  {/* Main Content */}
  <div className="max-w-[1240px] mx-auto px-4 py-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
    <p className="text-[24px] font-bold mb-6">
      Funiro.
      <br />
      <span className="block w-[285px] opacity-30 text-[16px]">
        400 University Drive Suite 200 Coral <br />
        Gables, FL 33134 USA
      </span>
    </p>

    {/* Flexbox for Links, Help, and Newsletter */}
    <div className="flex flex-wrap justify-between">
      {/* Links Section */}
      <ul className="mb-6">
        <li className="opacity-30 text-[16px] font-medium">Links</li>
        <li className="mt-2">Home</li>
        <li className="mt-2">Shop</li>
        <li className="mt-2">About</li>
        <li className="mt-2">Contact</li>
      </ul>

      {/* Help Section */}
      <ul className="mb-6">
        <li className="opacity-30 text-[16px] font-medium">Help</li>
        <li className="mt-2">Payment Options</li>
        <li className="mt-2">Returns</li>
        <li className="mt-2">Privacy Policies</li>
      </ul>

      {/* Newsletter Section */}
      <div>
        <p className="opacity-30 text-[16px] font-medium mb-2">Newsletter</p>
        <div className="flex items-center">
          <input
            className="border border-gray-300 p-2 text-[14px] flex-1"
            placeholder="Enter Your Email Address"
            type="text"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          />
          <button className="ml-2 text-[14px] underline font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>

    {/* Footer Text */}
    <p className="text-[16px] font-normal text-center mt-6">
      2023 Funiro. All rights reserved.
    </p>
  </div>
</div>

  );
};

export default Footer;
