import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button';
import Shape from './Shapes';
import Shape2 from './Shape2';
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Toggle from './Toggle';
import HeroImg from "../../assets/hero1.png"
import { Translations } from '@/interface';
import { useTranslation } from 'react-i18next';

interface HeroProps {
    sectionName: keyof Translations['homepage'];
}


// function splitAndColorSentence(sentence:string): string {
//     const words = sentence.split("")
//     if(words.length >= 8) {
//         words[0] = `<span style=color:#67c7c0 ;">${words[0]}</span>`;
//         words[0] = `<span style=color:#67c7c0 ;">${words[0]}</span>`;
//         words[0] = `<span style=color:#67c7c0 ;">${words[0]}</span>`;
//     }

//     const coloredSentence = words.join("")

//     return coloredSentence;
// }

// const sentence = {t(`homepage.title`)}
// const coloredSentence = splitAndColorSentence(sentence);
const HeroSection: React.FC<HeroProps> = () => {
    const { t } = useTranslation();
   
//   const coloredSentence = splitAndColorSentence(sentence);
    // const imagePath = t(`homepage.sections.${sectionNa`)

//     const navigate = useNavigate();
//   const [isChecked, setIsChecked] = useState(false);

//   const handleToggle = () => {
//     setIsChecked(!isChecked);

//     // Change the route based on the toggle state
//     if (isChecked) {
//         navigate("/home");
//     } else {
//         navigate("/merchants");
//     }
//   };

//   const [isChecked, setIsChecked] = useState(false);


    return (
        <div className='flexCenter px-4 md:px-0 bg-[#fffdfd]'>


            <div className='flex text-center  container mx-auto items-center flex-col lg:py-12'>
              
              
                <div className="flex items-center justify-center  mb-12">
                    {/* <Toggle/> */}
                    {/* <div className="flex items-center space-x-2">
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div> */}
                    {/* <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                        <div className="mr-6  font-semibold">
                            FOR BUYERS
                        </div>
                        <div className="relative">

                            <input type="checkbox" id="toggleB" className="sr-only" checked={isChecked} onChange={handleToggle}/>

                            
                            <div className="block border border-[#ea1d24] w-16 h-8 rounded-full bg-sec"></div>

                            <div className="dot absolute left-1 top-1 bg-primary w-6 h-6 rounded-full transition"></div>
                     
                     
                        </div>
 

                        <div className="ml-6  font-semibold">
                            FOR MERCHANTS
                        </div>
                    </label> */}
                </div>
                <div className='flex md:flex-row flex-col justify-between lg:px-28'>
                    <div className='hidden lg:block'>
                    <Shape />
                    </div>
                   
                    <div>
                        <h1 className='lg:text-4xl text-xl font-semibold' data-aos="fade-right" > {t(`homepage.title1`)} <span className='text-[#67c7c0]'>{t(`homepage.title2`)} </span>{t(`homepage.title3`)} <span className='text-[#67c7c0]'>{t(`homepage.title4`)}</span></h1>
                        <p className='py-10 text-center text-xl lg:px-64' data-aos="fade-left">{t(`homepage.subtitle`)}
</p>
                    </div>
                   
                    <div className='hidden lg:block'>
                    <Shape2 />
                    </div>
                </div>

                <Button title="Join for free" bgColor='bg-button1'/>
                <LazyLoadImage
                    src={HeroImg}
                    // width={800}
                    // height={600}
                    alt="logo"
                    className='pt-20'
                    data-aos="zoom-out-right"
                />

            </div>
        </div>
    )
}

export default HeroSection


