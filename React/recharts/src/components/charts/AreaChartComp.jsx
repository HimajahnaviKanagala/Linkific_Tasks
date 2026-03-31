import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function AreaChartComp({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} syncId="dashboard">
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area dataKey="sales" fill="#8884d8" stroke="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
export default AreaChartComp;
