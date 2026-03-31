import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "../CustomTooltip";

function BarChartComp({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} syncId="dashboard">
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="users"
          fill="#82ca9d"
          onClick={(d) => alert(`Clicked: ${d.name}`)}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default BarChartComp;
