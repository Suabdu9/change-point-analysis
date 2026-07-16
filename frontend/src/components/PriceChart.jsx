import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";

function PriceChart({ prices, summary, selectedEvent }) {
  if (!prices.length) return <p>Loading chart...</p>;

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={prices}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="Date" hide />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="Price"
          stroke="#2563eb"
          dot={false}
        />

        {summary && (
          <ReferenceLine
            x={summary.change_point_date}
            stroke="red"
            strokeWidth={2}
            label="Change Point"
          />
        )}

        {selectedEvent && (
          <ReferenceLine
            x={selectedEvent.Date}
            stroke="green"
            strokeWidth={2}
            label={selectedEvent.Event}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PriceChart;
