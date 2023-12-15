import { LazyLoadImage } from "react-lazy-load-image-component";
import Trophy from "../../assets/trophy.png"
import Symbol from "../../assets/prizeSymbol.png"

// interface PageProps {
//     pageTitle: string;
//     data: {
//       title: string;
//       content: string;
//       // Add more data properties as needed
//     };
//   }

const FriendsProfile = () => {
    return (

        <div className="antialiased font-sans ">
            <div className="">
                <div className="py-8">

                    <div className="my-2 flex sm:flex-row justify-end flex-col">


                        <div className="flex items-center justify-center p-5">
                            {/* <div class="w-full rounded-lg bg-gray-200 p-5 w-2/4"> */}
                            <div className="flex rounded-lg bg-gray-50">
                                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg  bg-gray-50  p-5">
                                    <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                    </svg>
                                </div>
                                <input type="text" className="w-full bg-gray-50 pl-2 text-base font-semibold outline-0" placeholder="" id="" />
                                <input type="button" value="Search" className="bg-black py-2 px-6 rounded-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Friends Profile
                                        </th>

                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Deals Information
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Vera Carpenter
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex-col ">
                                                <div className="flex space-x-10">
                                                <div>
                                                    <LazyLoadImage
                                                        src={Trophy}
                                                        width={25}
                                                        height={20}
                                                        alt="logo"
                                                        className=' '
                                                    />
                                                </div>
                                                    <h4 className="text-xl font-semibold">120 Points</h4>
                                                </div>
                                                <div className="flex gap-6 items-center">
                                                    <div className="w-1/2 justify-between flex h-4 bg-gray-200 rounded-full">
                                                        <div className="w-1/3 h-full text-center text-xs text-white bg-blue-600 rounded-full">
                                                        </div>

                                                    </div>
                                                    <div className="w-1/2">
                                                        <h3 className="font-bold text-2xl">0/1</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center gap-6">
                                                <div>
                                                    <LazyLoadImage
                                                        src={Symbol}
                                                        width={45}
                                                        height={0}
                                                        alt="logo"
                                                        className=' '
                                                    />
                                                </div>
                                                <div className="bg-blue-600 py-2 px-4 rounded-full">
                                                    <p className="text-white font-semibold">View</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            {/* <div
                        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span className="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendsProfile;