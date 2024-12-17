import React from 'react'
import Contact1 from '../../../public/my stuff/Contact1.png'
import Image from 'next/image'
import FormC from '../../../public/my stuff/FormC.png'
import Footer from '@/components/footer'
import Frame161 from "../../../public/my stuff/Frame161.png";
import Header from '@/components/header'
const Contact = () => {
  return (
    <div className='w-ful h-auto'>
      <Header/>
      {/* Contact image */}
      <div className="w-full h-[316px] sm:h-[400px] md:h-[500px]">
        <Image className="w-full h-full object-cover"
          src={Contact1}
          alt="Group7B-image"
          width={2000}
          height={2000}
        />
      </div>
      {/* Center image */}
      <p className='w-full h-auto my-10'>
        <Image src={FormC} alt="alt" width={2000} height={2000} />
      </p>
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
  )
}

export default Contact
