import DealsPage from "../../pages/external/socials";
import HowItWorks from "../../pages/external/how-it-works";
import Merchants from "../../pages/external/prousers";
import Contact from "../../pages/external/contact";
import HomePage from "../../pages/external/home";
import TermsAndCondition from "@/pages/external/terms-and-condition";
import PrivacyPolicy from "@/pages/external/privacy-policy";


const externalRoute = [
    {
        element: <HomePage/>,
        path: '/',
    },
    {
        element: <DealsPage />,
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
    {
        element: <TermsAndCondition/>,
        path: 'terms-and-condition',
    },
    {
        element: <PrivacyPolicy/>,
        path: 'privacy-policy',
    },
]

export default externalRoute;