import Footer from "@/components/externalComponents/Footer";
import Navbar from "@/components/externalComponents/Navbar";
import { useOutlet } from 'react-router-dom';

const ExternalLayout = () => {
    const outlet = useOutlet();
    return ( 
        <div>
            <Navbar/>
                <main>
                    {outlet}
                </main>
            <Footer/>
        </div>
     );
}
 
export default ExternalLayout;