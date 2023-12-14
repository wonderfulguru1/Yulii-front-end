// AddItemForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEditStoreItem } from '@/redux/storeItemSlice';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SelectItem } from '@radix-ui/react-select';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStoreItemForm = () => {
  const [item, setItem] = useState({
    category:"",
    couponCode: "",
    description: "",
    discount: "",
    id: '', 
    image: '',
    in_stock: '',
    merchant: {
      id: '', 
      name: "",
      logo: "",
    },
    percentage_discount: '',
    price: '',
    rating: {
      count: "",
      rate: ""
    },
    title: '',
   affiliate_link: ""
  });
console.log("item", item)


const handleMerchantChange = (property: string, value: any) => {
  setItem((prevItem) => ({
    ...prevItem,
    id: prevItem.id || uuidv4(), // Set item ID if not present
    merchant: {
      ...prevItem.merchant,
      id: prevItem.merchant.id || uuidv4(), // Set merchant ID if not present
      [property]: value,
    },
  }));
};

const handleMerchantNameChange = (e: { target: { value: any; }; }) => {
  const { value } = e.target;
  handleMerchantChange('name', value);
};

const handleMerchantLogoChange = (e: { target: { value: any; }; }) => {
  const { value } = e.target;
  handleMerchantChange('logo', value);
};



  const dispatch = useDispatch();

  const handleAddItem = () => {
    // Additional validation can be added here

    dispatch(addEditStoreItem({ item }));
    toast("Created Successfully");
    // Optionally, you can reset the form or navigate to another page after adding
  };

  return (
    // <div>
    //   <h2>Add Item</h2>
    //   <label>Name:</label>
    //   <input
    //     type="text"
    //     value={item.name}
    //     onChange={(e) => setItem({ ...item, name: e.target.value })}
    //   />
    //   {/* Add other input fields for the item properties */}
    //   <button onClick={handleAddItem}>Add Item</button>
    // </div>
    <div className='container mx-auto p-6'>
       <ToastContainer />
      <div className="flex items-center pb-6">

        <Link to="/merchant/promotions">
          <h3 className="text-sm">Promotion & Offer </h3>
        </Link>
        <ChevronRight size={18} />
        <h3 className="text-sm">Create a new offer </h3>
      </div>
      <h3 className='font-semibold text-lg '>Create a new offer</h3>
      <form className='py-4'>
        <div>
          <div className='flex gap-6 '>

            <div className='flex flex-col w-1/2'>
              <Label htmlFor="email" className='py-4'>Merchant name</Label>
              <Input placeholder="e.g Shoprite"
              type="text"
              value={item.merchant.name}
              onChange={handleMerchantNameChange}
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <Label htmlFor="email" className='py-4'>Contact Number</Label>
              <Input placeholder="e.g Shoprite" />
            </div>
          </div>
          <div className='flex gap-6 py-4'>
            <div className='w-1/2'>
              <Label htmlFor="email" className='py-4'>Address</Label>
              <textarea
                id="message"
                name="message"
                className='w-full h-28 border p-4'
                required
                placeholder='E.g Shoprite'
              />
            </div>
            <div className='w-1/2'>
              <Label htmlFor="logo" className='py-4'>Upload Logo</Label>
             
              <div className="border  relative">
              <Input placeholder="e.g Shoprite" 
              type='file' 
              className="cursor-pointer relative block opacity-0  p-20 z-50"
               value={item.merchant.logo}
               onChange={handleMerchantLogoChange}
              />

                <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                
                  <p className="">Select Files</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className='font-semibold text-lg pt-8'>Create a new store item</h3>
        <div>
          <div className='flex gap-6'>
            <div className='flex flex-col w-1/2'>
              <Label htmlFor="title" className='py-4'>Store item title</Label>
              <Input placeholder="title" 
               type="text"
               value={item.title}
               onChange={(e) => setItem({ ...item, title: e.target.value })}
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <Label htmlFor="email" className='py-4'>Select Catgory</Label>
              <Select defaultValue="billing">
                <SelectTrigger id="area">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="team">Categories</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="account">Account</SelectItem>
                  <SelectItem value="deployments">Deployments</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='flex gap-6 '>
            <div className='flex flex-col w-1/3'>
              <Label htmlFor="price" className='py-4'>Price</Label>
              <Input placeholder="$105" 
               type="number"
               value={item.price}
               onChange={(e) => setItem({ ...item, price: e.target.value })}
              />
            </div>
            <div className='flex flex-col w-1/3'>
              <Label htmlFor="discount" className='py-4'>Discount</Label>
              <Input placeholder="$5" 
               type="number"
               value={item.discount}
               onChange={(e) => setItem({ ...item, discount: e.target.value })}
              />
            </div>
            <div className='flex flex-col w-1/3'>
              <Label htmlFor="coupon" className='py-4'>Coupon Code</Label>
              <Input placeholder="DFTSKHD" 
               type="string"
               value={item.couponCode}
               onChange={(e) => setItem({ ...item, couponCode: e.target.value })}
              />
            </div>
          </div>
          <div className='flex gap-6 '>
            <div className='flex flex-col w-full '>
              <Label htmlFor="affiliate_link" className='py-4 '>Affiliate link</Label>
              <Input placeholder="DFTSKHD" 
               type="string"
               value={item.affiliate_link}
               onChange={(e) => setItem({ ...item, affiliate_link: e.target.value })}
              />
            </div>
          </div>
          <div className='flex gap-6 py-4'>
            <div className='w-1/2'>
              <Label htmlFor="email" className='py-4'>Deal description</Label>
              <textarea
                id="message"
                name="message"
                className='w-full h-28 border p-4'
                required
                placeholder='Description'
                value={item.description}
                onChange={(e) => setItem({ ...item, description: e.target.value })}
              />
            </div>
            <div className='w-1/2'>
              <Label htmlFor="email" className='py-4'>Upload Photo</Label>
             
              <div className="border  relative">
              <Input placeholder="e.g Shoprite" 
              type='file' 
              className="cursor-pointer relative block opacity-0  p-20 z-50"
               value={item.image}
               onChange={(e) => setItem({ ...item, image: e.target.value })}
              />

                <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                
                  <p className="">Select Files</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' flex py-10 justify-end'>
          <Button
            type="button"
            variant="ghost"
            size="lg"
            className="bg-black  text-white rounded-3xl hover:bg-black-100 hover:text-white"
          onClick={handleAddItem}
          >
            Publish Product
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddStoreItemForm;
