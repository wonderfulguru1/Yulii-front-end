import { NavLinks } from "../../constants/index";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from 'react-router-dom';
import YuliLogo from "../../assets/yulilogo.svg"


const MobileNav = () => {
   
    return (
        <div className='bg-[#FFF8EE]'>
             <Link to="/">
          <LazyLoadImage
            src={YuliLogo}
            width={150}
            height={103}
            alt="logo"
            className='p-4'
          />
        </Link>
            <ul className='h-1/2 flex flex-col justify-center
    items-center gap-y-10'>
                {NavLinks.map((item) => {
                  
                    return <li key={item.text}>
                        <a className="link text-black font-bold text-xl" href={item.href}>{item.text}</a>
                    </li>
                })}
            </ul></div>
    )
};
export default MobileNav;