// import StatWidget from "@/components/dashboard/stat-widget";

import { Button } from "@/components/ui/button";
import { ExternalLink} from "lucide-react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchStoreItem } from "@/redux/storeItemSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import YulliCard from "@/components/dashboard/yuli-card";

import { Link } from "react-router-dom";
import { fetchMerchants } from "@/redux/merchantsSlice";



const YulliStorePage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchStoreItem());
        dispatch(fetchMerchants());
        
      } catch (error) {
        console.error('Error fetching users:');
      }
    };

    fetchData();
  }, [dispatch]);
  const storesData = useSelector((state: RootState) => state.storeItems.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       dispatch(fetchMerchants());
  //     } catch (error) {
  //       console.error('Error fetching users:');
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

  
  const categories = Array.from(new Set(storesData.map((item) => item.category)));

  const handleFilterChange = (event: { target: { value: any; }; }) => {
    const newFilter = event.target.value;
    setSelectedFilter(newFilter);
  };

  const handleSearchChange = (event: { target: { value: any; }; }) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const filteredItems = storesData
    .filter((item) => selectedFilter === 'all' || item.category === selectedFilter)
    .filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  console.log("gggggg", storesData)
  return (
    <div className="p-6">

      <div className=" flex justify-between items-center">

        <h3 className="font-semibold">Yulli Store</h3>
        <Link to={`/yulli-store/add`} >
          <Button
            type="button"
            variant="ghost"
            size="lg"
            className="bg-black px-3 text-white rounded-xl hover:bg-black-100 hover:text-white"
          >
            Add a new store item
            <ExternalLink size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
     
      {/* <Button title="Join for free" /> */}
      <div className="flex justify-between pt-16">
      <div className="flex rounded-full border px-2 w-full max-w-[600px]">
        <button className="self-center flex p-1 cursor-pointer "> <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

          <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z" stroke="#a1a9b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z" stroke="#a1a9b4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z" fill="#a1a9b4" /> </g>

        </svg></button>

        <input
          type="text"
          id="searchInput"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full  flex pl-2 text-[#cccccc] outline-0"
        />
        <button type="submit" className="relative p-2 rounded-full">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>

          </svg>
        </button>
      </div>
        <div className="grid gap-2 border p-2 rounded-full">
          <select id="filterDropdown" className="cursor-pointer" onChange={handleFilterChange} value={selectedFilter}>
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category} className="border-none cursor-pointer">
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="py-6">
        <YulliCard items={filteredItems} />
      </div>

    </div>
  );
}

export default YulliStorePage;