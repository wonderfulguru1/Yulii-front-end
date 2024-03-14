import HeroSection from './HeroSection'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Faq from '../../../components/externalComponents/Faq';
import { merchantItems } from "../../../constants/index"
import Button from '@/components/externalComponents/Button';
import Image1 from "../../../assets/section1.svg"
import { PiCirclesThreePlusFill } from "react-icons/pi"
import { useTranslation } from 'react-i18next';

interface ProUserItem {
  title: string;
  text: string;
}

interface ProUserProps {
  proUserData?: ProUserItem[];
}

const Merchant: React.FC<ProUserProps> = () => {
  const { testimony} = merchantItems
  const { t } = useTranslation();
  const proUserData = t('prousers.section', { returnObjects: true }) as { title: string; text: string }[];
  const proUserItem = t('prousers.goprosection', { returnObjects: true }) as { title: string }[];
  return (
    <div className='pt-22'>
      <HeroSection />

      <div className='bg-white'>
        <div className='container  md:px-10 justify-center lg:px-0 flex lg:flex-row gap-32 items-center flex-col-reverse  md:flex-row   mx-auto pb-10 pt-20 '>
          <div className={`lg:flex hidden `}
            data-aos="fade-right">
            <LazyLoadImage
              src={Image1}
              alt="logo"
              className='md:py-10'
            />
          </div>

          <div className={` flex-col px-4 md:px-0 lg:w-1/2 `} data-aos="fade-left">
            {proUserData.map((item) => (
              <div className='py-4'>
                <h2 className='text-xl my-2 font-semibold flex items-center gap-6 '><span><PiCirclesThreePlusFill /></span>{t(`${item.title}`)}</h2>
                <p className='pl-12'>{t(`${item.text}`)}</p>
              </div>
            ))}


            <div className='flex justify-between space-x-24'>

            </div>

          </div>
        </div>
      </div>
      
      <div className='bg-[#f3fffe]'>
        <div className='container  md:px-10 justify-center lg:px-0 flex lg:flex-row gap-32 items-center flex-col-reverse  md:flex-row   mx-auto pb-10 pt-20 '>

          <div className={` flex-col px-4 md:px-0 lg:w-1/2 `} data-aos="fade-left"
          >
            <div className='lg:flex hidden'>
            <span className={`lg:px-14 py-4 rounded-md text-sm  lg:text-lg font-bold md:text-base bg-[#a4eee9] `}>{t(`prousers.prosectionlabel`)}</span>
            </div>
            <h2 className='text-2xl my-10 font-semibold '>{t(`prousers.prosectiontitle`)}</h2>
            <div className='flex  '>
              <ul>

                {proUserItem.map((item) => (
                  <li className='flex items-center gap-4 py-4 '><span><PiCirclesThreePlusFill /></span>{t(`${item.title}`)}</li>
                ))}
              </ul>

            </div>
            <div className='flex justify-center pt-6'>
            <Button title='Go Pro' bgColor='bg-[#555555]' />
            </div>

          </div>
          <div className={`flex  `}
            data-aos="fade-right">
            <LazyLoadImage
              src={Image1}
              alt="logo"
              className='md:py-10'
            />
          </div>
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
      <div className='flex container mx-auto items-center lg:w-1/2 px-6 lg:px-0 flex-col'>
        <Faq />
      </div>

    </div>
  )
}

export default Merchant