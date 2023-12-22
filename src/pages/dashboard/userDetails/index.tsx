import FriendsProfile from "@/components/dashboard/friend-profile";
import { useLocation } from "react-router-dom";
import Profile from "@/components/dashboard/profile";



const UserDetailsPage = () => {
    const location = useLocation()
    const data = location?.state?.data

    return (
        <div className="p-6 container ">
            <div></div>
            <Profile item={data} />
            <div>
               
                <FriendsProfile />
            </div>
        </div>
    );
}

export default UserDetailsPage;