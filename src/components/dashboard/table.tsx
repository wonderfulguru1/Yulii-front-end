
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



interface TableProbs {
    headers: string[];
    data: { [key: string]: any }[];
    color: string
    showAdditionalContent: boolean
    extraTableRow: boolean
}
const Table: React.FC<TableProbs> = ({ data, headers }) => {
    const navigate = useNavigate();
    const users = data;
  const [filter] = useState<string>('');

  const filteredUsers = users.filter((user) => {
    const searchText = filter.toLowerCase();
    return (
      
      user?.firstname.toLowerCase().includes(searchText) ||
      user?.lastname.toLowerCase().includes(searchText) ||
      user?.email.toLowerCase().includes(searchText)
    );
  });


  const handleTableCellClick = (userId: string) => {
    navigate(`/users/${userId}`);
  };


     return (

        <div className="inline-block w-full shadow-md  overflow-scroll">

            <table className="min-w-full bg-[#f6f7f6] leading-normal border-b border-gray-200  ">
                {headers && (
                    <thead className=''>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}
                                    className="px-5 py-3 border-b-2 bg-[#f6f7f6]  border-gray-200  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                            {/* {extraTableRow && (
                                <th className="px-5 py-3 border-b-2 bg-[#f6f7f6]  border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                            )} */}

                        </tr>
                     
                    </thead>
                   
                )}
                {/* {showAdditionalContent && (
                    <div>
                        <div className="flex items-center rounded-md  ">

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="px-2 space-x-4 hover:bg-white border-0 ">
                                        <span className='text-[#81cdff]'>Top buyers</span>
                                        <ChevronDownIcon className="h-4 w-4 text-secondary-foreground text-[#81cdff]" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    alignOffset={5}
                                    className="w-[140px] bg-white ml-8"
                                    forceMount
                                >

                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className='hover:bg-[#fef4f5] cursor-pointer'>
                                        This month
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='hover:bg-[#fef4f5] cursor-pointer'>Last Month</DropdownMenuItem>
                                    <DropdownMenuItem className='hover:bg-[#fef4f5] cursor-pointer'>Last 3 Month</DropdownMenuItem>
                                    <DropdownMenuSeparator />

                                </DropdownMenuContent>
                            </DropdownMenu>
                          
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="px-2 space-x-4 hover:bg-white border-0 ">
                                        <span className='text-[#fc99a2]'>Regular buyers</span>
                                        <ChevronDownIcon className="h-4 w-4 text-secondary-foreground text-[#fc99a2]" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    alignOffset={5}
                                    className="w-[140px] bg-white ml-8"
                                    forceMount
                                >

                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className='hover:bg-[#fef4f5] cursor-pointer'>
                                        Nestle
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='hover:bg-[#fef4f5] cursor-pointer'>My Stack</DropdownMenuItem>
                                    <DropdownMenuItem className='hover:bg-[#fef4f5] cursor-pointer'>Inspiration</DropdownMenuItem>
                                    <DropdownMenuSeparator />

                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="px-2 space-x-4 hover:bg-white border-0 ">
                                        <span className='text-[#c88efe]'>Occasional buyers</span>
                                        <ChevronDownIcon className="h-4 w-4 text-secondary-foreground text-[#c88efe]" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    alignOffset={5}
                                    className="w-[140px] bg-white ml-8"
                                    forceMount
                                >

                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className='hover:bg-[#fef4f5] cursor-pointer'>
                                        Future Ideas
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className='hover:bg-[#fef4f5] cursor-pointer'>My Stack</DropdownMenuItem>
                                    <DropdownMenuItem className='hover:bg-[#fef4f5] cursor-pointer'>Inspiration</DropdownMenuItem>
                                    <DropdownMenuSeparator />

                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                )} */}
                <tbody>
                    {filteredUsers.map((user, index) => (
                        <tr key={user.id}
                        className={ "px-5 py-5 border-b text-center border-gray-200 bg-white text-sm"}
                        >
                            {/* {headers && headers.map((header, colIndex) => ( */}
                                <td key={index}

                                    className={ "px-5 py-5 "}
                                >
                                    {/* header === 'status' ? `bg-${color}` : */}
                                    {/* <div className="flex items-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap "> */}
                                    {user.firstname}
                                    {/* </p>
                                        </div>
                                    </div> */}


                                </td>
                                <td>
                                {user.lastname}
                                </td>
                                <td>
                                {user.email}
                                </td>
                                <td>
                                {user.gender}
                                </td>
                                <td>
                                {user.phone}
                                </td>
                                <Link to={`/users/user-detail`} state={{data:user}}>
                                <td onClick={() => handleTableCellClick(user.id)}  className={ "px-5 py-5 underline cursor-pointer"}>
                                    View
                                </td>
                                </Link>
                            {/* ))} */}
                            {/* {extraTableRow && (
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <OrderDetail />
                                </td>
                            )} */}


                        </tr>

                    ))}

                </tbody>
            </table>
        </div>


    );
}

export default Table;