
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image1 from "../../../assets/image11.png"
import Image2 from "../../../assets/image22.png"
import Image4 from "../../../assets/payment.png"
import Image3 from "../../../assets/image33.png"


// interface CardProps {
//     imageSrc: string;
//     content: string;
//     label: string;
//     subtext: string;
//     bgColor?: string,
//     textColor?: string
//     order: string
//     order2: string
//     labelColor: string
// }


const Card = () => {
    return (
        <div className=''>

            <div className='flex flex-col space-x-24 lg:flex-row items-center justify-center' data-aos="fade-up-right">

                <div className=' justify-center lg:w-1/2  '>
                    <div className='h-12 w-12 border-dashed border-[#78b8ed] text-[#78b8ed] border-b-4 py-2 item-center text-center rounded-full font-semibold '>1</div>
                    <div className='px-4 border-l-4 border-b-4 border-[#fef5f0] border-dashed mt-4'>
                        <h3 className='font-semibold'>Sign up and get rewarded every time you shop</h3>
                        <p className='py-8'>
                        In Yulii, you will be able to sign-in in the most simple way with only your email address and password. 
                        Even if you have forgotten your password, Yulii will take care of it and send you a unique link with instructions. This is your door to a new world of deals and fun with your friends.
                        </p>
                    </div>
                </div>
                <LazyLoadImage
                    src={Image1}
                    // width={550}
                    // height={200}
                    alt="logo"
                    className=''
                    data-aos="fade-up-left"
                />
            </div>

            <div className='flex space-x-24  flex-col-reverse lg:flex-row items-center justify-center py-8'>
                {/* <div className='lg:w-1/2'> */}
                    <LazyLoadImage
                         src={Image2}
                        // width={550}
                        // height={200}
                        alt="logo"
                        className=' '
                    />
                {/* </div> */}
                <div className=' justify-center lg:w-1/2 '>
                    <div className='h-12 w-12 border-dashed border-[#78b8ed] text-[#78b8ed] border-b-4 py-2 item-center text-center rounded-full font-semibold '>2</div>
                    <div className='px-4 border-l-4 border-b-4 border-[#fef5f0] border-dashed mt-4'>
                        <h3 className='font-semibold'> Invite a friend to the app and ensure they accept your friend request</h3>
                        <p className='py-8'>
                        🔍  After the onboarding process which takes less than a minute the next thing to do is to invite your friends and family to join you then you can assign deals and rewards to them
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col space-x-24 lg:flex-row items-center justify-center' data-aos="flip-left">

                <div className=' justify-center lg:w-1/2 '>
                    <div className='h-12 w-12 border-dashed border-[#78b8ed] text-[#78b8ed] border-b-4 py-2 item-center text-center rounded-full font-semibold '>3</div>
                    <div className='px-4 border-l-4 border-b-4 border-[#fef5f0] border-dashed mt-4'>
                        <h3 className='font-semibold'> Create a deal and attach to a friend family or group of person</h3>
                        <p className='py-8'>
                        🔍  See all deals from your group of friends. Each deal is associated with the picture of your friend or even yours, which represents the assignee of the deal. 
                        That way you can keep track of what everybody has going on. Remember ! Always keep track of what your friends and family are doing, that way you know you can complete your tasks before them !
                        </p>
                    </div>
                </div>
                <LazyLoadImage
                     src={Image3}
                    // width={250}
                    // height={200}
                    alt="logo"
                    className='data-aos="flip-right"'
                />
            </div>

            <div className='flex flex-col-reverse space-x-24  lg:flex-row items-center justify-center py-8'>
                <div className='' data-aos="zoom-in">
                    <LazyLoadImage
                         src={Image4}
                        // width={550}
                        // height={200}
                        alt="logo"
                        className=' '
                    />
                </div>
                <div className=' justify-center lg:w-1/2 ' data-aos="zoom-in-up">
                    <div className='h-12 w-12 border-dashed border-[#78b8ed] text-[#78b8ed] border-b-4 py-2 item-center text-center rounded-full font-semibold '>4</div>
                    <div className='px-4 border-l-4 border-b-4 border-[#fef5f0] border-dashed mt-4'>
                        <h3 className='font-semibold'> Gift rewards to family and friends who  have completed their task sucessfully</h3>
                        <p className='py-8'>
                        Upload a picture of video of an Item that will be giving to th person who successfully finish a task. Alternatively  the gift can be purchased at a very discounted price form the Yulii Store
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card