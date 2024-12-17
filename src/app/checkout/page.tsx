import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'

const Checkout = () => {
  return (
    <div className="w-full ">
      <Header/>
  {/* Image Section */}
  <Image
    className="w-full h-auto md:h-[316px] object-cover"
    src="/my stuff/Checkout.png"
    alt="Checkout Image"
    width={1000}
    height={1000}
  />

  {/* Content Section */}
  <div className="w-full h-auto">
    <Image
      className="w-full md:h-[1829px] object-contain"
      src="/my stuff/Billing.png"
      alt="Billing Image"
      width={1000}
      height={1000}
    />
    <Image
      className="w-full h-auto md:h-[270px] -mt-10 md:-mt-20 object-cover"
      src="/my stuff/Frame161.png"
      alt="Frame Image"
      width={500}
      height={500}
    />
  </div>

  {/* Footer */}
  <Footer />
</div>

  )
}

export default Checkout
