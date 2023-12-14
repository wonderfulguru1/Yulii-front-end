import Home from "@/pages/dashboard/home"

import OrdersPage from "@/pages/dashboard/orders"
import CustomersPage from "@/pages/dashboard/sales"
import PromotionsPage from "@/pages/dashboard/promotions"
import ProductDetails from "@/pages/dashboard/promotions/[id]"
import CreatePromotion from "@/pages/dashboard/promotions/create"
import UserDetailsPage from "@/pages/dashboard/userDetails"
import YulliStorePage from "@/pages/dashboard/yulliStore"
import StoreItem from "@/pages/dashboard/yulliStore/[id]"
import AddStoreItemForm from "@/pages/dashboard/yulliStore/addStoreItem"

const dashboardRoute = [
    {
        element: <Home/>,
        path: 'overview',
    },
    {
        element: <YulliStorePage/>,
        path: 'yulli-store',
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
        element: <UserDetailsPage/>,
        path: 'settings',
    },

    {
        element: <ProductDetails/>,
        path: 'deals/:taskId',
    },
    {
        element: <UserDetailsPage/>,
        path: 'users/:userId',
    },
    {
        element: <StoreItem/>,
        path: 'yulli-store/:storeItemId',
    },
    {
        element: <AddStoreItemForm/>,
        path: 'yulli-store/add',
    },
    {
        element: <CreatePromotion/>,
        path: 'deals/create',
    },
    
]

export default dashboardRoute;