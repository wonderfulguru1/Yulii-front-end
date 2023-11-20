import HeroSection from './HeroSection'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Faq from '../../../components/externalComponents/Faq';
import {merchantItems} from "../../../constants/index"
import HeroImg from "../../../assets/hero.png"

const Merchant = () => {
  const {heroSection, testimony, items} = merchantItems
  return (
    <div className='pt-28'>
      <HeroSection/>
      <div className='container flex mx-auto items-center flex-col text-center'>
        <div className=' w-2/3'>
        <h3 className='text-3xl py-2 font-semibold'>{heroSection.heading1}</h3>
        <p className='text-md'>{heroSection.subText1}</p>
        </div>
        <LazyLoadImage
          src={HeroImg}
          alt="logo"
          className='py-20'
          data-aos="zoom-out-right"
      />
      </div>
      <div className='container mx-auto items-center flex lg:flex-row lg:px-0 px-6 flex-col lg:space-x-14 text-center my-6'>
      {items.map((item) => (
        <div className='flex flex-col items-center'>
       <LazyLoadImage
          src={item.icon}
          width={50}
          height={20}
          alt="logo"
          className=''
          // data-aos="zoom-out-right"
      />
      <h3 className='py-4 font-semibold'>{item.title}</h3>
      <p className='text-sm'>{item.text}</p>
       </div>
      ))}
       
      </div>
      <div className='flex flex-col lg:flex-row px-6 lg:px-0 container mx-auto items-center my-24 bg-white  '>
        <div className=''>
          <h3 className='lg:text-3xl text-lg font-semibold'>{heroSection.heading2}</h3>
          <p className='py-10 text-md lg:text-xl'>{heroSection.subText2}</p>
        </div>
     <div className=''>
        <LazyLoadImage
           src={HeroImg}
          width={1800}
          height={800}
          alt="logo"
          className=''
          data-aos="zoom-out-right"
          
      />
      </div>
      </div>
      <div className='bg-secondary my-6'>
        <div className='lg:w-1/3 px-6 lg:px-0 text-lg text-center py-24 container mx-auto items-center flex flex-col'>
          <h4 className='text2xl font-semibold'>{testimony.title}</h4>
          <p className='py-10'>{testimony.text}</p>
          <LazyLoadImage
          src="/merchant3.png"
          width={80}
          height={10}
          alt="logo"
          className='rounded-full'
          data-aos="zoom-out-left"
      />
      <h5>{testimony.name}</h5>
      <small>{testimony.designation}</small>
        </div>
      </div>
      <div className='flex container mx-auto items-center lg:w-1/3 px-6 lg:px-0 flex-col'>
        <h3 className='lg:text-3xl font-semibold text-center p-10'>
        Frequently asked question about Yulli
        </h3>
          <Faq/>
      </div>
      
    </div>
  )
}

export default Merchant