import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, fetchUserById } from '../../redux/usersSlice'

import Trophy from "../../assets/trophy.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NoImage from "../../assets/no_image.jpeg";
import { Pen } from 'lucide-react';
import { Button } from '../ui/button';

interface DataItemProps {
    item: {
        id: string; // Assuming each user has a unique identifier
        firstname?: string;
        avatarUrl?: string;
        photoURL?: string;
        lastname?: string;
        gender?: string;
        account?: string;
        email?: string;
        phone?: string;
        // Add more data properties as needed
    };
}

const Profile: React.FC<DataItemProps> = ({ item }) => {
    const dispatch = useDispatch();
    const selectedUser = useSelector((state) => state.users.selectedUser);

    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(item);

    useEffect(() => {
        // Fetch user data from the API when the component mounts
        if (item?.id) {
            dispatch(fetchUserById(item?.id));
        }
    }, [dispatch, item?.id]);

    useEffect(() => {
        // Update the edited user when the selected user changes
        setEditedUser(selectedUser || item);
    }, [selectedUser, item]);

    const handleEditClick = () => {
        // Enable editing
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        // Cancel editing by resetting the editedUser state
        setIsEditing(false);
        setEditedUser(selectedUser || item);
    };

    const handleSaveEdit = () => {
        // Dispatch the updateUser action when saving the edited user information
        dispatch(updateUser(editedUser));
        // Disable editing after saving
        setIsEditing(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, property: string) => {
        // Update the local state as the user types in the form
        setEditedUser({
            ...editedUser,
            [property]: e.target.value,
        });
    };
console.log("ffff",item)
    return (
        <div className="flex space-x-6 items-center shadow-md">
            <div className="w-1/4 flex items-center flex-col">
                <div className=" my-4 rounded-lg  p-5">
                    <img
                        className="w-20 h-20 rounded-full mx-auto "
                        src={editedUser?.avatarUrl || editedUser?.photoURL || NoImage}
                        alt="Profile picture"
                    />
                    <div></div>
                    <div className="py-4">
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedUser?.firstname}
                                onChange={(e) => handleInputChange(e, 'firstname')}
                                className='border rounded-lg px-4 py-2'
                            />
                        ) : (
                            <div className='flex gap-1 items-center'>
                                <h3 className="font-semibold capitalize">{editedUser?.firstname}  {editedUser?.lastname}</h3>
                                {isEditing ? (
                                    ""
                                ) : (<Pen onClick={handleEditClick} size={12} className='-mt-4'/>)}
                            </div>
                        )}

                    </div>
                    <div className="">
                        {isEditing ? (
                            <input
                                type="text"
                                value={editedUser?.lastname}
                                onChange={(e) => handleInputChange(e, 'lastname')}
                                className='border rounded-lg px-4 py-2'
                            />
                        ) : (
                            <div className='flex gap-1 items-center'>

                            </div>
                        )}

                    </div>
                    {/* <h2 className="text-center text-xl font-semibold mt-3">{editedUser?.firstname}{editedUser?.lastname}</h2> */}
                    <p className="text-center text-gray-600 mt-1"></p>
                    <div className="flex justify-center mt-5">
                        <p></p>
                    </div>
                    <div className=" flex gap-4 items-center">
                        <span className="text-sm text-gray-500">Account </span>

                        {isEditing ? (
                            <input
                                type="text"
                                value={editedUser?.account}
                                onChange={(e) => handleInputChange(e, 'account')}
                                className='border w-1/2 rounded-lg  px-4 py-2'
                            />
                        ) : (
                            <span className='capitalize'>{editedUser?.account}</span>
                        )}
                    </div>
                </div>
         
                {isEditing ? (
                    <div className="flex gap-6 items-center mb-6">
                        <Button
                          onClick={handleSaveEdit}
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="bg-black px-4  text-white rounded-full hover:bg-black-100 hover:text-white"
                        >
                            Save
                        </Button>
                        <Button
                         onClick={handleCancelEdit}
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="bg-red-500 px-4  text-white rounded-full hover:bg-black-100 hover:text-white"
                        >
                            Cancel
                        </Button>
                    </div>
                ) : (
                    <div className='mb-6'>
                    <Button
                   onClick={handleEditClick}
                       type="button"
                       variant="ghost"
                       size="sm"
                       className="bg-black px-4  text-white rounded-full hover:bg-black-100 hover:text-white"
                   >
                       Edit Profile
                   </Button>
                   </div>
                )}
            </div>
            {/* ... (Other sections remain the same) */}
            <div className="w-1/4  flex flex-col ">
                <div className="pb-4">
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedUser?.gender}
                            onChange={(e) => handleInputChange(e, 'gender')}
                            className='border rounded-lg px-4 py-2'
                        />
                    ) : (
                        <div className='flex gap-1 items-center'>
                            <h3 className="font-semibold capitalize">{editedUser?.gender}</h3>
                            {isEditing ? (
                                ""
                            ) : (<Pen onClick={handleEditClick} size={12} className='-mt-4'/>)}
                        </div>
                    )}
                    <span className="text-sm text-gray-500">Gender</span>
                </div>
                <div className="pb-4">
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedUser?.phone}
                            onChange={(e) => handleInputChange(e, 'phone')}
                            className='border rounded-lg px-4 py-2'
                        />
                    ) : (
                        <div className='flex gap-1 items-center'>
                            <h3 className="font-semibold capitalize">{editedUser?.phone}</h3>
                            {isEditing ? (
                                ""
                            ) : (<Pen onClick={handleEditClick} size={12} className='-mt-4'/>)}
                        </div>
                    )}
                    <span className="text-sm text-gray-500">Phone Number</span>
                </div>

                <div className="pb-4">
                    <h3 className="font-semibold">{item?.email}</h3>
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
            {/* Update User Form */}

        </div>
    );
};

export default Profile;
