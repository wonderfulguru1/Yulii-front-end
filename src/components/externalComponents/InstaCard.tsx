
import { MoreVertical } from 'lucide-react';

interface SocialItem {
    name: string;
    heading: string;
    image: string
  }

const InstaCard: React.FC<SocialItem> = ({name, heading, image}) => {
    return (
        <div>




            <div className="mx-auto flex justify-center max-w-3xl md:mb-8 mt-4 bg-white rounded-lg items-center relative md:p-0 p-8">

                <div className="h-full relative">
                    <div className="py-2 px-2">
                        <div className="flex justify-between items-center py-2">
                            <div className="relative mt-1 flex">
                                <div className="mr-2">
                                    <img src={image} alt="adebayor"
                                        className="w-10 h-10 rounded-full object-cover" />
                                </div>
                                <div className="ml-3 flex justify-start flex-col items-start">
                                    <p className="text-gray-900 text-sm font-bold capitalize">
                                        {name}
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                    {name}
                                    </p>
                                </div>
                                <span className="text-xs mx-2">•</span>
                                <button className="text-indigo-500 text-sm capitalize flex justify-start items-start">follow</button>
                            </div>

                            <button type="button">
                                <MoreVertical />
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full h-full">
                        <img src={image} alt="saman" className="rounded-lg w-full h-full object-cover" />
                    </div>
                    <div className="">


                        <div className="flex justify-between items-start p-2 py-">
                            <div className="flex space-x-2 items-center">
                                <button type="button" className="focus:outline-none Like"><svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
                                <button type="button" className="focus:outline-none Comment" ><svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></button>
                                <button type="button" className="focus:outline-none save"><svg className="w-7 h-7 mb-1 ml-1 text-gray-600  z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></button>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <button type="button" className="focus:outline-none Like"><svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg></button>
                            </div>
                        </div>
                        <div className="p-2 flex flex-col space-y-3">
                            <div className="text-sm">
                                <span className="font-semibold">     {name}</span>      {heading}
                                
                            </div>

                            <div className="text-gray-500 text-sm">
                                View all 877 comments
                            </div>

                            <div className="text-gray-400 text-xs">
                                2 HOURS AGO
                            </div>
                            {/* <div className="w-full">
                                <p className="font-bold text-sm text-gray-700">234 likes</p>
                            </div>
                            <div className="w-full">
                                <p className="font-normal text-xs text-gray-500">10 hours ago</p>
                            </div> */}
                        </div>

                        <div className="z-50">
                            <form>
                                <div className="flex justify-between border-t items-center w-full"
                                >
                                    <div className="w-full ">
                                        <input type="text" name="comment" id="comment" placeholder="Add A Comment..."
                                            className="w-full text-sm py-4 px-3 rounded-none focus:outline-none" />
                                    </div>
                                    <div className="w-20">
                                        <button className="border-none text-sm px-4 bg-white py-4 text-indigo-600 focus:outline-none">Post</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstaCard;