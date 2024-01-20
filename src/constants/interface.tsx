
interface Item {
    title: string
    image: string;
    id: number;
    // status: string;
    price: number;
    description:string;
    storeViewCount?: number;
    discount?:number;
    affiliate_link?:string;
    percentage_discount:number;
    in_stock:number;
    category:string;
    rating: {
        count:number;
    }
  
}

interface DealItem {
    id: string;
    name: string;
    image: string;
    description: string;
    status: string;
  
}
export type {Item, DealItem};
// export default {Item, DealItem}
// export default DealItem