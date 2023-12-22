import React, { useState, useEffect } from 'react';
import { auth } from "@/firebase";
import Profile from '@/components/dashboard/profile';


interface DataItemProps {
  item:any

}

const UserProfile : React.FC<DataItemProps> = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
          if (user && auth.currentUser)
          setUser(() => ({
            email: user.email,
            firstname: user.displayName?.split(' ')[0],
            lastname: user.displayName?.split(' ')[1],
            id: user.uid,
            photoURL: user?.photoURL || null,
          }));      
        });
    
        return () => unsubscribe();
      }, [setUser]);
   
//     const merchantsData = useSelector((state: RootState) => state.users.data);

// const loggedInUserId = auth?.currentUser?.uid
//     const foundUser = merchantsData.find(user => user.id === loggedInUserId);
 
    return ( 
       <div>
        <Profile item={user}/>
       </div>
     );
}
 
export default UserProfile;