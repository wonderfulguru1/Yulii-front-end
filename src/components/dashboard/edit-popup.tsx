import {Item} from '@/interface';
import React, { ChangeEvent, useState } from 'react';
import { Button } from '../ui/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface PopupProps {
    item: Item;
    onClose: () => void;
    onEditSave: (editedData: Item) => void;
}

const PopupComponent: React.FC<PopupProps> = ({ item, onClose, onEditSave }) => {
    const [editedData, setEditedData] = useState({ ...item }); // Initialize with the original data

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        const parsedValue = type === 'number' ? parseFloat(value) : value;
        setEditedData((prevData: any) => ({
            ...prevData,
            [name]: parsedValue,
        }));
    };

    const handleSaveClick = () => {
        onEditSave(editedData);
      };

    return (
        <div className='fixed inset-0 z-50 bg-background/80 backdrop-blur-sm'>
            <div style={popupStyles} className='bg-gray-700'>
                <div>
                    <div onClick={onClose} className='cursor-pointer'>
                    <span className='float-right text-xl -mt-4 font-bold cursor-pointer'>x</span>
                    </div>
                    <div className="flex py-6 gap-6">
                        <LazyLoadImage
                            width={250}
                            height={100}
                            src={editedData.image}
                            alt="Placeholder Image"
                            className="object-fit rounded-lg "
                        />
                        <div className="w-full justify-center items-center">
                            <div className=" flex items-center py-2 gap-4">
                                <span className="font-semibold">Title:</span>
                                <input type="text" name="title" value={editedData.title} onChange={handleInputChange} className="w-full border rounded-md p-2" />
                            </div>
                            <div className=" flex items-center py-2 gap-4">
                                <span className="font-semibold">Price:</span>
                                <input type="number" name="price" value={editedData?.price} onChange={handleInputChange} className=" border rounded-md p-2" />
                            </div>
                            <div className=" flex items-center py-2 gap-4">
                                <span className="font-semibold">Discount:</span>
                                <input type="number" name="discount" value={editedData?.discount} onChange={handleInputChange} className=" border rounded-md p-2" />
                            </div>
                            <div className=" flex items-center py-2 gap-4">
                                <span className="font-semibold">Rating</span>
                                <input type="number" name="price" value={editedData?.rating?.count} onChange={handleInputChange} className=" border rounded-md p-2" />
                            </div>
                            <div className=" flex items-center py-2 gap-4">
                                <span className="font-semibold">In stock:</span>
                                <input type="number" name="instock" value={editedData?.in_stock} onChange={handleInputChange} className=" border rounded-md p-2" />
                            </div>
                            <div className=" flex items-center py-2 gap-4">
                                <span className="font-semibold">Affiliate Link:</span>
                                <input type="text" name="instock" value={editedData?.affiliate_link} onChange={(e: { target: { value: any; }; }) => setEditedData({ ...editedData, affiliate_link: e.target.value })} className=" border rounded-md p-2" />

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
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Button
                        type="button"
                        variant="ghost"
                        size="lg"
                        className="bg-black w-1/2 text-white  rounded-3xl hover:bg-black-100 hover:text-white"
                    onClick={handleSaveClick}
                    >
                        Update
                    </Button>
                </div>
            </div>
        </div>
    );
};

const popupStyles: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    border: '1px solid #ccc',
    width: '800px'
};

export default PopupComponent;