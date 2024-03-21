
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Translations } from '@/interface';
import { useTranslation } from 'react-i18next';


interface SectionProps {
  sectionName: keyof Translations['howitworks']['sections'];
  order: string;
  order2: string;
  number: string;
}



const Card: React.FC<SectionProps> = ({ sectionName, order, order2 , number}) => {
    const { t } = useTranslation();
    const imagePath = t(`howitworks.sections.${sectionName}.Image`)
    return (
        <div className=''>

            <div className='container mx-auto flex w-5/6 gap-10 flex-col lg:flex-row items-center justify-between py-10' data-aos="zoom-in-down">

                <div className= {` lg:w-2/3 ${order}`} >
                    <div className='h-12 w-12 border-dashed border-[#78b8ed] text-[#78b8ed] border-b-4 py-2 item-center text-center rounded-full font-semibold '>{number}</div>
                    <div className='px-4 border-l-4 border-b-4 border-[#fef5f0] border-dashed mt-4'>
                        <h3 className='font-semibold'>{t(`howitworks.sections.${sectionName}.title`)}</h3>
                        <p className='py-8'>
                        {t(`howitworks.sections.${sectionName}.text`)}
                        </p>
                    </div>
                </div>
                <div className={`  ${order2} `} >
                <LazyLoadImage
                    src={imagePath}
                    alt="logo"
                    className=''
                    data-aos="zoom-in-up"
                />
                </div>
            </div>

         
        </div>
    )
}

export default Card