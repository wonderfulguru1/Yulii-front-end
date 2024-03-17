interface TableHeader {
    label: string;
    field: string;
    className: string;
    render?: (item: any) => React.ReactNode;
  }
  
  interface ReusableTableProps {
    data: any[];
    headers: TableHeader[];
  }
  
  const ReusableTable: React.FC<ReusableTableProps> = ({ data, headers }) => {
    // const [selectedItem, setSelectedItem] = useState<any | null>(null);
  
  
    return (
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md ">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                >
                  {header.label}
                </th>
              ))}
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                View
              </th>
            </tr>
          </thead>
          <tbody className="border-t border-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {headers.map((header, idx) => (
                  <td key={idx} className={`px-6 py-4 ${header.className}`}>
                    {header.render ? (
                      header.render(item)
                    ) : header.field === 'status' ? (
                      <div className="flex gap-2">
                        {item[header.field].map((status: string, statusIndex: number) => (
                          <span
                            key={statusIndex}
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                              status === 'Design'
                                ? 'bg-red-50 text-red-600'
                                : status === 'Product'
                                ? 'bg-blue-50 text-blue-600'
                                : ''
                            }`}
                          >
                            {status}
                          </span>
                        ))}
                      </div>
                    ) : header.field === 'product_name' ? (
                      <div>
                        <div className="font-medium text-gray-700">{item.product_name}</div>
                        <div className="text-gray-400 pt-2">{item.category}</div>
                      </div>
                    ) : (
                      item[header.field]
                    )}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <button
                  //   onClick={() => handleViewClick(item)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
  
      </div>
    );
  };
  
  export default ReusableTable;