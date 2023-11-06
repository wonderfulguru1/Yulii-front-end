import Home from "@/pages/dashboard/home"
import InvoicePage from "@/pages/dashboard/invoice"
import OrdersPage from "@/pages/dashboard/orders"
import CustomersPage from "@/pages/dashboard/sales"
import PromotionsPage from "@/pages/dashboard/promotions"
import ProductDetails from "@/pages/dashboard/promotions/[id]"
import CreatePromotion from "@/pages/dashboard/promotions/create"

const dashboardRoute = [
    {
        element: <Home/>,
        path: 'merchant',
    },
    {
        element: <InvoicePage/>,
        path: 'merchant/invoices',
    },
    {
        element: <OrdersPage/>,
        path: 'merchant/orders',
    },
    {
        element: <CustomersPage/>,
        path: 'merchant/sales',
    },
    {
        element: <PromotionsPage/>,
        path: 'merchant/promotions',
    },
    {
        element: <PromotionsPage/>,
        path: 'merchant/promotions',
    },

    {
        element: <ProductDetails/>,
        path: 'merchant/promotions/:id',
    },
    {
        element: <CreatePromotion/>,
        path: 'merchant/promotions/create',
    },
    
]

export default dashboardRoute;