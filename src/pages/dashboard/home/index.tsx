import Table from "@/components/dashboard/table";
import { StatOverview } from "@/components/dashboard/stat-overview";
import StatWidget from "@/components/dashboard/stat-widget";
import { fetchUsers } from "@/redux/usersSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { User2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


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
 
  const verifiedUsers = usersData.filter((user) => user.isEmailVerified === true);
  const unverifiedUsers = usersData.filter((user) => user.isEmailVerified === false);
  const tableHeader = ["First Name", "Last Name", "Email", "Gender", "Phone Number"]
  return (
    <div className="p-6 flex flex-col ">
      <h2 className="pb-6 font-bold text-xl">Store Overview</h2>
      <div className="flex lg:flex-row flex-col lg:space-x-10 lg:space-y-0 space-y-10">
 
          <StatWidget 
          // key={index}
          icon={User2}
          icon2={User2}
          text={"Total Users"}
          color={`red-500`}
          // percentage={item.percentage}
          amount={usersData.length}
          // color2={item.color2}
          iconBGColor={`red-500`}
          iconColor={`white`}

          />
          <StatWidget 
          // key={index}
          icon={User2}
          icon2={User2}
          text={"Total Verified Users"}
          // color={item.color}
          // percentage={item.percentage}
          amount={verifiedUsers.length}
          // color2={item.color2}
          iconBGColor={`-100`}
          iconColor={`blue-500`}

          />
          <StatWidget 
          // key={index}
          icon={User2}
          icon2={User2}
          text={"Total Unverified Users"}
          // color={item.color}
          // percentage={item.percentage}
          amount={unverifiedUsers.length}
          // color2={item.color2}
          iconBGColor={`blue-100`}
          iconColor={`blue-500`}

          />
        
        
      </div>
      <div className="border shadow-lg rounded-md my-10 py-2 bg-white">
        <h3 className="p-6 text-base font-semibold">Sales statistics</h3>
        <StatOverview />
      </div>
      <div>
        <div
          className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white p-4  shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none"
        >
          <h5 className="text-md font-semibold text-navy-700 dark:text-white">
            Users
          </h5>
          <button
            className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
          >
            See all
          </button>
        </div>
        <Table data={usersData} headers={tableHeader} extraTableRow={true} color={""} showAdditionalContent={false}/>
      </div>

    </div>
  )
}

export default Home