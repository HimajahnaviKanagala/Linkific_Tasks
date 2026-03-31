function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#222",
          color: "#fff",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <p>
          <strong>{label}</strong>
        </p>
        <p>Sales: {payload[0]?.value}</p>
        <p>Users: {payload[1]?.value}</p>
      </div>
    );
  }
  return null;
}
export default CustomTooltip;
