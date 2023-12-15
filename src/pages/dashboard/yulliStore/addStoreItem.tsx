// AddItemForm.tsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEditStoreItem, fetchStoreItem } from '@/redux/storeItemSlice';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, storage } from '@/firebase';
import { RootState } from '@/redux/store';
import { addEditMerchant, fetchMerchants } from '@/redux/merchantsSlice';
import ImageUpload from '@/components/dashboard/imageUpload';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import { fetchCategories } from '@/redux/categorySlice';

const AddStoreItemForm = () => {
  const dispatch = useDispatch();
  const merchantsData = useSelector((state: RootState) => state.merchants.data); // Replace 'yourReducer' with your actual reducer name
  const loggedInUserId = auth?.currentUser?.uid;
  const isUserInData = merchantsData.some(user => user.id === loggedInUserId);
  // const [imageUrl, setImageUrl] = useState<string>('');
  const foundUser = merchantsData.find(user => user.id === loggedInUserId);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchMerchants());
        dispatch(fetchStoreItem());
        // dispatch(fetchCategories());
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const [item, setItem] = useState({
    id: "",
    name: "",
    logo: "",
    phone: "",
    address: "",
    publish_token: "500"
  })
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [storeItem, setStoreItem] = useState({
    category: "",
    couponCode: "",
    description: "",
    discount: "",
    id: "",
    image: '',
    in_stock: '',
    percentage_discount: '',
    price: '',
    rating: {
      count: "",
      rate: ""
    },
    merchant: {
      id: foundUser?.id,
      address: foundUser?.address,
      logo: foundUser?.logo,
      name: foundUser?.name,
    },
    title: '',
    affiliate_link: ""
  });

  console.log("good", storeItem);



  const handleAddStoreItem = async () => {
    try {
      // Check if an image is selected
      if (!selectedImage) {
        toast.error('Please select an image');
        return;
      }
      const imageFile = selectedImage;
      // const imageName = "";
      const imageUrl = await uploadImageToStorage(imageFile);
      const updatedStoreItem = {
        ...storeItem,
        image: imageUrl,
      };
      dispatch(addEditStoreItem({ storeItem: updatedStoreItem }));
      toast.success('Created Successfully');
    } catch (error) {
      console.error('Error adding store item:', error);
    }
  };

  // Function to handle the selected image from ImageUpload component
  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
  };
  const categories = ["appliances", "fashion"]

  const uploadImageToStorage = async (file: File): Promise<string> => {
    try {
      const fileName = `${file.name}`;
      const storageRef = ref(storage, 'images/' + fileName + '.jpeg');
      // const storageRef = ref(storage, `images/${fileName}/.jpeg`);
      console.log("path", storageRef)
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image to storage:', error);
      throw error;
    }
  };

  const handleAddMerchant = () => {
    dispatch(addEditMerchant({ item }));
    toast("Created Successfully");
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    setStoreItem((prevStoreItem) => ({
      ...prevStoreItem,
      category: selectedValue,
    }));

    setSelectedCategory(selectedValue);
  };

  return (
    <div className='container mx-auto p-6'>
      <ToastContainer />
      <div className="flex items-center pb-6">
        <Link to="/merchant/promotions">
          <h3 className="text-sm">Promotion & Offer </h3>
        </Link>
        <ChevronRight size={18} />
        <h3 className="text-sm">Create a new offer </h3>
      </div>
      {!isUserInData ? (
        <>
          <h3 className='font-semibold text-lg '>Create a merchant</h3>
          <form className='py-4'>
            <div>
              <div className='flex gap-6 '>

                <div className='flex flex-col w-1/2'>
                  <Label htmlFor="email" className='py-4'>Merchant name</Label>
                  <Input placeholder="e.g Shoprite"
                    type="text"
                    value={item.name}
                    onChange={(e) => setItem({ ...item, name: e.target.value })} />
                </div>
                <div className='flex flex-col w-1/2'>
                  <Label htmlFor="email" className='py-4'>Contact Number</Label>
                  <Input placeholder="e.g Shoprite"
                    type="number"
                    value={item.phone}
                    onChange={(e) => setItem({ ...item, phone: e.target.value })} />
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
                    value={item.address}
                    onChange={(e) => setItem({ ...item, address: e.target.value })}
                    placeholder='E.g Shoprite' />
                </div>
                <div className='w-1/2'>
                  <Label htmlFor="logo" className='py-4'>Upload Logo</Label>

                  <div className="border  relative">
                    <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">

                      <p className="">Select Files</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </form>
          <div className=' flex py-10 justify-end'>
            <Button
              type="button"
              variant="ghost"
              size="lg"
              className="bg-black  text-white rounded-3xl hover:bg-black-100 hover:text-white"
              onClick={handleAddMerchant}
            >
              Publish Product
            </Button>
          </div>
        </>
      ) : (
        <>
          <form>
            <h3 className='font-semibold text-lg pt-8'>Create a new store item</h3>
            <div>
              <div className='flex gap-6'>
                <div className='flex flex-col w-1/2'>
                  <Label htmlFor="title" className='py-4'>Store item title</Label>
                  <Input placeholder="title"
                    type="text"
                    value={storeItem.title}
                    onChange={(e) => setStoreItem({ ...storeItem, title: e.target.value })} />
                </div>
                <div className='flex flex-col w-1/2'>
                  <Label htmlFor="email" className='py-4'>Select Catgory</Label>
                  <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='flex gap-6 '>
                <div className='flex flex-col w-1/3'>
                  <Label htmlFor="price" className='py-4'>Price</Label>
                  <Input placeholder="$105"
                    type="number"
                    value={storeItem.price}
                    onChange={(e) => setStoreItem({ ...storeItem, price: e.target.value })} />
                </div>
                <div className='flex flex-col w-1/3'>
                  <Label htmlFor="discount" className='py-4'>Discount</Label>
                  <Input placeholder="$5"
                    type="number"
                    value={storeItem.discount}
                    onChange={(e) => setStoreItem({ ...storeItem, discount: e.target.value })} />
                </div>
                <div className='flex flex-col w-1/3'>
                  <Label htmlFor="coupon" className='py-4'>Coupon Code</Label>
                  <Input placeholder="DFTSKHD"
                    type="string"
                    value={storeItem.couponCode}
                    onChange={(e) => setStoreItem({ ...storeItem, couponCode: e.target.value })} />
                </div>
              </div>
              <div className='flex gap-6 '>
                <div className='flex flex-col w-full '>
                  <Label htmlFor="affiliate_link" className='py-4 '>Affiliate link</Label>
                  <Input placeholder="DFTSKHD"
                    type="string"
                    value={storeItem.affiliate_link}
                    onChange={(e) => setStoreItem({ ...storeItem, affiliate_link: e.target.value })} />
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
                    value={storeItem.description}
                    onChange={(e) => setStoreItem({ ...storeItem, description: e.target.value })} />
                </div>
                <div className='w-1/2'>
                  <Label htmlFor="email" className='py-4'>Upload Photo</Label>

                  <div className="border  ">
                    <ImageUpload onImageSelect={handleImageSelect} />
                    <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">

                      <p className="">Select Files</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </form>
          <div className=' flex py-10 justify-end'>
            <Button
              type="button"
              variant="ghost"
              size="lg"
              className="bg-black  text-white rounded-3xl hover:bg-black-100 hover:text-white"
              onClick={handleAddStoreItem}
            >
              Publish Product
            </Button>
          </div>
        </>

      )}

    </div>
  );
};

export default AddStoreItemForm

