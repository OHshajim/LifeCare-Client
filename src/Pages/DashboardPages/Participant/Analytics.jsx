import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle";
import { Cell, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Analytics = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: camps = [] } = useQuery({
        queryKey: ['camps', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/registeredCamps/${user?.email}`)
            // console.log(res);
            return res.data;
        }
    })
    console.log(camps);
    const paidCamp = camps.filter(camp => camp.paymentStatus === 'paid')
    const totalFees = paidCamp.reduce((total, item) => total + parseInt(item.campFees), 0)



    const chartData = camps.map(data => {
        return { name: data.campName, value: data.campFees }
    })

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    console.log(chartData);
    return (
        <div >
            <SectionTitle heading="Analytics" subHeading="See Your Activities" />
            <div className="flex w-full">
                <div className="mx-auto container">
                    <div
                        role="list"
                        aria-label="Our stats."
                        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8"
                    >
                        <div
                            role="listitem"
                            className="flex justify-center w-full lg:border-r border-gray-300 py-6"
                        >


                            <div className="text-gray-800   w-1/2">
                                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">{camps.length}</h1>
                                <p className="text-sm mt-4 leading-8 text-blue-400 tracking-wide"> Total Registrations</p>
                            </div>
                        </div>
                        <div
                            role="listitem"
                            className="flex justify-center w-full lg:border-r border-gray-300 py-6"
                        >


                            <div className="text-gray-800  w-1/2 ">
                                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">${totalFees}</h1>
                                <p className="text-sm mt-4 leading-8 text-blue-400 tracking-wide">Total Paid Fees</p>
                            </div>
                        </div>
                        <div
                            role="listitem"
                            className="flex justify-center w-full  py-6"
                        >


                            <div className="text-gray-800  w-1/2 ">
                                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">{paidCamp.length}</h1>
                                <p className="text-sm mt-4 leading-8 text-blue-400 tracking-wide">Paid Registrations</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* chart */}
            <div className="border">
                <PieChart width={400} height={400}>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Legend></Legend>
                </PieChart>
            </div>
        </div>
    );
}

export default Analytics;