import DealsPage from "../../pages/external/deals";
import HowItWorks from "../../pages/external/how-it-works";
import Merchants from "../../pages/external/merchants";
import Contact from "../../pages/external/contact";
import HomePage from "../../pages/external/home";
import Login from "../../pages/external/login";
import Register from "../../pages/external/register";

const externalRoute = [
    {
        element: <HomePage/>,
        path: '',
    },
    {
        element: <DealsPage options={[]} onSelect={function (): void {
            throw new Error("Function not implemented.");
        } }/>,
        path: 'deals',
    },
    {
        element: <HowItWorks/>,
        path: 'how-it-works',
    },
    {
        element: <Merchants/>,
        path: 'merchants',
    },
    {
        element: <Contact/>,
        path: 'contact',
    },
    {
        element: <Login/>,
        path: 'login',
    },
    {
        element: <Register/>,
        path: 'register',
    },
]

export default externalRoute;