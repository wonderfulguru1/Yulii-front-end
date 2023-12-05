import {FaMinusCircle, FaPlusCircle} from "react-icons/fa"
import { useTranslation } from 'react-i18next';
import { useState } from "react";


interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData?: FAQItem[];
}
const Faq: React.FC<FAQProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const { t } = useTranslation();
  const faqData = t('faq.questions', { returnObjects: true }) as { question: string; answer: string }[];
 
  return (
    <div className='container mx-auto  space-y-4'>
        <h2 className='text-center font-semibold text-3xl w-2/3 py-8 mx-auto'>{t(`faq.faqTitle`)}</h2>
        <div className='bg-secondary rounded-md p-4'>
            <h3 className='font-semibold'>Q:{t(`faq.question`)}</h3>
        </div>
        {faqData?.map((item, index) => (
        <div className='border rounded-md p-6' key={index}>
           <div className='flex justify-between'>
            <h3 className='font-semibold'>Q: {t(`${item.question}`)}</h3>
            {openIndex === index ?
             <FaMinusCircle 
             className="text-[#dbb5ce]  rounded-full"
             size={24}
             style={{ cursor: 'pointer', marginBottom: '8px' }}
             onClick={() => toggleItem(index)}
             /> :
              <FaPlusCircle
              className="text-[#dbb5ce]  rounded-full"
              size={24}
              style={{ cursor: 'pointer', marginBottom: '8px' }}
              onClick={() => toggleItem(index)}  
              />
              } 
            
            </div>
            {openIndex === index &&  <p className='pt-2'>{t(`${item.answer}`)}</p>}
           
        </div>
          ))}
    </div>
  )
}

export default Faq

