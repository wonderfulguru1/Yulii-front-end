import { faqSection } from "../../constants/index";
import {BiMinusCircle} from "react-icons/bi"

const Faq = () => {

    // const divData = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div className='container mx-auto  space-y-4'>
       
        <div className='bg-secondary rounded-md p-4'>
            <h3 className='font-semibold'>Q: What is Yulli.com?</h3>
        </div>
        {faqSection.map((item, index) => (
        <div className='border rounded-md p-4' key={index}>
           <div className='flex justify-between'>
            <h3 className='font-semibold'>Q: {item.title}</h3>
            <BiMinusCircle 
            className="text-[#dbb5ce] bg-[#dbb5ce] rounded-full"
            size={24}
            />
            </div>
            <p className='pt-2'>{item.subtext}</p>
        </div>
          ))}
    </div>
  )
}

export default Faq