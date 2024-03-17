import { Button } from "@/components/ui/button";
import { Link, useLocation} from "react-router-dom";
import { ArrowLeftSquare, ChevronRight } from "lucide-react"
import { fetchStoreItemById } from "@/redux/storeItemSlice";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import React from "react";
import LoadingFallback from "@/components/dashboard/loadingFallback";
import ItemDetails from "@/components/dashboard/item-details";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import StoreItemDetails from "@/components/dashboard/store-item-details";



const StoreItem: React.FC<{ itemId: string }> = ({ itemId }) => {
    // const storeItemId  = useParams<{ storeItemId: string }>();

    const dispatch = useAppDispatch();
    const { status } = useAppSelector((state: RootState) => state.storeItems);
    const location = useLocation()
    const data = location?.state?.data
    useEffect(() => {
        dispatch(fetchStoreItemById(itemId));
    }, [dispatch, itemId]);


    return (
        <div className="p-6 h-full">
            <div className="flex justify-between py-2">
                <div className="flex items-center">

                <Link to="/yulli-store">
                <div className="flex items-center gap-2 border w-1/12 rounded-md">
                    <ArrowLeftSquare />
                    <h3 className="text-sm font-semibold">Back </h3>
                </div>
            </Link>
                    <ChevronRight size={18} />
                    <h3 className="text-sm">Item description </h3>
                </div>


                <Link to="/Yulii-store/add">
                    <Button
                        type="button"
                        variant="ghost"
                        size="lg"
                        className="bg-black  text-white rounded-xl hover:bg-black-100 hover:text-white"

                    >
                        Add a new item
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
           
            <React.Suspense fallback={<LoadingFallback />}>
                {status === 'loading' ? (
                    <LoadingFallback />
                ) : (
                    <StoreItemDetails item={data}/>
                )}
            </React.Suspense>
         
        </div>
    );
}

export default StoreItem;