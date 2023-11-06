
"use client"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export function PieChartss() {


    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },

    ];
    const COLORS = ['#81cdff', '#fc99a2', '#c88efe'];


    return (
        <ResponsiveContainer width="100%" height={350}>
            <PieChart width={800} height={400} >
                <Pie
                    data={data}
                    cx={140}
                    cy={150}
                    innerRadius={60}
                    outerRadius={110}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}



