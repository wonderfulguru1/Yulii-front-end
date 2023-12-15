// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateUser, fetchUsers } from "../../../redux/usersSlice"
// // import { updateUser, fetchUserById } from 'path-to-your-user-slice';
// // import { fetchUserById, up } from "../../../redux/usersSlice"
// import Trophy from "../../../assets/trophy.png"
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import NoImage from "@/assets/no_image.jpeg";
// import { Pen } from 'lucide-react';

// const item = auth?.currentUser
// interface DataItemProps {
//     item: {
//         id: string; // Assuming each user has a unique identifier
//         firstname?: string;
//         avatarUrl?: string;
//         photoURL?: string;
//         lastname?: string;
//         gender?: string;
//         account?: string;
//         email?: string;
//         phone?: string;
//         // Add more data properties as needed
//     };

// }

// import { auth } from "@/firebase";
// import { Button } from '@/components/ui/button';
// import { RootState } from '@/redux/store';



// const UserProfile : React.FC<DataItemProps> = () => {
//     console.log("ttt", item)

//     const dispatch = useDispatch();
//     const merchantsData = useSelector((state: RootState) => state.users.data);



//     // const dispatch = useDispatch();
//     // const selectedUser = auth?.currentUser;

//     // const [isEditing, setIsEditing] = useState(false);
//     // const [item, setitem] = useState(item);

//     // useEffect(() => {
//     //     // Fetch user data from the API when the component mounts
//     //     if (item?.id) {
//     //         dispatch(fetchUserById(item?.id));
//     //     }
//     // }, [dispatch, item?.id]);

//     // useEffect(() => {
//     //     // Update the edited user when the selected user changes
//     //     setitem( item);
//     // }, [ item]);

//     // const handleEditClick = () => {
//     //     // Enable editing
//     //     setIsEditing(true);
//     // };

//     // const handleCancelEdit = () => {
//     //     // Cancel editing by resetting the item state
//     //     setIsEditing(false);
//     //     setitem(selectedUser);
//     // };

//     // const handleSaveEdit = () => {
//     //     // Dispatch the updateUser action when saving the edited user information
//     //     dispatch(updateUser(item));
//     //     // Disable editing after saving
//     //     setIsEditing(false);
//     // };

//     // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, property: string) => {
//     //     // Update the local state as the user types in the form
//     //     setitem({
//     //         ...item,
//     //         [property]: e.target.value,
//     //     });
//     // };
// const loggedInUserId = auth?.currentUser?.uid
//     const foundUser = merchantsData.find(user => user.id === loggedInUserId);
 
//     return ( 
//        <div>
        
//        </div>
//      );
// }
 
// export default UserProfile;