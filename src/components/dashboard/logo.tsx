import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo1 from "../../assets/logo.svg"

export const Logo = () => {
    return (
        <LazyLoadImage 
            height={150}
            width={120}
            alt="logo"
            src={Logo1}
        />
    )
}