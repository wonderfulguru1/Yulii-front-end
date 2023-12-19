// EditItemForm.tsx
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEditStoreItem } from '@/redux/storeItemSlice';

const EditStoreItemForm = ({ itemToEdit }) => {
  const [item, setItem] = useState(itemToEdit);

  const dispatch = useDispatch();

  const handleEditItem = () => {
    dispatch(addEditStoreItem({ item }));
  };

  useEffect(() => {
    setItem(itemToEdit);
  }, [itemToEdit]);

  return (
    <div>
      <h2>Edit Item</h2>
      <label>Name:</label>
      <input
        type="text"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
      />
      {/* Add other input fields for the item properties */}
      <button onClick={handleEditItem}>Edit Item</button>
    </div>
  );
};

export default EditStoreItemForm;