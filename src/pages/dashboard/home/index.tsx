import StatWidget from "@/components/dashboard/stat-widget";
import { fetchUsers } from "@/redux/usersSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { Users, BarChart2, ArrowUp, ArrowDown, Wallet, ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Chart from "@/components/dashboard/chart";
import ReusableTable from "@/components/dashboard/customized-table";

const headers = [
  { label: 'Products', field: 'product_name', className: 'flex flex-col' },
  { label: 'Order ID', field: 'order_id', className: '' },
  { label: 'Number of views', field: 'no_of_views', className: 'px-6 py-4' },
  { label: 'Status', field: 'status', className: 'px-6 py-4' },
  { label: 'Amount', field: 'amount', className: 'px-6 py-4' }, // Empty header for actions
  // { label: 'Action', field: '', className: 'px-6 py-4' }, 
];

// Example data
const data = [
  { product_name: 'Buy 2 get 1 free', order_id: '#6758', no_of_views: '6', status: ['Design', 'Product'], amount: 5000, category: 'Fashion' },
  // ... other data entries
];


const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const usersData = useAppSelector((state: RootState) => state.users.data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchUsers());
      } catch (error) {
        console.error('Error fetching users:');
      }
    };

    fetchData();
  }, [dispatch]);

  const unverifiedUsers = usersData.filter((user) => user.isEmailVerified === false);

  return (
    <div className="p-6 flex flex-col ">
      <h2 className="pb-6 font-bold text-xl">Pro User Dashboard</h2>
      <div className="flex lg:flex-row flex-col lg:space-x-10 lg:space-y-0 space-y-10">

        <StatWidget
          icon={Users}
          icon2={ArrowDown}
          text={"Total Followers"}
          color={`bg-[#fef9ff]`}
          percentage={"20"}
          amount={usersData.length}
          // color2={item.color2}
          iconBGColor={`bg-[#fef9ff]`}
          iconColor={`text-[#5f2d41]`}

        />
        <StatWidget
          // key={index}
          icon={BarChart2}
          icon2={ArrowUp}
          text={"Total Store Views"}
          color={`bg-green-100`}
          percentage={"20"}
          amount={0}
          color2={`text-green-800`}
          iconBGColor={`bg-[#fdf8fe]`}
          iconColor={`text-purple-800`}

        />
        <StatWidget
          // key={index}
          icon={ShoppingCart}
          icon2={ArrowUp}
          text={"Total Products on App"}
          color={`bg-green-100`}
          percentage={"720"}
          amount={unverifiedUsers.length}
          color2={`text-green-800`}
          iconBGColor={`bg-[#f9f8fe]`}
          iconColor={`text-[#3642b4]`}

        />

        <StatWidget
          // key={index}
          icon={Wallet}
          icon2={ArrowDown}
          text={"Token Balance"}
          color={`bg-[#fef9ff]`}
          percentage={"400"}
          amount={unverifiedUsers.length}
          // color2={`text-white`}
          // color3={`bg-red-500`}
          iconBGColor={`bg-[#fef9ff]`}
          iconColor={`text-[#3642b4]`}
        />
      </div>
      {/* <div className="border shadow-lg rounded-md my-10 py-2 bg-white">
        <h3 className="p-6 text-base font-semibold">Sales statistics</h3>
        <StatOverview />
      </div> */}
      <div className="py-10">
        <h3 className="p-6 text-base font-semibold">Sales statistics</h3>
        <Chart />
      </div>
      <div>
        <div className="flex justify-between">
          <h5 className="text-md font-semibold text-gray-400 dark:text-white ">
            Recent signups
          </h5>
          {/* <Link to={`/yulli-store/`} > */}
          <button
            className="linear rounded-[20px] text-gray-400 bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-black hover:text-white active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
          >
            See all
          </button>
          {/* </Link> */}
        </div>
        <ReusableTable data={data} headers={headers} />
      </div>


      {/* <div>
        <div
          className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white p-4  shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none"
        >
          <h5 className="text-md font-semibold text-gray-400 dark:text-white ">
            Recent signups
          </h5>
          <button
            className="linear rounded-[20px] text-gray-400 bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-black hover:text-white active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
          >
            See all
          </button>
        </div>
        <Table data={usersData} headers={tableHeader} extraTableRow={true} color={""} showAdditionalContent={false} />
      </div> */}

    </div>
  )
}

export default Home