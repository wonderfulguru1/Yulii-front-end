import Banner from "@/components/externalComponents/Banner";
import Footer from "@/components/externalComponents/Footer";
import Navbar from "@/components/externalComponents/Navbar";
import { useEffect } from "react";
import { useLocation, useOutlet } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
const ExternalLayout = () => {
    const outlet = useOutlet();
    return ( 
        <div>  
             <ScrollToTop />        
            <Navbar/>
                <main>
                    {outlet}
                </main>
                <Banner/>
            <Footer/>
        </div>
     );
}
 
export default ExternalLayout;