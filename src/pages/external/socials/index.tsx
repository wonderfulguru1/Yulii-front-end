"use client"
import InstaCard from "@/components/externalComponents/InstaCard";
import { useTranslation } from "react-i18next";

// interface DropdownProps {
//   options: string[];
//   onSelect: (selectedOption: string) => void;
// }

interface SocialItem {
  title: string;
  text: string;
}

interface SocialProps {
  socialData?: SocialItem[];
}

const DealsPage: React.FC<SocialProps> = () => {
  const { t } = useTranslation();
  // const socials = t('socials', { returnObjects: true }) as { title: string; text: string }[];
  // const socialsSocials = t('socials', { returnObjects: true }) as { title: string; text: string }[];
  
  const numberOfCards = 5;
  const cards = Array.from({ length: numberOfCards }, (_, index) => (
    <InstaCard key={index} />
  ));

  return (
    <div className='pt-28 bg-[#fffdfd]'>

      <section className=''>
        <div className='container w-1/2 px-4 md:px-0 mx-auto  items-center py-14 '>
          <div className=' text-center '>
            <h2 className='text-4xl font-semibold' data-aos="zoom-out-right">  {t(`socials.heading`)}</h2>
            <p className='py-10 md:text-2xl text-lg ' data-aos="zoom-out-right">
            {t(`socials.title`)}

            </p>
          </div>
         
        </div>

      </section>
  
<div>

  {cards}
</div>
    </div>
  )
}

export default DealsPage