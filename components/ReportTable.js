

export default function ReportTable(props) {
    const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    let total = 0
    hourly_sales.map(sal => total += sal)
    return (
        <div className="">
            
             {props.reports.length> 0 ? 
            <table className="mx-auto  my-4 w-3/4 text-center">
                <thead className="bg-green-500 "> 
                    <tr>
                        <th className="">Location</th>
                        {props.hours && props.hours.map(hour => (
                            <th className="">{hour}</th>
                        ))}
                        <th className="">Total</th>
                    </tr>
                </thead>
                <tbody className="bg-green-300">
                    {props.reports && props.reports.map(report => (
                        <tr key="">
                            <td className=" border border-gray-600">{report.location}</td>
                            {hourly_sales && hourly_sales.map(sale => (
                                <>
                                    <td className="border border-gray-600">{sale}</td>

                                </>
                            ))}
                            <td className=" border border-gray-600">{total}</td>
                        </tr>))
                    }
                </tbody>
            </table>
         : <h2 className="text-center">No Cookie Stands Available</h2>}
        </div>
    )
}