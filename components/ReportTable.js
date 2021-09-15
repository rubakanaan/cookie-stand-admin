

export default function ReportTable(props) {

    return (
        <div className="">

            {props.reports.length > 0 ?
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
                        {props.reports && props.reports.map((report, index) => (
                            <tr key={`${index}`}>
                                <td className=" border border-gray-600">{report.location}</td>
                                {report.hourly_sales && report.hourly_sales.map(sale => (
                                    <>
                                        <td className="border border-gray-600">{sale}</td>

                                    </>
                                ))}
                                <td className=" border border-gray-600">{report.total}</td>
                            </tr>))
                        }
                    </tbody>
                    <tfoot className="bg-green-500">
                    <tr>
                            <td className=" border border-gray-600">Totals</td>
                            {props.hourlyTotals && props.hourlyTotals.map(total=>(
                                <td className="border border-gray-600">{total}</td>         
                            )) }
                            <td className=" border border-gray-600">{props.totals}</td>
                        </tr>
                    </tfoot>
                </table>
                : <h2 className="text-center">No Cookie Stands Available</h2>}
        </div>
    )
}
