import { Button } from "@/components/ui/button";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TimerReset, ChevronRight } from "lucide-react"
// import StatWidget from "@/components/dashboard/stat-widget";
// import { singleOverviewCardItems } from "../../../../constants"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Link, useParams} from "react-router-dom";
import ProductDetailsImg from "../../../../assets/productDetail.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskById} from "@/redux/tasksSlice";
import { useEffect } from "react";
import { RootState } from "@/redux/store";



const ProductDetails = () => {
    const taskId  = useParams<{ itemId: string }>();
    const dispatch = useDispatch();
    const selectedTask = useSelector((state: RootState) => state.tasks.selectedTask);
    // const status = useSelector((state: RootState) => state.tasks.status);
    // const error = useSelector((state: RootState) => state.tasks.error);
  
    useEffect(() => {
      dispatch(fetchTaskById(taskId));
    }, [dispatch, taskId]);
    console.log("hhhh", selectedTask)
    
    return (
        <div className="p-6 h-full">
            <div className="flex justify-between py-2">
                <div className="flex items-center">

                    <Link to="/deals">
                        <h3 className="text-sm">Promotion & Offer </h3>
                    </Link>
                    <ChevronRight size={18} />
                    <h3 className="text-sm">Promotion description </h3>
                </div>


                <Link to="/deals/create">
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
                {/* {singleOverviewCardItems.map((item, index) => (
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
                ))} */}
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
                    <div className="flex items-center bg-[#fff5f5] text-red-500  rounded-md justify-center">
                        <TimerReset
                            size={16}
                        />
                        <span className="p-2 text-xs">Deal ends in 30 days</span>
                    </div>
                    <div>
                        <h3 className="font-semibold py-3">{selectedTask?.name}</h3>
                        <p className="">Total offer view: <span className="font-semibold">500</span></p>
                        <p className="py-3">Total offer sales: <span className="font-semibold">N200,000</span></p>
                    </div>
                </div>
                <div className="">
                    <span className="text-green-500">{selectedTask?.status}</span>
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
                        {/* <h3 className="pt-8 font-semibold">Buy 2 cups of ice cream for ₦3000 and earn up to ₦300 airtime and other free goodies </h3> */}
                        <p className="py-4">
                            {selectedTask?.description}
                            
                        </p>
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