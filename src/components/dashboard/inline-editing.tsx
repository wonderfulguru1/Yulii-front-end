import { DealItem } from '@/constants/interface';
import { TimerReset } from 'lucide-react';
import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation, useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { fetchTaskById } from '@/redux/tasksSlice';



interface DealProps {
  item: DealItem[];
  onClose: () => void;
  onEditSave: (editedItem: DealItem) => void;
  isLoading: boolean;
}



const InlineEdit: React.FC<DealProps> = ({ onEditSave, isLoading, item }) => {
  const itemId  = useParams();
  // const selectedItem = item.find((item) => item.id === (itemId));
  const [editedItem, setEditedItem] = useState<DealItem>()
  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        // Fetch additional details using itemId
        const additionalDetails = await fetchTaskById(itemId);
console.log("additionalDetails", additionalDetails)
        // Combine additional details with the existing editedItem state
        setEditedItem((prevItem) => ({ ...prevItem, ...additionalDetails }));
      } catch (error) {
        console.error('Error fetching additional item details:', error);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  // console.log("selectedItem", selectedItem)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    const parsedValue = type === 'number' ? parseFloat(value) : value;
    setEditedItem((prevData: any) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };



  const handleSaveClick = () => {
    onEditSave(editedItem);
  };


  return (
    <div >
      <div className="flex w-full" >
        <div className="flex flex-col lg:flex-row py-10 space-x-10 items-center">
          <div className=''>
            <LazyLoadImage
              width={300}
              height={100}
              src={editedItem?.image}
              alt="image"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex items-center bg-[#fff5f5] text-red-500  rounded-md justify-center">
              <TimerReset
                size={16}
              />
              <span className="p-2 text-xs">Deal ends in 30 days</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Name:</span>
              <input type="text" name="name" value={editedItem?.name} onChange={handleInputChange} className="py-2 px-6 border rounded-md" />

            </div>
            <div className="flex items-center gap-6">
              <span>Name:</span>

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
      <div className='flex justify-between'>
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
      
        >
           Cancel
        </Button>

      </div>
     
    </div>
  );
};

const popupStyles: React.CSSProperties = {

  transform: 'translate(-50%, -50%)',

};

export default InlineEdit;
