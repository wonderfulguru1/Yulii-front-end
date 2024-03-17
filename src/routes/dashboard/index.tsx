import Home from "@/pages/dashboard/home"

import OrdersPage from "@/pages/dashboard/orders"
import CustomersPage from "@/pages/dashboard/users"
import PromotionsPage from "@/pages/dashboard/deals"
import ProductDetails from "@/pages/dashboard/deals/[id]"
import CreatePromotion from "@/pages/dashboard/deals/create"
import UserDetailsPage from "@/pages/dashboard/userDetails"
import YuliiStorePage from "@/pages/dashboard/yuliiStore"
import StoreItem from "@/pages/dashboard/yuliiStore/[id]"
import AddStoreItemForm from "@/pages/dashboard/yuliiStore/addStoreItem"
import UserProfile from "@/pages/dashboard/settings"

const dashboardRoute = [
    {
        element: <Home/>,
        path: 'overview',
    },
    {
        element: <YuliiStorePage/>,
        path: 'Yulii-store',
    },
    {
        element: <OrdersPage/>,
        path: 'rewards',
    },
    {
        element: <CustomersPage/>,
        path: 'users',
    },
    
    {
        element: <PromotionsPage/>,
        path: 'deals',
    },
    {
        element: <UserProfile item={undefined}/>,
        path: 'settings',
    },

    {
        element: <ProductDetails/>,
        path: 'deals/deal-details/:itemId',
    },
    {
        element: <UserDetailsPage/>,
        path: 'users/user-detail',
    },
    {
        element: <StoreItem itemId={""}/>,
        path: 'Yulii-store/:itemId',
    },
    {
        element: <StoreItem itemId={""}/>,
        path: 'Yulii-store/item-details',
    },
    {
        element: <AddStoreItemForm/>,
        path: 'Yulii-store/add',
    },
    {
        element: <CreatePromotion/>,
        path: 'deals/create',
    },
    
]

export default dashboardRoute;