"use client"
import InstaCard from "@/components/externalComponents/InstaCard";
import { useTranslation } from "react-i18next";

interface SocialItem {
  name: string;
  heading: string;
  image:string
}

interface SocialProps {
  socialData?: SocialItem[];
}

const DealsPage: React.FC<SocialProps> = () => {
  const { t } = useTranslation();
  const socialData = t('socials.section', { returnObjects: true }) as { name: string; heading: string, image:string }[];

  return (
    <div className='pt-28 bg-[#fffdfd]'>

      <section className=''>
        <div className='container lg:w-1/2 px-4 md:px-0 mx-auto  items-center py-14 '>
          <div className=' text-center '>
            <h2 className='text-4xl font-semibold' data-aos="zoom-out-right">  {t(`socials.heading`)}</h2>
            <p className='lg:py-10 md:text-2xl text-lg ' data-aos="zoom-out-right">
            {t(`socials.title`)}

            </p>
          </div>
         
        </div>

      </section>
  
<div>
{socialData?.map((item) => (
  <InstaCard name={t(`${item.name}`)} heading={t(`${item.heading}`)} image={t(`${item.image}`)} />
))}

</div>
    </div>
  )
}

export default DealsPage