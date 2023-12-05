import { LazyLoadImage } from 'react-lazy-load-image-component';
import YuliLogo from "../../assets/yulilogo.svg"
export const Logo = () => {
    return (
        <LazyLoadImage
        src={YuliLogo}
        width={116}
        height={43}
        alt="logo"
      />
    )
}