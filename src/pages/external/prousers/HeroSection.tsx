import { LazyLoadImage } from 'react-lazy-load-image-component';
import Toggle from '../../../components/externalComponents/Toggle';
import MerchantImg1 from "../../../assets/prouser.png"
import { useTranslation } from 'react-i18next';


interface ProUserItem {
    title: string;
    text: string;
  }
  
  interface ProUserProps {
    proUserData?: ProUserItem[];
  }

const HeroSection: React.FC<ProUserProps> =() => {
    const { t } = useTranslation();
    // const proUserData = t('prousers', { returnObjects: true }) as { title: string; text: string }[];

    return (
        <div className='flexCenter px-4 md:px-0 bg-[#fffdfd]'>


            <div className='flex text-center  container mx-auto items-center flex-col py-12'>
                <div className="flex items-center justify-center w-full mb-12">
                    <Toggle />
                </div>
                <div className='flex md:flex-row flex-col justify-between'>


                    <div>
                        <h1 className='lg:text-5xl text-xl font-semibold lg:px-10' data-aos="fade-right" >{t(`prousers.title`)}</h1>
                        <p className='py-10 text-center text-xl lg:px-64' data-aos="fade-left">{t(`prousers.text`)}</p>
                    </div>
                    
                </div>
                {/* <div className='w-1/4'>
                        <form>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                            <div className="relative ">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-[#ba5a81] focus:border-[#ba5a81] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search Mockups, Logos..." required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#ba5a81]  focus:ring-4 focus:outline-none focus:ring-[#ba5a81] font-medium rounded-full text-sm px-4 py-2 dark:focus:ring-[#ba5a81]">Search for free</button>
                            </div>
                        </form>
                    </div> */}
                {/* <Button title="Join for free" /> */}
                <LazyLoadImage
                    src={MerchantImg1}
                    alt="logo"
                    className='py-10'
                    data-aos="zoom-out-right"
                />

            </div>
        </div>
    )
}

export default HeroSection