import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Jan ",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Feb ",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Mar ",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Apr ",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "May ",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
];

const GradientBar = (props) => {
    const { x, y, width, height } = props;
    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill="url(#colorGradient)"
        />
    );
};

export default function AmountChart() {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
                <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0E1A4F" />
                        <stop offset="100%" stopColor="#0D61AA" />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} horizontal={false} />
                <XAxis axisLine={false} tick={{ fill: "#FFFFFF" }} tickLine={false} dataKey="name" />
                <YAxis axisLine={false} tickLine={false} />

                <Bar shape={<GradientBar />} dataKey="pv" />
            </BarChart>
        </ResponsiveContainer>
    );
}
