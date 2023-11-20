
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

const Toggle = () => {

    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);

        if (isChecked) {
            navigate("/");
        } else {
            navigate("/pro-users");
        }
    };

    return (
        <div>
            <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                <div className="mr-6  font-semibold">
                    USERS
                </div>
                <div className="relative">

                    <input type="checkbox" id="toggleB" className="sr-only" checked={isChecked} onChange={handleToggle} />


                    <div className="block border border-[#4A9BDD] w-16 h-8 rounded-full bg-sec"></div>

                    <div className="dot absolute left-1 top-1 bg-[#4A9BDD] w-6 h-6 rounded-full transition"></div>


                </div>


                <div className="ml-6  font-semibold">
                   PRO-USERS
                </div>
            </label>
        </div>
    )
}

export default Toggle