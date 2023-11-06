import { Button } from "@/components/ui/button";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TimerReset, ChevronRight } from "lucide-react"
import StatWidget from "@/components/dashboard/stat-widget";
import { singleOverviewCardItems } from "../../../../constants"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Link} from "react-router-dom";
import ProductDetailsImg from "../../../../assets/productDetail.png"




const ProductDetails = () => {
    return (
        <div className="p-6 h-full">
            <div className="flex justify-between py-2">
                <div className="flex items-center">

                    <Link to="/merchant/promotions">
                        <h3 className="text-sm">Promotion & Offer </h3>
                    </Link>
                    <ChevronRight size={18} />
                    <h3 className="text-sm">Promotion description </h3>
                </div>


                <Link to="/merchant/promotions/create">
                    <Button
                        type="button"
                        variant="ghost"
                        size="lg"
                        className="bg-black  text-white rounded-xl hover:bg-black-100 hover:text-white"

                    >
                        Add a new offer
                    </Button>
                </Link>
            </div>
            <div className="flex space-x-10">
                {singleOverviewCardItems.map((item, index) => (
                    <StatWidget
                        key={index}
                        icon={item.icon}
                        icon2={item.icon2}
                        text={item.text}
                        color={item.color}
                        percentage={item.percentage}
                        amount={item.amount}
                        color2={item.color2}
                        iconBGColor={item.iconBGColor}
                        iconColor={item.iconColor}

                    />
                ))}
            </div>
            <div className="flex flex-col lg:flex-row py-10 space-x-10 items-center">
                <div>
                    <LazyLoadImage
                        width={300}
                        height={100}
                        src={ProductDetailsImg}
                        alt="image"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center bg-[#fff5f5] text-red-500 w-1/4 rounded-md justify-center">
                        <TimerReset
                            size={16}
                        />
                        <span className="p-2 text-xs">Deal ends in 30 days</span>
                    </div>
                    <div>
                        <h3 className="font-semibold py-3">Buy 2 cups of ice cream for N3000 and earn up to N1000 cashback and other free goodies</h3>
                        <p className="">Total offer view: <span className="font-semibold">500</span></p>
                        <p className="py-3">Total offer sales: <span className="font-semibold">N200,000</span></p>
                    </div>
                </div>
                <div className="">
                    <span className="text-green-500">Approved</span>
                </div>
            </div>

            <div className="flex w-full">
                <Tabs defaultValue="account" className="w-full">

                    <TabsList className="w-full shadow-md">
                        <TabsTrigger value="account" className="w-1/2 font-semibold ">
                            <span className="border-b-4 border-black py-2">Offer Description</span></TabsTrigger>
                        <TabsTrigger value="password" className="w-1/2 font-semibold">Terms and Condition</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <h3 className="pt-8 font-semibold">Buy 2 cups of ice cream for ₦3000 and earn up to ₦300 airtime and other free goodies </h3>
                        <ul className="py-4">
                            <li>1. This offer is valid at participating Cold Stone Creamery locations only.</li>
                            <li>2. Offer is subject to availability and may vary by location.</li>
                            <li>3. Offer valid for in-store & online purchases </li>
                            <li>4. Offer cannot be combined with any other promotions, discounts, or offers.</li>
                            <li>5. The lower-priced ice cream creation will be discounted.</li>
                            <li>6. Offer excludes waffle products, ice cream cakes, and other non-ice cream menu items.</li>
                        </ul>
                    </TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>

                {/* <div className="flex text-center items-center w-1/2">
                    <p>kjhkjehjk</p>
                </div>
                <div className="w-1/2 items-center">Terms & Conditions</div> */}

            </div>
        </div>
    );
}

export default ProductDetails;