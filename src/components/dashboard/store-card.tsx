import { Eye, FileSignature, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import {Item} from "@/constants/interface";


interface ChildProps {
    item: Item;
    onItemClick: () => void;
    onDeleteClick: () => void;
}

const StoreCard: React.FC<ChildProps> = ({ item, onItemClick, onDeleteClick }) => {

    return (
        <>

            <div className="max-w-sm bg-white px-4 pt-6 pb-2 rounded-xl shadow-lg ">
                <div className="block relative h-48 rounded">
                    <img alt="ecommerce" className="object-cover rounded-xl object-center w-full h-full block" src={item.image} />
                    <div className="absolute flex item-center justify-center gap-1  top-0 right-0 bg-yellow-300  py-1 px-1 rounded-tr-lg rounded-bl-lg">
                        <Eye size={14} />
                        <p className="text-xs ">{item.storeViewCount}</p>

                    </div>
                    <div className="flex right-0 flex-col absolute   top-28 ">
                        <div className="bg-yellow-300 p-1 rounded-tl-lg cursor-pointer">
                            <FileSignature color="#fff" onClick={onItemClick} />
                        </div>
                        <div className="bg-red-500 p-1 rounded-bl-lg cursor-pointer " onClick={onDeleteClick}>
                            <Trash2 />
                        </div>
                    </div>
                </div>
                <Link to={`/yulli-store/item-detail`} state={{ data: item }}>
                    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{item.title}</h1>
                    <div className="my-4">
                        <div className="flex space-x-1 items-center gap-6">
                            <p className="py-2 text-xl font-bold">${item.price}</p>
                            <p className="py-2 text-xl line-through">${item.discount}</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    );
}

export default StoreCard;