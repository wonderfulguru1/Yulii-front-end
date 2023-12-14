import OfferCard from "@/components/dashboard/offer-card";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { fetchTasks } from "@/redux/tasksSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";



const PromotionsPage = () => {
  const dispatch = useDispatch();
  const tasksData = useSelector((state: RootState) => state.tasks.data);
  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        dispatch(fetchTasks());
      } catch (error) {
        console.error('Error fetching users:');
      }
    };

    fetchTaskData();
  }, [dispatch]);

  console.log("task", tasksData)
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
        <OfferCard items={tasksData} />
      </div>

    </div>
  );
}

export default PromotionsPage;