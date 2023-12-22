import OfferCard from "@/components/dashboard/offer-card";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { fetchTasks } from "@/redux/tasksSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const PromotionsPage = () => {
  const dispatch = useAppDispatch();
  const tasksData = useAppSelector((state: RootState) => state.tasks.data);
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

  const [items] = useState(tasksData);
  const [filteredItems, setFilteredItems] = useState(items);
  const [filterStatus, setFilterStatus] = useState('');

  const categories = [...new Set(tasksData.map(item => item.status))];
  const handleFilterByStatus = (status: string) => {
    const filteredData = status === 'all' ? tasksData : tasksData.filter(item => item.status === status);
    setFilteredItems(filteredData);
    setFilterStatus(status);
  };
  console.log("task", filterStatus)
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

      <div className="gap-2  flex">
        <button onClick={() => handleFilterByStatus('all')} className="bg-[#f0f0f0] rounded-xl text-sm font-semibold text-black p-2">Show All</button>
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => handleFilterByStatus(category)}
            className={category ? 'bg-[#f0f0f0] rounded-xl text-black ' : 'text-[#909091] rounded-xl  hover:text-white'}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="">
        <OfferCard items={filteredItems} />
      </div>

    </div>
  );
}

export default PromotionsPage;