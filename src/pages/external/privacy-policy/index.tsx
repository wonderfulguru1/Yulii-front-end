import { useTranslation } from 'react-i18next';

interface PrivacyItem {
    question: string;
    answer: string;
  }
  
  interface PrivacyProps {
    faqData?: PrivacyItem[];
  }

const PrivacyPolicy: React.FC<PrivacyProps> = () => {
    const { t } = useTranslation();
    const faqData = t('privacy.headings', { returnObjects: true }) as { question: string; answer: string }[];
    return ( 
        <div className='container mx-auto pt-40'>
            <h2 className='font-bold text-4xl text-center py-8'>{t(`privacy.privacyTitle`)}</h2>
                <p>{t(`privacy.privacySubtext`)}</p>
              {faqData?.map((item, index) => (
                 <div className=' py-4' key={index}>
                    <h3 className='font-semibold text-md'>{t(`${item.question}`)}</h3>
                    <p className='text-sm'>{t(`${item.answer}`)}</p>
                 </div>
              ))}
        </div>
     );
}
 
export default PrivacyPolicy;