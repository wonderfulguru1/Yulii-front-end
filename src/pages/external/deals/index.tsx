"use client"

import { useState, ChangeEvent } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { moreWays, dealSection, productsData } from "../../../constants/index"
import MerchantCard from './MerchantCard';

import {Link} from 'react-router-dom';
import Label from '../../../components/externalComponents/Label';
import InstaCard from "@/components/externalComponents/InstaCard";

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}
const DealsPage: React.FC<DropdownProps> = ({ onSelect }) => {
  // const divData = Array.from({ length: 4 }, (_, index) => index);
  // const [products] = useState(productsData);
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const filteredProducts = selectedCategory === 'All'
  //   ? products
  //   : products.filter(product => product.category === selectedCategory);

  // const uniqueCategories = Array.from(
  //   new Set(products.map((product) => product.category))
  // );
  // const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const option = e.target.value;
  //   setSelectedCategory(option);
  //   onSelect(option);
  // };

  const numberOfCards = 5;
  const cards = Array.from({ length: numberOfCards }, (_, index) => (
    <InstaCard key={index} />
  ));

  return (
    <div className='pt-28 bg-[#fffdfd]'>

      <section className=''>
        <div className='container w-1/2 px-4 md:px-0 mx-auto  items-center py-14 '>
          <div className=' text-center '>
            <h2 className='text-4xl font-semibold' data-aos="zoom-out-right">Socials</h2>
            <p className='py-10 md:text-2xl text-lg ' data-aos="zoom-out-right">
            Yulii is the mobile application that allows you to organize daily activities with 
            your loved ones. With a point awarded task allocation system, you can motivate your 
            family and friends to deserve your attention, and greet them with gifts and vice versa

            </p>
          </div>
         
        </div>

      </section>
  
<div>

  {cards}
</div>
    </div>
  )
}

export default DealsPage