import { Layout, Compass, List, BarChart } from "lucide-react"
import { SidebarItem } from "./sidebar-item";
import { useLocation } from "react-router-dom";

const merchantRoutes = [
    {
        icon: Layout,
        label: "Overview",
        href: "/merchant"
    },
    {
        icon: Compass,
        label: "Promotions & Offers",
        href: "/merchant/promotions"
    },
    {
        icon: Compass,
        label: "Order history",
        href: "/merchant/orders"
    },
    {
        icon: Compass,
        label: "Customers",
        href: "/merchant/sales"
    },
    {
        icon: Compass,
        label: "Invoice",
        href: "/merchant/invoices"
    },
    {
        icon: Compass,
        label: "Settings",
        href: "/merchant/settings"
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
        <div className="flex  w-full">
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