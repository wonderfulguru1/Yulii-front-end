import OfferCard from "@/components/dashboard/offer-card";
import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom";



const PromotionsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between py-2">
        <h3 className="font-semibold ">Promotions & Offers</h3>
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
      <div className="">
        <OfferCard />
      </div>

    </div>
  );
}

export default PromotionsPage;