import Navbar from "@/components/externalComponents/Navbar";
import { useOutlet } from 'react-router-dom';

const LoginLayout = () => {
    const outlet = useOutlet();
    return ( 
        <div>
            <Navbar/>
                <main>
                    {outlet}
                </main>
       
        </div>
     );
}
 
export default LoginLayout;