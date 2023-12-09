import {orderHistoryTableData} from "../../../constants"
import { Button } from "@/components/ui/button";

const OrdersPage = () => {
    const {searchBy} = orderHistoryTableData
    return (
        <div className="p-6">
            <div className="flex space-x-10 items-center py-4">
                <h3 className="font-bold text-lg">Order History</h3>
                {searchBy.map((item, index) => (
                      <Button
                      key={index}
                  //   onClick={() => handleCategoryFilter(category)}
                    className={ ' rounded-xl text-black text-[#909091]  hover:text-white space-x-10'}
                  >
                    {item}
                  </Button>
                ))}
          
            </div>
            <div>
                {/* <Table data={data} headers={headers} color={''} extraTableRow={true} showAdditionalContent={false}/> */}
            </div>
        </div>

    );
}

export default OrdersPage;