
import { Sidebar } from '@/components/dashboard/sidebar';
import { useOutlet } from 'react-router-dom';
// import {projectAuth} from "..fire"

const DashboardLayout = () => {
    const outlet = useOutlet();
    return (
        <div className="h-full bg-[#fffdfd]">
            <div className="h-[80px]  fixed inset-y-0 w-full z-50">
                {/* <Navbar /> */}
                <Sidebar />
            </div>
            {/* <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div> */}
            <main className="pt-[80px] h-full container mx-auto">
                {outlet}
            </main>
        </div>
    );
}

export default DashboardLayout;