// import { Link } from "react-router-dom";
// import { Button } from "../ui/button";
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

// // export type Items = {
// //   title: string
// //   image: string;
// //   id: number;
// //   status: string;
// //   price: string;
// // };

// interface Props {
//   items: any
//   onDelete: (id:number) => void;
// }

// const YuliiCard: React.FC<Props> = ({ items, onDelete }) => {

//   return (
//     <div className="grid py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//       {items.map((item: { id: Key | null | undefined; image: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Iterable<ReactNode> | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Iterable<ReactNode> | null | undefined; }) => (
//         // <Link to={`/Yulii-store/item-detail`} state={{data:item}}>

//           <div className=" p-4 w-full border rounded-lg" key={item.id}>
//             <a className="block relative h-48 rounded overflow-hidden">
//               <img alt="ecommerce" className="object-cover rounded-lg object-center w-full h-full block" src={item?.image} />
//             </a>
//             <div className="mt-4">
//               <h3 className=" text-xs font-semibold ">{item?.title}</h3>
//               <p className="py-2 font-semibold">${item?.price}</p>
//             </div>
//             <div className="flex justify-end pt-4 cursor-pointer" >
//             <Button
//             onClick={() => onDelete(item?.id)}
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="bg-black px-4  text-white rounded-full hover:bg-black-100 hover:text-white"
//                 >
//                   delete
//                 </Button>
//               <Link to={`/Yulii-store/item-detail`} state={{data:item}}>
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="bg-black px-4  text-white rounded-full hover:bg-black-100 hover:text-white"
//                 >
//                   View
//                 </Button>
//               </Link>
//             </div>
//           </div>

//         // </Link>
//       ))}



//     </div>
//   );
// }

// export default YuliiCard;