import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from "react-router-dom";
import YuliLogo from "../../assets/yulilogo.svg"
import { footerLinks } from "../../constants/index";

type ColumnProps = {
    title: string;
    links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column ">
        <h4 className="font-semibold text-xl">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal text-lg">
            {links.map((link) => <Link to="/" key={link}>{link}</Link>)}
        </ul>
    </div>
);

const Footer = () => (
    <>
    <section className="md:w-full footer mt-10 bg-secondary">
        <div className="md:flex px-4 md:px-0  flex-row gap-12  container mx-auto py-28 grid grid-cols-2">
   
            
            <div className="flex items-start flex-col ">
                <LazyLoadImage src={YuliLogo} width={116} height={38} alt="logo" />

                <p className="text-start text-md font-normal mt-5 w-1/2">
                Have fun organizing daily activities with your loved ones
                </p>
            </div>
     
                <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>

                    <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                
                <div>
                <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                </div>
       
        </div>

       
    </section>
    <div className="flex justify-items-center footer_copyright py-6 bg-[#555555]">
           
         
           <p  className="text-white text-center container mx-auto">@ 2023 Flexibble. All rights reserved</p>
              
    
       </div>
    </>
);

export default Footer;