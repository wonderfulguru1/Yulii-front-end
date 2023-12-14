import FriendsProfile from "@/components/dashboard/friend-profile";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Trophy from "../../../assets/trophy.png"
// import Symbol from "../../../assets/prizeSymbol.png"
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../../redux/usersSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/redux/store";



const UserDetailsPage = () => {
    const dispatch = useDispatch();
    const { userId } = useParams(); 
    const { selectedUser, status, error } = useSelector((state) => state.users);

    useEffect(() => {    
        dispatch(fetchUserById(userId));
    }, [dispatch, userId]);

    return (
        <div className="p-6 container ">
            <div></div>
            <div className="flex space-x-6 items-center shadow-md">
                <div className="w-1/4 flex items-center flex-col">
                    <div className=" my-10 rounded-lg  p-5">
                        <img className="w-20 h-20 rounded-full mx-auto" src={selectedUser?.avatarUrl || selectedUser?.photoURL} alt="Profile picture" />
                        <h2 className="text-center text-xl font-semibold mt-3">{selectedUser?.firstname}{selectedUser?.lastname}</h2>
                        <p className="text-center text-gray-600 mt-1"></p>
                        <div className="flex justify-center mt-5">
                           <p></p>
                        </div>
                        <div className=" flex justify-between">
                            <span className="text-sm text-gray-500">Account Type</span>
                            <span>{selectedUser?.account}</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/4  flex flex-col ">
                    <div className="pb-4 ">
                        <h3 className="font-semibold">{selectedUser?.gender}</h3>
                        <span className="text-sm text-gray-500">Gender</span>
                    </div>
                    <div className="pb-4">
                        <h3 className="font-semibold">{selectedUser?.phone}</h3>
                        <span className="text-sm text-gray-500">Phone Number</span>
                    </div>
                    <div className="pb-4">
                        <h3 className="font-semibold">{selectedUser?.email}</h3>
                        <span className="text-sm text-gray-500">Email</span>
                    </div>
                    <div className="pb-4">
                        <h3 className="font-semibold"></h3>
                        <span className="text-sm text-gray-500">Address</span>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col items-center">
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
                            <div className="w-2/3 justify-between flex h-4 bg-gray-200 rounded-full">
                                <div className="w-1/3 h-full text-center text-xs text-white bg-blue-600 rounded-full">
                                </div>

                            </div>
                            <div className="w-1/2">
                                <h3 className="font-bold text-2xl">0/1</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col items-center" >4</div>
            </div>
            <div>
                <div>

                </div>
                <FriendsProfile />
            </div>
        </div>
    );
}

export default UserDetailsPage;