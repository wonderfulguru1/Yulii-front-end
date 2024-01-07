import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
// import Image from "next/image";
import { Button } from "../ui/button";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FileSignature } from "lucide-react";
import { ChangeEvent, useState } from "react";


  interface EditModalProps {
    item: {
        title: string
        image: string;
        id: number;
        status: string;
        price: number;
        description:string;
        discount:number;
    }
    onSave: (editedData: any) => void;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    // isModalOpen:React.Dispatch<React.SetStateAction<boolean>>;
}


const EditStoreItem: React.FC<EditModalProps> = ({ item, onSave, setIsModalOpen}) => {
    const [editedData, setEditedData] = useState({ ...item }); // Initialize with the original data

    const handleInputChange = (  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setEditedData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSave = () => {
      onSave(editedData);
    };

  
    return (
        <Dialog onOpenChange={setIsModalOpen}>
            <DialogTrigger className="bg-yellow-300 " > <FileSignature color="#fff" /></DialogTrigger>
            <DialogContent className='bg-white'>
                <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                    <DialogDescription>
                        <div>
                            <div className="flex items-center py-6">
                                <div className="w-1/2">
                                    <LazyLoadImage
                                        width={200}
                                        height={100}
                                        src={editedData.image}
                                        alt="Placeholder Image"
                                        className="object-fit rounded-lg "
                                    />
                                </div>
                                <div className="w-1/2 justify-center items-center">
                                    <div className=" flex justify-between py-2">
                                    <span className="font-semibold">Title:</span>
                                    <input type="text" name="title" value={editedData.title} onChange={handleInputChange} /> 
                                    </div>
                                    <div className=" flex justify-between py-2">
                                    <span className="font-semibold">Price:</span>
                                    <input type="number" name="price" value={editedData.price} onChange={handleInputChange} /> 
                                       
                                    </div>
                                    <div className=" flex justify-between py-2">
                                    <span className="font-semibold">Price:</span>
                                    <input type="number" name="price" value={editedData.price} onChange={handleInputChange} /> 
                                       
                                    </div>
                                    <div className=" flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Order Fulfilment:</p>
                                        <p className="rounded-lg text-[10px] font-semibold flex items-center text-blue-500 px-2 bg-blue-100">Delivery</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-4">
                                <div className="pt-8">
                                    <div className="flex flex-col justify-between py-2">
                                    <span className="font-semibold">Description</span>
                                   
                                    <textarea
                                  
                                    name="description"
                                    className='w-full h-28 border p-4'
                                    required
                                    placeholder='Description'
                                    value={editedData.description}
                                    onChange={handleInputChange}
                                  />
                                                    </div>
                                    {/* <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Phone Number:</p>
                                        <span className="font-semibold">080665544236</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Amount:</p>
                                        <span className="font-semibold">N2,500</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Product name:</p>
                                        <span className="font-semibold text-[12px]">
                                            Buy 2 cups of ice cream for N3000
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Address:</p>
                                        <span className="font-semibold">100B Kanyinsola Balogun Street Festac</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Offer type:</p>
                                        <p className="rounded-lg text-[10px] font-semibold flex items-center text-purple-500 px-2 bg-purple-100">Airtime</p>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Order ID:</p>
                                        <span className="font-semibold">PA6788</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button
                                type="button"
                                variant="ghost"
                                size="lg"
                                className="bg-black w-1/2 text-white  rounded-3xl hover:bg-black-100 hover:text-white"
                                onClick={handleSave}
                            >
                                Update
                            </Button>
                        </div>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}

export default EditStoreItem;