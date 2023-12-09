// import { NavLinks } from "../../constants/index";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import YuliLogo from "../../assets/yulilogo.svg"
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import Button from "./Button";

interface NavigationItem {
    key: string;
    text: string;
    href: string;
}

interface NavigationProps {
    navigationItems?: NavigationItem[];
}

const dropdownItems = ['en', 'fr'];
const MobileNav: React.FC<NavigationProps> = () => {
    const { t } = useTranslation();
    const navigationItems = t('navigationItems', { returnObjects: true }) as { key: string; text: string, href: string }[];
    return (
        <div className='bg-[#FFF8EE]'>
            <div className='flex items-center justify-between px-2'>
                <Link to="/">
                    <LazyLoadImage
                        src={YuliLogo}
                        width={150}
                        height={103}
                        alt="logo"
                        className='p-4'
                    />
                </Link>
                <LanguageSwitcher lngs={dropdownItems} />
            </div>

            <ul className='h-1/2 flex flex-col justify-center
                    items-center gap-y-10'>
                {navigationItems.map((item) => (

                    <li className='' key={item.key}>
                        <Link to={t(`${item.href}`)} className={location.pathname === `${t(`${item.href}`)}` ? 'border-b-4 border-b-[#4A9BDD] py-2 ' : ''}>{t(`${item.text}`)}</Link>
                    </li>
                ))}
                <div className=" gap-6 flex flex-col">

                    <Link to="/login">
                        <Button title="Login" bgColor="bg-button1" />
                    </Link>
                    <Link to="/register">
                        <Button title="Get Started" bgColor='bg-secondary2' />
                    </Link>
                </div>
            </ul></div>
    )
};
export default MobileNav;