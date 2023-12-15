import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export type Items = {
  title: string
  image: string;
  id: number;
  name: string;
  status: string;
  price: string;
};

interface Props {
  items: Items[];
}

const YulliCard: React.FC<Props> = ({ items }) => {

  return (
    <div className="grid py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map(item => (
        <Link to={`/yulli-store/${item.id}`} >

          <div className=" p-4 w-full border rounded-lg" key={item.id}>
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover rounded-lg object-center w-full h-full block" src={item?.image} />
            </a>
            <div className="mt-4">
              <h3 className=" text-xs font-semibold ">{item?.title}</h3>
              <p className="py-2 font-semibold">${item?.price}</p>
            </div>
            <div className="flex justify-end pt-4">
              <Link to={`/yulli-store/${item.id}`} >
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="bg-black px-4  text-white rounded-full hover:bg-black-100 hover:text-white"
                >
                  View
                </Button>
              </Link>
            </div>
          </div>

        </Link>
      ))}



    </div>
  );
}

export default YulliCard;