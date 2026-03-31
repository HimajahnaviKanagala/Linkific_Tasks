import { useEffect, useState } from "react";
import LineChartComp from "./charts/LineChartComp";
import BarChartComp from "./charts/BarChartComp";
import PieChartComp from "./charts/PieChartComp";
import AreaChartComp from "./charts/AreaChartComp";
import ComposedChartComp from "./charts/ComposedChartComp";

function Dashboard() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        const formatted = res.map((u, i) => ({
          name: u.name,
          sales: (i + 1) * 200,
          users: (i + 1) * 100,
        }));
        setData(formatted);
      });
  }, []);

  const updateData = () => {
    const newData = data.map((item) => ({
      ...item,
      sales: item.sales + Math.floor(Math.random() * 100),
    }));
    setData(newData);
  };

  const filteredData =
    filter === "high" ? data.filter((d) => d.sales > 800) : data;

  return (
    <div className="dashboard">
      <h1>Analytical Dashboard</h1>
      <div className="controls">
        <button onClick={updateData}>Update Data</button>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="high">High Sales</option>
        </select>
      </div>

      <div className="grid">
        <div className="chart-card">
          <h3>Sales vs Users (Line Chart)</h3>
          <LineChartComp data={filteredData} />
        </div>
        <div className="chart-card">
          <h3>User Comparison (Bar Chart)</h3>
          <BarChartComp data={filteredData} />
        </div>
        <div className="chart-card">
          <h3>Revenue Distribution (Pie Chart)</h3>
          <PieChartComp data={filteredData} />
        </div>
        <div className="chart-card">
          <h3>Sales Trend (Area Chart)</h3>
          <AreaChartComp data={filteredData} />
        </div>
        <div className="chart-card">
          <h3>Combined Metrics (Composed Chart)</h3>
          <ComposedChartComp data={filteredData} />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
