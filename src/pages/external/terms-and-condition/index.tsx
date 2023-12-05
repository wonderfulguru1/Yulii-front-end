import { useTranslation } from 'react-i18next';

interface TermsItem {
    title: string;
    text: string;
  }
  
  interface TermsProps {
    termsAndCondition?: TermsItem[];
  }

const TermsAndCondition: React.FC<TermsProps> = () =>{
    const { t } = useTranslation();
    const termsAndCondition = t('termsAndCondition.questions', { returnObjects: true }) as { title: string; text: string }[];
       
        return ( 
            <div className='container mx-auto pt-40'>
                <h2 className='font-bold text-4xl text-center py-8'>{t(`termsAndCondition.heading`)}</h2>
                <p>{t(`termsAndCondition.title`)}</p>
                  {termsAndCondition?.map((item, index) => (
                     <div className=' py-4' key={index}>
                        <h3 className='font-semibold text-md'>{t(`${item.title}`)}</h3>
                        <p className='text-sm'>{t(`${item.text}`)}</p>
                     </div>
                  ))}
            </div>
     );
}
 
export default TermsAndCondition;