import CustomTooltip from "../CustomTooltip";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
  CartesianGrid,
} from "recharts";

function LineChartComp({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} syncId="dashboard">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line dataKey="sales" stroke="#8884d8" strokeWidth={3} />
        <Line dataKey="users" stroke="#82ca9d" strokeWidth={3} />
        <Brush dataKey="name" height={30} />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default LineChartComp;
