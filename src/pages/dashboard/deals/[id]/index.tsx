import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"
import {Link} from "react-router-dom";
import ItemDetails from "@/components/dashboard/item-details";
import { useState } from "react";
import { DealItem } from "@/interface";
import InlineEdit from "@/components/dashboard/inline-editing";
import { editTask, fetchTasks } from "@/redux/tasksSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "@/redux/store";


const ProductDetails = () => {
    const dispatch = useAppDispatch();

    const tasksData = useAppSelector((state: RootState) => state.tasks.tasks);
    const [editMode, setEditMode] = useState(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSave = async (editedItem: DealItem) => {
        try {
            setIsLoading(true);
            await dispatch(editTask(editedItem));
            dispatch(fetchTasks());
            closeEdit();
            setIsLoading(false);
            toast("Item Updated");
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };


    const openEdit = () => {
        setEditMode(true);
    };

    const closeEdit = () => {
        setEditMode(false);
    };

    
    return (
        <div className="p-6 h-full">
             <ToastContainer />
            <div className="flex justify-between py-2">
                <div className="flex items-center">

                    <Link to="/deals">
                        <h3 className="text-sm">Promotion & Offer </h3>
                    </Link>
                    <ChevronRight size={18} />
                    <h3 className="text-sm">Promotion description </h3>
                </div>


                <div className="space-x-6">
                    {editMode ?
                        ""
                        :
                        <Button
                            type="button"
                            variant="ghost"
                            size="lg"
                            className="bg-black  text-white rounded-xl hover:bg-black-100 hover:text-white"
                            onClick={openEdit}
                        >
                            Edit
                        </Button>
                    }
                    <Link to="/deals/create">
                        <Button
                            type="button"
                            variant="ghost"
                            size="lg"
                            className="bg-black  text-white rounded-xl hover:bg-black-100 hover:text-white"

                    >
                        Add a new offer
                    </Button>
                </Link>
            </div>
            {editMode ?
                <InlineEdit onClose={closeEdit} onEditSave={handleSave} isLoading={isLoading} item={tasksData}/>
                :
                <ItemDetails item={tasksData} />

            }
        </div>
        </div>
    );
}

export default ProductDetails;