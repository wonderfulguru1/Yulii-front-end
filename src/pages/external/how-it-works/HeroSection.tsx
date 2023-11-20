import {dealSection} from "../../../constants/index"
import Shape from '../../../components/externalComponents/Shapes'
const HeroSection = () => {
  return (

        <section className='bg-[#78b8ed] pt-20'>
          <div className='container mx-auto items-center px-2 md:w-1/2 py-14 md:py-36  '>
          <div className='px-4 md:px-0 hidden lg:block'>
        <Shape/>
        </div>
        <div className='text-center items-center flex flex-col' data-aos="fade-up-right">
       
        
            <h2 className='text-4xl font-semibold text-white'>{dealSection.title}</h2>
            <p className='py-10 md:text-2xl text-lg text-white'>{dealSection.text}</p>
        </div>
       
        </div>
    </section>
 
  )
}

export default HeroSection