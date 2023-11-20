import DealsPage from "../../pages/external/deals";
import HowItWorks from "../../pages/external/how-it-works";
import Merchants from "../../pages/external/merchants";
import Contact from "../../pages/external/contact";
import HomePage from "../../pages/external/home";


const externalRoute = [
    {
        element: <HomePage/>,
        path: '/',
    },
    {
        element: <DealsPage options={[]} onSelect={function (): void {
            throw new Error("Function not implemented.");
        } }/>,
        path: 'socials',
    },
    {
        element: <HowItWorks/>,
        path: 'how-it-works',
    },
    {
        element: <Merchants/>,
        path: 'pro-users',
    },
    {
        element: <Contact/>,
        path: 'contact',
    },
]

export default externalRoute;