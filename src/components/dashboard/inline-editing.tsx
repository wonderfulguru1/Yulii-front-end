import { DealItem } from '@/interface';
import { TimerReset } from 'lucide-react';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {  useParams } from 'react-router-dom';
import { Button } from '../ui/button';

interface DealProps {
  item: DealItem[];
  onClose: () => void;
  onEditSave: (editedItem: DealItem) => void;
  isLoading: boolean;
}

const InlineEdit: React.FC<DealProps> = ({ onEditSave, isLoading, item, onClose }) => {
  const {itemId}  = useParams();
  const [editedItem, setEditedItem] = useState<DealItem | undefined>()

  useEffect(() => {
    const itemToEdit = item.find(item => item.id === itemId);
    setEditedItem(itemToEdit);
  }, [itemId, item]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(editedItem){
    const { name, value, type } = e.target;

    const parsedValue = type === 'number' ? parseFloat(value) : value;

    setEditedItem((prevData: any) => ({
      ...prevData,
      [name]: parsedValue,

    }));
    }};

    const handleSaveClick = () => {
      if(editedItem){
      onEditSave(editedItem);
      }
    };

  return (
    <div >

    <div className="flex flex-col lg:flex-row py-10 space-x-10 items-center">
      <div className='w-1/3'>
        <LazyLoadImage
          width={300}
          height={100}
          src={editedItem?.image}
          alt="image"
        />
      </div>
      <div className="flex w-full flex-col space-y-6">
        <div className="flex items-center w-1/3 bg-[#fff5f5] text-red-500  rounded-md justify-center">
          <TimerReset
            size={16}
          />
          <span className="p-2 text-xs">Deal ends in 30 days</span>
        </div>
        <div className='w-full space-y-8'>
        <div className="flex flex-col w-1/2">
        <label className=" py-2">Name:</label>
          <input type="text" name="name" value={editedItem?.name} onChange={handleInputChange} className="py-2 px-6 border rounded-md" />

        </div>
         <div>
          <label className="border-b-4 border-black py-2">Description</label>
          <textarea
              name="description"
              className='w-full h-28 border p-4'
              required
              placeholder='Description'
              value={editedItem?.description}
              onChange={handleInputChange}
          />
        </div>
        </div>
      </div>

    </div>


  <div className='flex justify-between py-4'>
  <Button
      type="button"
      variant="ghost"
      size="lg"
      className="bg-black  text-white rounded-xl hover:bg-black-100 hover:text-white"
      onClick={handleSaveClick}
      disabled={isLoading}
    >
       {isLoading ? 'Loading...' : 'Save Changes'}
    </Button>


    <Button
      type="button"
      variant="ghost"
      size="lg"
      className="bg-red-500 text-white rounded-xl hover:bg-black-100 hover:text-white"
    onClick={onClose}
    >
       Cancel
    </Button>

  </div>

</div>
);
};


export default InlineEdit;
