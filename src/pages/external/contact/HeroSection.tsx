import { LazyLoadImage } from 'react-lazy-load-image-component';
import {faqHeroSection} from "../../../constants/index"
import { useTranslation } from 'react-i18next';

interface ContactItem {
  title: string;
  text: string;
}

interface ContactProps {
  termsAndCondition?: ContactItem[];
}

const HeroSection: React.FC<ContactProps> = () => {
  const { t } = useTranslation();
  return (
    <section className='bg-[#78b8ed]'>
    <div className='container mx-auto flex px-2 md:px-2 flex-col md:flex-row items-center pt-24 md:space-x-20'>
        <div className='md:w-1/2 text-center md:text-start' data-aos="fade-up-right">
            <h2 className='text-4xl text-center font-semibold text-white'>{t(`contact.title`)}</h2>
            <p className='py-10 md:text-2xl text-lg text-white'>{t(`contact.text`)}</p>
        </div>
        <div className='md:w-1/2 flex justify-center' data-aos="zoom-in-up">
        <LazyLoadImage
            src={faqHeroSection.Image}
            width={400}
            height={400}
            alt="logo"
            className='md:py-10'
          />
        </div>
    </div>
    </section>
  )
}

export default HeroSection