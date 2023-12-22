import { Layout, Compass, List, BarChart } from "lucide-react"
import { SidebarItem } from "./sidebar-item";
import { useLocation } from "react-router-dom";

const merchantRoutes = [
    {
        icon: Layout,
        label: "Overview",
        href: "/overview"
    },
    {
        icon: Compass,
        label: "Deals",
        href: "/deals"
    },
    {
        icon: Compass,
        label: "Rewards",
        href: "/rewards"
    },
    {
        icon: Compass,
        label: "Users",
        href: "/users"
    },
    {
        icon: Compass,
        label: "Yulli Store",
        href: "/yulli-store"
    },
    {
        icon: Compass,
        label: "Settings",
        href: "/settings"
    },
];

const customerRoutes = [
    {
        icon: List,
        label: "Home",
        href: "/customer"
    },
    {
        icon: BarChart,
        label: "Category",
        href: "/customer/category"
    },
    {
        icon: BarChart,
        label: "Stores",
        href: "/customer/stores"
    },
    {
        icon: BarChart,
        label: "Profile",
        href: "/customer/profile"
    },
    
]


export const SidebarRoutes = () => {
const location = useLocation();

const isCustomerPage = location.pathname?.includes("/customer");

const routes = isCustomerPage ? customerRoutes : merchantRoutes

    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem 
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
                />
            ))}
        </div>
    )
}