

import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link, useLocation} from "react-router-dom";
import { BiMenu } from "react-icons/bi"
import { MdClose } from "react-icons/md"
import MobileNav from './MobileNav';
import Button from "./Button";
import YuliLogo from "../../assets/yulilogo.svg"

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();
  return (

    <nav className="z-10  w-full  bg-white fixed px-10 md:px-0">
      <div className="flex z-10 justify-between py-4 container mx-auto items-center top-0 left-0 right-0">
        <div className="">
          <Link to="/">
            <LazyLoadImage
              src={YuliLogo}
              width={116}
              height={43}
              alt="logo"
            />
          </Link>

        </div>

        <div className="space-x-10 hidden lg:flex" >
        <ul className='flex space-x-16  text-xl'>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}></Link>
        </li>
        <li>
          <Link to="/pro-users" className={location.pathname === '/pro-users' ? 'border-b-4 border-b-[#4A9BDD] py-2 ' : ''}>Pro-Users</Link>
        </li>
        <li>
          <Link to="/socials" className={location.pathname === '/socials' ? 'border-b-4 border-b-[#4A9BDD] py-2  ' : ''}>Socials</Link>
        </li> 
        <li>
          <Link to="/how-it-works" className={location.pathname === '/how-it-works' ? 'border-b-4 border-b-[#4A9BDD] py-2 ' : ''}>How it Works</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'border-b-4 border-b-[#4A9BDD] py-2 ' : ''}>Contact</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
          {/* {NavLinks.map((link) => (
            <Link to={link.href} key={link.text} 
            className={`text-gray-800 hover:text-gray-500 ${activeLink === link.text ? 'border-b-2 border-b-[#4A9BDD]  '
            : 'bg-white text-gray-800'} px-4 py-2 `}
            onClick={() => handleLinkClick(link.key)}
            >
              {link.text}
            </Link>
          ))} */}
        </div>

        <div className=" gap-6 hidden lg:flex">
          <Link to="/login">
            <Button title="Login" bgColor="bg-button1"  />
          </Link>
          <Link to="/register">
            <Button title="Get Started" bgColor='bg-secondary2' />
          </Link>
        </div>
        <div className='lg:hidden '>
          <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? (
              <MdClose className="text-3xl text-accent" />
            ) : (
              <BiMenu size={36} className="text-3xl text-accent" />
            )}
          </button>

          <div
            className={`${mobileNav ? "left-0" : "-left-full"
              } fixed top-0 w-[80vw] lg:hidden transition-all bottom-0 bg-[#FFF8EE] `}
          >
            <MobileNav />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
