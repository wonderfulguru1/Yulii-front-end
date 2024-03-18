
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import Button from './Button';
import { Translations } from '@/interface';
import { useTranslation } from 'react-i18next';

interface SectionProps {
    sectionName: keyof Translations['homepage']['sections'];
    bgColor?: string;
    textColor?: string;
    order: string;
    order2: string;
    labelColor: string;
}

const GenericSection: React.FC<SectionProps> = ({ sectionName, labelColor, order, order2 }) => {
    const { t } = useTranslation();
    const imagePath = t(`homepage.sections.${sectionName}.image`)

    return (
        <div className='container md:px-10 justify-center lg:px-0 flex lg:flex-row gap-32 items-center flex-col-reverse  md:flex-row   mx-auto pb-10 pt-20 '>
            <div className={`flex  ${order}`}
                data-aos="fade-right">
                <LazyLoadImage
                    src={imagePath}
                    alt="logo"
                    className='md:py-10'
                />
            </div>

            <div className={` flex-col px-4 md:px-0 lg:w-1/2 ${order2}`}  data-aos="fade-left"
               >
                <div className='lg:flex hidden'>
                <span className={`p-4 rounded-md  text-sm md:text-base ${labelColor}`}>{t(`homepage.sections.${sectionName}.label`)}</span>
                </div>
                <h2 className='text-3xl lg:mt-20 font-semibold'>{t(`homepage.sections.${sectionName}.title`)}</h2>
                <p className='my-10'>{t(`homepage.sections.${sectionName}.subtext`)}</p>
            </div>
        </div>
    )
}

export default GenericSection