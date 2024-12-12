import React from 'react'
import Group78 from '../../../public/my stuff/Group78.png'
import Image from 'next/image'
import Group63 from '../../../public/my stuff/Group63.png'
import Frame79 from '../../../public/my stuff/Frame79.png'
import Frame161 from '../../../public/my stuff/Frame161.png'
import Footer from '@/components/footer'
const Shop = () => {
  return (
    <div className="w-full h-auto">
    {/* Background Image */}
    <div className="w-full h-[316px]">
      <Image
        className="w-full h-[316px] object-cover"
        src={Group78}
        alt="group78-image"
        width={2000}
        height={2000}
      />
    </div>
  
    {/* Subsection background image) */}
    <div className="w-full h-[100px] bg-[#9F9F9F]">
      <Image
        className="w-full h-full object-cover"
        src={Group63}
        alt="group63-image"
        width={2000}
        height={2000}
      />
    </div>
  
    {/* Cart Div */}
    <div className="w-full h-auto">
      <Image
        className="w-full h-auto object-cover"
        src={Frame79}
        alt="Frame79-image"
        width={2000}
        height={2000}
      />
    </div>
  
    {/* Bottom image Section */}
    <div className="w-full h-[270px] mt-20">
      <Image
        className="w-full h-full object-cover"
        src={Frame161}
        alt="Frame-161"
        width={2000}
        height={2000}
      />
       <Footer/>
    </div>
  </div>
    
  )
}

export default Shop