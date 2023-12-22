import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"
import {Link, useLocation} from "react-router-dom";
import ItemDetails from "@/components/dashboard/item-details";


const ProductDetails = () => {
     const location = useLocation()
    const data = location?.state?.data
    console.log("nnnn", data)

    
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
            <ItemDetails item={data}/>
        </div>
    );
}

export default ProductDetails;