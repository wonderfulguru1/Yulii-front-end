"use client"

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {Link} from "react-router-dom";
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ProductDetailsImg from "../../assets/productDetail.png"

export type Item = {
  image: string;
  id: number;
  name: string;
  Status: string;
  price: string;
  status: string
};

interface Props {
  items: Item[];
}

const OfferCard: React.FC<Props> = ({ items }) => {
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const [status, setStatus] = useState<string[]>(['All']);
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(items.map(item => item.status)));
    setStatus(['All', ...uniqueCategories]); // Include an "All" option

    setFilteredData(items);
  }, [items]);

  const handleStatusChange = (selectedStatus: string) => {
    if (selectedStatus === 'All') {
      setFilteredData(items); // Show all items
    } else {
      const filteredItems = items.filter(item => item.status === selectedStatus);
      setFilteredData(filteredItems);
    }

    setSelectedStatus(selectedStatus);
  };

  return (
    <>
      {status.map(item => (
        <Button
          key={item}
          onClick={() => handleStatusChange(item)}
          className={selectedStatus === item ? 'bg-[#f0f0f0] rounded-xl text-black ' : 'text-[#909091] rounded-xl  hover:text-white'}
        >
          {item}
        </Button>
      ))}
      <div className="grid py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredData.map(item => (
          <div className="bg-white my-2 rounded-xl shadow-md p-3 " key={item.id}>
            <LazyLoadImage 
            width={300}
            height={100}
            src={item?.image || ProductDetailsImg}
            alt="Placeholder Image" 
            className="w-full object-fit h-48 rounded-lg " 
            />
            <div className="flex justify-between py-4">
              <div className="p-2 text-xs text-center rounded-md text-[#bb5a80] bg-[#fff9fa]">
                Earn N1000 Cashback
              </div>
              <div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    >
                      <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[120px] bg-white p-0 ">
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#f0f0f0] text-xs">View offer</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#f0f0f0]  text-xs border-t">Pause</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#f0f0f0]  text-xs text-red-500 border-t">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="">
              <p className="text-gray-700 font-semibold text-sm">
                {item.name}
              </p>
              <p className="py-3 text-sm font-semibold">{item.price}</p>
            </div>
            <div className="flex">
              <div className={item.status === "Completed" || item.status === "Done"  ? 'bg-green-500 rounded-md p-2 flex text-xs text-center text-white' : 'p-2 flex text-xs text-center rounded-md text-[#ea1c25] bg-[#fef4f5]'}>
                {item.status}
              </div>
            </div>
            <div className="px-1 pt-3 text-sm" key={item.id}>
              <Link to={`/deals/${item.id}`} className="underline">
                View details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OfferCard;

