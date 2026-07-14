import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer,
ReferenceLine
} from "recharts";

function PriceChart({prices,summary}){

return(

<ResponsiveContainer width="100%" height={500}>

<LineChart data={prices}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="Date" hide/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="Price"
stroke="#2563eb"
dot={false}
/>

<ReferenceLine
x={summary?.change_point_date}
stroke="red"
label="Change Point"
/>

</LineChart>

</ResponsiveContainer>

);

}

export default PriceChart;
