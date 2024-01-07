import { Eye, FileSignature, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import EditStoreItem from "./edit-store-item";



interface Props {
    title: string
    image: string;
    id: number;
    status: string;
    price: number;
    description:string;
    discount:number;
    onDelete: (id:number) => void;
    onSave: (editedData: any) => void;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StoreCard: React.FC<Props> = ({ title, image, id, status, price, description, discount, onDelete, onSave,isModalOpen, setIsModalOpen }) => {
const item = {title, id, image, price, description, discount, status}
const handleDeleteClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevents the click event from propagating to the parent div
    onDelete(id);
  };

  const handleEditClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevents the click event from propagating to the parent div
    setIsModalOpen(true);
  };
    return (
        <>
        {/* <div className="md:px-4 md:grid md:grid-cols-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 space-y-4 md:space-y-0"> */}
             

                <div className="max-w-sm bg-white px-4 pt-6 pb-2 rounded-xl shadow-lg ">
                    <div className="block relative h-48 rounded">
                    <img alt="ecommerce" className="object-cover rounded-xl object-center w-full h-full block" src={image} />
                    <div className="absolute flex item-center justify-center gap-1  top-0 right-0 bg-yellow-300  py-1 px-1 rounded-tr-lg rounded-bl-lg">
                    <Eye size={14}/>
                       <p className="text-xs ">60</p>
                        
                        </div>
                        <div className="flex right-0 flex-col absolute   top-28 ">
                       <div className="bg-yellow-300 p-1 rounded-tl-lg cursor-pointer" onClick={handleEditClick}>
                       <FileSignature color="#fff" />
                        {isModalOpen &&
                        <EditStoreItem item={item} onSave={onSave} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
                         }
                      
                       </div>
                       {/* {isModalOpen &&
                        <EditStoreItem item={item} onSave={onSave} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
                         } */}
                       
                        <div className="bg-red-500 p-1 rounded-bl-lg cursor-pointer " onClick={handleDeleteClick}> 
                        <Trash2 />
                        </div>
                        {/* <p className="absolute  bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">meeeee</p>
                        <p className="absolute  bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">meeeee</p> */}
                        </div>
                    </div>
                    <Link to={`/yulli-store/item-detail`} state={{data:item}}>
                    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{title}</h1>
                    <div className="my-4">
                        <div className="flex space-x-1 items-center gap-6">
                            <p className="py-2 text-xl font-bold">${price}</p>
                            <p className="py-2 text-xl line-through">${discount}</p>
                        </div>
                        <div className="flex space-x-1 items-center">
                            <p>{description}</p>
                        </div>
                      
                        {/* <button className="mt-4 text-xl w-full text-white bg-black py-2 rounded-xl shadow-lg">View Item</button> */}
                       
                    </div>
                    </Link>
                </div>
               
        {/* </div> */}
        </>
    );
}

export default StoreCard;