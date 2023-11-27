import { faqSection } from "../../constants/index";
import {BiMinusCircle} from "react-icons/bi"
import { useTranslation } from 'react-i18next';


interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData?: FAQItem[];
}
const Faq: React.FC<FAQProps> = () => {
  const { t } = useTranslation();
  const faqData = t('faq.questions', { returnObjects: true }) as { question: string; answer: string }[];
  return (
    <div className='container mx-auto  space-y-4'>
       
        <div className='bg-secondary rounded-md p-4'>
            <h3 className='font-semibold'>Q: What is Yulli.com?</h3>
        </div>
        {faqData?.map((item, index) => (
        <div className='border rounded-md p-6' key={index}>
           <div className='flex justify-between'>
            <h3 className='font-semibold'>Q: {t(`${item.question}`)}</h3>
            <BiMinusCircle 
            className="text-[#dbb5ce] bg-[#dbb5ce] rounded-full"
            size={24}
            />
            </div>
            <p className='pt-2'>{t(`${item.answer}`)}</p>
        </div>
          ))}
    </div>
  )
}

export default Faq

