import HeroSection from "../../../components/externalComponents/HeroSection"
import GenericSection from '../../../components/externalComponents/GenericSection'
import React from 'react'
import '../../../index.css'
import Faq from "@/components/externalComponents/Faq"


const HomePage: React.FC = () => {
  return (
    <>
    <div className="pt-28">
      <HeroSection sectionName={"homepage"} />
      </div>
      <div className='bg-[#f3fffe]'>
        <GenericSection
          sectionName="section1"
          order2='order-last'
          order='order-first'
          bgColor="bg-button1"
          labelColor="bg-[#a4eee9]"
        />
        
       
      </div>
      <div >
        <GenericSection
         sectionName="section2"
          order2='order-first'
          order='order-last'
          bgColor="bg-section2Button"
          labelColor="bg-section2Label"
        />
      </div>
      <div className='bg-secondary footer lg:pt-0 pt-8'>
        <GenericSection
          sectionName="section3"
          order2='order-last'
          order='order-first'
          bgColor="bg-section1Button"
          labelColor="bg-section1Lable"
        />
      </div>
      <div>
        <GenericSection
         sectionName="section4"
          order2='order-first'
          order='order-last'
          bgColor="bg-section2Button"
          labelColor="bg-section2Label"
        />
      </div>

      <div className='flex flex-col container mx-auto px-4 md:px-0 md:w-1/3 items-center'>
        
      <Faq />
      </div> 
      {/* <Card /> */}

    </>
  )
}

export default HomePage
