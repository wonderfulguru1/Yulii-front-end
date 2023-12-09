import HeroSection from "./HeroSection"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React, {  useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

interface ContactItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData?: FAQItem[];
  contact?: ContactItem
}


const Contact: React.FC<FAQProps> = () => {
  const { t } = useTranslation();
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const faqData = t('faq.questions', { returnObjects: true }) as { question: string; answer: string }[];
  const contactData = t('faq.contacts', { returnObjects: true }) as { caption: string; text: string; icon: string }[];
  // const contact = t('contact', { returnObjects: true }) as { subheading: string; subtext: string }[];

  const handleQuestionClick = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);

  };
 
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <div className='container mx-auto flex lg:my-20 px-4 md:px-o lg:space-x-20'>
        <div className='w-1/3 hidden md:block'>
          {/* <h3 className=' text-lg font-semibold'>Account and Registration</h3> */}
          <ul className="py-4">
            {faqData?.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer text-lg py-4 ${selectedQuestion === index ? 'text-[#4A9BDD] font-semibold' : ''}`}
                onClick={() => handleQuestionClick(index)}
              >
                {t(`${item.question}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className='md:w-2/3'>

          {faqData?.map((item, index) => (
            <div className='border rounded-md p-6 my-6' key={index} >
              <div className='flex justify-between' >
                <h3 className='font-semibold'>Q: {item.question}</h3>
                {selectedQuestion === index ?
             <FaMinusCircle 
             className="text-[#dbb5ce]  rounded-full"
             size={24}
             style={{ cursor: 'pointer', marginBottom: '8px' }}
             onClick={() => handleQuestionClick(index)}
             /> :
              <FaPlusCircle
              className="text-[#dbb5ce]  rounded-full"
              size={24}
              style={{ cursor: 'pointer', marginBottom: '8px' }}
              onClick={() => handleQuestionClick(index)}
              />
              } 
              </div>
              <div key={index}  className={`my-4 ${selectedQuestion !== index ? 'hidden' : ''}`}>
                <p className="">{t(`${item.answer}`)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className='container mx-auto flex md:w-1/3 flex-col px-2 md:px-0 text-center'>
        <h3 className='text-bold text-3xl'>{t(`contact.subheading`)}</h3>
        <p className='text-lg py-6'>{t(`contact.subtext`)}</p>
      </div>
      <div className='container mx-auto my-6 px-4 md:px-0 py-10'>
        <div className='flex md:flex-row gap-4 lg:gap-0 lg:space-x-6 flex-col'>
          {contactData.map((item) => (
            <div className='flex p-4 border rounded-md flex-col '>
              <LazyLoadImage
                src={t(`${item.icon}`)}
                width={50}
                height={50}
                alt="logo"
                className=''
              />
              <h3 className='py-4 font-semibold'>{t(`${item.caption}`)}</h3>
              <p className='text-base'>{t(`${item.text}`)}</p>

            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Contact