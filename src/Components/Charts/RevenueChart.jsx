import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  
} from "recharts";

const data = [
  {
    name: " A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: " B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: " C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: " D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: " E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: " F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: " G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function RevenueChart() {
  return (
<ResponsiveContainer width="100%" height={200}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#070D28" />
            <stop offset="28.22%" stopColor="#081F44" />
            <stop offset="58.83%" stopColor="#092F5C" />
            <stop offset="77.7%" stopColor="#0B437B" />
            <stop offset="99.69%" stopColor="#0D61AA" />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            id="yAxisGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
            gradientTransform="rotate(94.25)"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.4)" />
          </linearGradient>
        </defs>
        <CartesianGrid
          vertical={false}
          horizontal={true}
          strokeDasharray="8 8"
          stroke="#35E6EB33"  // Set your desired dot color here
          style={{ zIndex: -1 }}  // Set z-index to -1
        />
        <XAxis tickLine={false} tick={{ fill: "#FFFFFF" }} dataKey="name" />
        <YAxis tickLine={false} tick={{ fill: "url(#yAxisGradient)" }} />
        <Tooltip />
        <Area type="monotone" dot={false} dataKey="uv" stroke="#1AD6FF" fill="url(#areaGradient)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
