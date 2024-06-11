import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle";
import { Cell, BarChart, CartesianGrid, YAxis, Bar, XAxis } from 'recharts';
import { Helmet } from "react-helmet-async";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Analytics = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();
    const { data: camps = [] } = useQuery({
        queryKey: ['camps', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/registerCampAnalysis/${user?.email}`)
            console.log(res);
            return res.data;
        }
    })

    const paidCamp = camps.filter(camp => camp.paymentStatus === 'paid')
    const totalFees = paidCamp.reduce((total, item) => total + parseInt(item.campFees), 0)



    const chartData = camps.map(data => {
        return { name: data.campName, value: data.campFees }
    })

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    console.log(chartData);
    console.log(camps);

    return (
        <div className="">
            <Helmet>
                <title>LifeCare || Analytics</title>
            </Helmet>
            <SectionTitle heading="Analytics" subHeading="See Your Activities" />
            <h2 className="text-xl font-bold text-light-blue-300">Hello ,Welcome Back {user?.displayName}</h2>
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
                                <p className="text-sm mt-4 leading-8 text-light-blue-300 tracking-wide"> Total Registrations</p>
                            </div>
                        </div>
                        <div
                            role="listitem"
                            className="flex justify-center w-full lg:border-r border-gray-300 py-6"
                        >


                            <div className="text-gray-800  w-1/2 ">
                                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">${totalFees}</h1>
                                <p className="text-sm mt-4 leading-8 text-light-blue-300 tracking-wide">Total Paid Fees</p>
                            </div>
                        </div>
                        <div
                            role="listitem"
                            className="flex justify-center w-full  py-6"
                        >


                            <div className="text-gray-800  w-1/2 ">
                                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">{paidCamp.length}</h1>
                                <p className="text-sm mt-4 leading-8 text-light-blue-300 tracking-wide">Paid Registrations</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* chart */}
            <p className="mt-10 mb-3 text-light-blue-300 font-semibold">Chart Of Registered Camps -</p>
            <div className="overflow-auto">
                <div style={{ width: "100%", height: "80vh" }}>
                    <BarChart
                        maxBarSize={1200}
                        width={1200}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            </div>
        </div>
    );
}

export default Analytics;




