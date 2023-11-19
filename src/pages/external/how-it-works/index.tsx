import HeroSection from './HeroSection'
import Card from './Card'
import Faq from '@/components/externalComponents/Faq'
import { moreWays } from '@/constants'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HowItWorks = () => {
  return (
    <div>
      <HeroSection />
      {/* <Section/> */}
      <div>
        <svg width="108" height="81" viewBox="0 0 108 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M105.821 72.3122C103.499 67.7783 96.2501 57.121 91.6783 39.9556C90.9963 37.3414 90.103 36.5187 89.099 37.5479C87.3808 39.3812 87.8156 42.861 91.1417 52.3358C94.2688 61.3662 92.8294 57.2506 85.0423 49.9988C45.3581 12.9674 33.6318 21.6747 26.8463 20.014L23.9674 17.4277C9.16798 4.21859 -32.3987 -4.95268 -39.1635 3.49431C-41.4297 6.33947 -40.2078 6.88774 -30.3985 7.20473C-11.7366 7.883 5.59027 12.5047 16.9143 19.8043C19.6842 21.6018 19.7069 21.4349 15.9646 23.2182C0.204581 30.6038 3.92008 61.153 21.0499 64.6802C36.0566 67.7728 44.6914 47.3064 35.318 30.8943C32.9662 26.8134 32.8209 27.0889 37.3571 27.7331C61.8115 31.1802 81.7273 55.8728 90.5519 63.9969C93.597 66.7909 93.5524 66.8009 86.3908 64.4092C73.4566 60.0565 71.8223 59.8407 70.9089 62.1905C69.5031 65.6213 71.4118 67.1586 80.7076 70.0639C91.8757 73.5798 96.7252 75.4966 101.577 78.428C109.033 82.9492 108.332 77.2116 105.821 72.3122ZM34.6246 51.4315C30.1856 59.4571 19.0844 59.7442 13.2506 52.0297C5.61097 41.8626 9.58954 31.4998 22.311 28.6696C27.2471 27.5623 29.1155 31.4634 29.5316 31.8202C34.8567 38.5075 37.0899 47.0407 34.6246 51.4315Z" fill="#EFB39D" />
        </svg>
      </div>
      <div className='container mx-auto'>
        <Card />
      </div>
      <section className='container mx-auto px-4 lg:px-0 flex flex-col py-4'>
        <div className='flex justify-between md:py-6 lg:w-1/4'>
          <h3 className='text-xl font-semibold'>More ways to earn points and cash back with your Plenti account. </h3>
       
        </div>
        <div className='container mx-auto my-6 '>
          <div className='flex flex-col md:flex-row  md:px-0 gap-4'>
            {moreWays.items.map((item) => (
              <div className={`flex p-4 border rounded-md flex-col ${item.backgroundColor}`}>
                <LazyLoadImage
                  src={item.icon}
                  width={50}
                  height={50}
                  alt="logo"
                  className=''
                />
                <h3 className='py-4 font-semibold'>{item.caption}</h3>
                <p className='text-base'>{item.text}</p>

              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='flex container mx-auto items-center px-6 lg:px-0 lg:w-1/3 flex-col py-12'>
        <h3 className='lg:text-3xl text-xl font-semibold text-center p-10'>
        Frequently asked question about Plenti Africa
        </h3>
          <Faq/>
      </div>
    </div>
  )
}

export default HowItWorks