
import Shape from '../../../components/externalComponents/Shapes'
import Shape2 from "@/components/externalComponents/Shape2"
import { Translations } from '@/interface';
import { useTranslation } from 'react-i18next';


interface SectionProps {
  sectionName: keyof Translations['howitworks'];
}


const HeroSection: React.FC<SectionProps> = () => {
  const { t } = useTranslation();
  return (

    <section className='bg-[#78b8ed] pt-20'>
      <div className='container mx-auto items-center px-2 md:w-1/2 py-14 md:py-36  '>
        <div className='px-4 md:px-0 hidden lg:block'>
          {/* <Shape /> */}
        </div>

        <div className='text-center  flex  md:flex-row flex-col justify-between ' data-aos="zoom-in-up">
          <div className='hidden lg:block'>
            <Shape />
          </div>
          <div>
            <h2 className='text-4xl font-semibold text-white'>{t(`howitworks.title`)}</h2>
            <p className='py-10 md:text-2xl text-lg text-white'>{t(`howitworks.subtitle`)}</p>

          </div>
          <div className='hidden lg:block'>
            <Shape2 />
          </div>
        </div>

      </div>
    </section>

  )
}

export default HeroSection