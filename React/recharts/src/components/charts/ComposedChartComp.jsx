import {
  Bar,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ComposedChartComp({data}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data} syncId="dashboard">
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#82ca9d" />
        <Line dataKey="sales" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
export default ComposedChartComp;
