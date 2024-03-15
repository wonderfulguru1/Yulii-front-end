/* import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button'; */
import Shape from './Shapes';
import Shape2 from './Shape2';
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Toggle from './Toggle';
/* import HeroImg from "../../assets/hero1.png"
 */import { Translations } from '@/interface';
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

                <div className='flex md:flex-row flex-col justify-between lg:px-28'>
                    <div className='hidden lg:block'>
                        <Shape />
                    </div>

                    <div>
                        <h1 className='intro-text lg:text-4xl text-xl font-semibold' data-aos="fade-right" 
                        style={{fontSize: '4.25rem', lineHeight: '4.5rem'}}
                        > {t(`homepage.title1`)} <span className='text-[#67c7c0]'>{t(`homepage.title2`)} </span>{t(`homepage.title3`)} <span className='text-[#67c7c0]'>{t(`homepage.title4`)}</span></h1>
                        <p className='py-10 text-center text-xl lg:px-64' data-aos="fade-left" style={{paddingLeft: '0rem', paddingRight: '0rem'}}>{t(`homepage.subtitle`)}
                        </p>
                    </div>

                    <div className='hidden lg:block'>
                        <Shape2 />
                    </div>
                </div>

                <iframe width="80%" height="400"
                 src="https://www.youtube.com/embed/Mpw1quautoc?si=5TuiqjRB6c1OSnBz&autoplay=1;modestbranding=1&rel=0;controls=0;showinfo=0"
                  title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

            </div>
        </div>
    )
}

export default HeroSection


