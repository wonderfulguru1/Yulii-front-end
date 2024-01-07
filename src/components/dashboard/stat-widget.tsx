// "use client"

import React from "react"

type CardProbs = {
    icon: React.ElementType;
    icon2: React.ElementType;
    color?: string;
    color2?: string;
    color3?: string;
    iconColor?: string;
    iconBGColor?: string;
    text?: string;
    amount?: number;
    percentage?: string
}


const StatWidget = ({ icon: Icon, icon2: Icon2,  color, text, amount, percentage, iconColor, color2, color3, iconBGColor }: CardProbs) => {

    return (
        <div className="relative lg:w-1/3 w-full flex bg-white p-4 flex-col rounded-[10px]    bg-clip-border shadow-md dark:shadow-none">

            <div className="flex  rounded-full  ">

                <Icon
                    size={18}
                    className={`${iconBGColor} ${iconColor} rounded-md h-12 p-3 w-12`} strokeWidth={3}/>
            </div>

            <div className="h-50  flex w-auto flex-col justify-center">
                <p className="font-dm py-4 text-sm  font-medium text-gray-800">{text}</p>
                <div className="flex justify-between">
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">{amount}</h4>
                    <div className={`${color} py-1 px-2 flex gap-1 items-center text-center text-xs rounded-[6px]`}>
                        <Icon2 strokeWidth={3}  size={22} className={`  ${color2} h-3 w-4  rounded-[4px] ${color3} h-2border-2`} />
                        <span className={`font-semibold ${color2}` } >{percentage} %</span>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default StatWidget;