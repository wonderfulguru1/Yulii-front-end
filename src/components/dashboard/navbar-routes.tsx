"use client"

import { Bell} from "lucide-react";
import DefaultProfile from "@/assets/defaultprofile.png"
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

export const NavbarRoutes = () => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
          if (user) {
            setUser(user);
          } else {
            setUser(null);
          }
        });
        return () =>{ setUser(null) ,unsubscribe()};
      }, [setUser]);
   
  
    return (
        <div className="flex justify-between items-center w-full">
            <div className="relative  ">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                        <path
                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                        </path>
                    </svg>
                </span>
                <input placeholder="Search"
                    className="appearance-none rounded-lg border-b block pl-8 pr-24 py-2 w-full bg-gray-200 text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
            </div>
            <div className="flex items-center gap-4 px-2">
            <Bell size={20}/>
                <img src={user?.photoURL || DefaultProfile} alt="" className="w-8 h-8 cursor-pointer border-2 rounded-full" />
              <div className="flex flex-col">
                <h3 className="font-bold capitalize">{user?.displayName}</h3>
                <p className="text-sm">{user?.email}</p>
              </div>
            </div>
        </div>
    )
}