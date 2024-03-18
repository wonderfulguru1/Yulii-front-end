
import { LazyLoadImage } from "react-lazy-load-image-component"
import StoreImg from "../../../assets/Store Page.png"
import { useTranslation } from 'react-i18next';
const Download = () => {
    const { t } = useTranslation();

    return (
        <div className="container items-center   ">
            <div className="flex h-screen items-center">

                <div className="w-1/2 flex justify-center items-center ">
                    <LazyLoadImage
                        src={StoreImg}
                        width={300}
                        height={100}
                        alt="store image"
                        className='' />
                </div>
                <div className="w-1/2 ">
                    <h1 className="text-6xl py-8 font-semi-bold">{t(`download.title`)}</h1>
                    <p className="text-xl"> {t(`download.text`)}</p>
                    <div className='flex  space-x-6 py-8'>
                        <div
                            className="w-full sm:w-auto cursor-pointer bg-black hover:bg-[#122f46] hover:text-white focus:ring-4 focus:ring-gray-300 text-white rounded-full inline-flex items-center justify-center px-4 py-2.5 ">
                            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                                </path>
                            </svg>
                            <div className="text-left">
                                <div className="mb-1 text-xs">Download on the</div>
                                <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                            </div>
                        </div>
                        <div className="w-full sm:w-auto cursor-pointer flex bg-black hover:bg-[#122f46] hover:text-white focus:ring-4 focus:ring-gray-300 text-white rounded-full inline-flex items-center justify-center px-4 py-2.5 ">
                            <svg className="mr-3 w-7 h-7" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.0638 12.4522L18.4327 9.77734L13.6914 14.5186L18.4323 19.2595L23.0796 16.5758C23.8042 16.1355 24.2367 15.3663 24.2367 14.5186C24.2367 13.6708 23.8039 12.9017 23.0638 12.4522Z" fill="#FFCE00" />
                                <path d="M13.6918 14.5189L0.777619 1.51172C0.328448 1.96089 0.0556641 2.57038 0.0556641 3.24414V25.754C0.0556641 26.4277 0.328448 27.0372 0.777619 27.4867L13.6918 14.5189Z" fill="url(#paint0_linear_2264_1656)" />
                                <path d="M13.6915 14.5187L18.4328 9.7774L18.4403 9.76988L12.0876 6.11225L3.71336 1.19051C2.95928 0.725273 2.04487 0.709207 1.27471 1.14231C1.09833 1.25443 0.937664 1.3669 0.777344 1.51115L13.6915 14.5187Z" fill="#00F076" />
                                <path d="M0.777344 27.4861C0.937664 27.6303 1.09833 27.7428 1.27471 27.8549C1.65962 28.0634 2.06093 28.1759 2.46191 28.1759C2.89501 28.1759 3.31205 28.0477 3.6973 27.8231L12.0873 22.925L18.44 19.2673L18.4324 19.2598L13.6915 14.5186L0.777344 27.4861Z" fill="#F63448" />
                                <defs>
                                    <linearGradient id="paint0_linear_2264_1656" x1="-5.71588" y1="20.9929" x2="7.27146" y2="8.00521" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#00E2FF" />
                                        <stop offset="1" stop-color="#00C5FF" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <div className="text-left">
                                <div className="mb-1 text-xs">Download on the</div>
                                <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Download