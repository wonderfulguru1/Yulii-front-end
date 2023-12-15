import FriendsProfile from "@/components/dashboard/friend-profile";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Trophy from "../../../assets/trophy.png"
// import Symbol from "../../../assets/prizeSymbol.png"
import { useParams } from "react-router-dom";
import { fetchUserById, fetchUsers } from "../../../redux/usersSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import Profile from "@/components/dashboard/profile";



const UserDetailsPage = () => {
    const dispatch = useDispatch();
    const { userId } = useParams(); 
    const { selectedUser, status, error } = useSelector((state) => state.users);
    const usersData = useSelector((state: RootState) => state.users.data);
    // const [friend, setFriends] = useState([])

    useEffect(() => {    
        dispatch(fetchUserById(userId));
    }, [dispatch, userId]);

    const friendsArray = selectedUser?.friends;



// console.log("selectedUser", friendsArray)

    return (
        <div className="p-6 container ">
            <div></div>
            <Profile item={selectedUser}/>
            <div>
                <div>

                </div>
                <FriendsProfile />
            </div>
        </div>
    );
}

export default UserDetailsPage;