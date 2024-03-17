import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useNavigate} from "react-router-dom";
import Logout from "../../assets/logout.png"
import { signOut } from "firebase/auth";
import { auth} from "@/firebase";


export const Sidebar = () => {
    const navigate = useNavigate()
    const logout = async () => {
        try {
          await signOut(auth);
          navigate("/home")
        } catch (error) {
          console.error("error");
        }
      };
    return (
        <div className="h-full flex flex-col overflow-y-auto bg-[#fffdfd] shadow-sm">
        <div className="flex justify-items-center border-b h-20 p-4">
            <Link to="/">
                 <Logo />
            </Link>
          
        </div>
        <div className="flex flex-col w-full bg-white">
            <SidebarRoutes />
        </div>

        <div className="mt-auto py-20 px-6 flex-col flex-end ">
            {/* <div className="flex items-center"> */}
                {/* <LazyLoadImage
                    src="/Logo2.png"
                    width={50}
                    height={100}
                    alt="logo"
                    className=' '
                /> */}
                {/* <div className="">

                    <p className="text-xs">Business tag</p>
                    <div className="flex">
                        <h3 className="flex items-center text-[14px] font-semibold">Shoprite Ikeja</h3>
                        <ChevronDown />
                    </div>
                </div> */}

            {/* </div> */}
            <button onClick={logout}>
                <div className="flex gap-4 py-6 ">
                    <LazyLoadImage
                        src={Logout}
                        width={20}
                        height={20}
                        alt="logo"
                        className=' '
                    />
                    <h3 className="text-red-400 font-semibold">Log out</h3>
                </div>
            </button>
        </div>
    </div>
    )
}