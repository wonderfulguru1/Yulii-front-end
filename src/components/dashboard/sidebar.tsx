import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from "react-router-dom";
import Logout from "../../assets/logout.png"

export const Sidebar = () => {
    return (
        <div className=" border-r flex justify-between items-center bg-[#fffdfd] shadow-sm px-14">
            <div className="flex justify-items-center border-b h-20 p-4">
                <Logo />
            </div>
            <div className=" bg-white">
                <SidebarRoutes />
            </div>

            <div className="  ">
                {/* <div className="flex items-center">
                    <LazyLoadImage
                        src={Logo2}
                        width={50}
                        height={100}
                        alt="logo"
                        className=' '
                    />
                    <div className="">

                        <p className="text-xs">Business tag</p>
                        <div className="flex">
                            <h3 className="flex items-center text-[14px] font-semibold">Shoprite Ikeja</h3>
                            <ChevronDown />
                        </div>
                    </div>

                </div> */}
                <Link to="/">
                    <div className="flex gap-2 ">
                        <LazyLoadImage
                            src={Logout}
                            width={20}
                            height={20}
                            alt="logo"
                            className=' '
                        />
                        <h3 className="text-red-400 font-semibold">Log out</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}