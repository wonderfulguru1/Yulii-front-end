import Home from "@/pages/dashboard/home"
import InvoicePage from "@/pages/dashboard/invoice"
import OrdersPage from "@/pages/dashboard/orders"
import CustomersPage from "@/pages/dashboard/sales"
import PromotionsPage from "@/pages/dashboard/promotions"

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
    
]

export default dashboardRoute;