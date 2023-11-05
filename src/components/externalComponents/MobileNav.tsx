import { NavLinks } from "../../constants/index";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from 'react-router-dom';

const MobileNav = () => {
   
    return (
        <div className='bg-[#FFF8EE]  w-full h-full'>
             <Link to="/">
          <LazyLoadImage
            src="/plenti_logo_dark.svg"
            width={150}
            height={103}
            alt="logo"
            className='p-4'
          />
        </Link>
            <ul className='h-full flex flex-col justify-center
    items-center gap-y-8'>
                {NavLinks.map((item) => {
                  
                    return <li key={item.text}>
                        <a className="link text-black font-bold text-2xl" href={item.href}>{item.text}</a>
                    </li>
                })}
            </ul></div>
    )
};
export default MobileNav;