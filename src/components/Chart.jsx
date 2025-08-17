import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import data from "../data/exerciseData.json";

export default function Chart() {
  // Steps per minute (constant)
  const STEPS_PER_MIN = 100;

  // Prepare chart data with calories and steps
  const chartData = data.map((d) => ({
    date: d.date,
    calories: d.calories,
    steps: d.durationMinutes * STEPS_PER_MIN,
  }));

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-3">Calories & Steps Trend</h2>

      {/* Responsive container for the chart */}
      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
        >
          {/* Grid lines */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* X axis: date / Y axis: values */}
          <XAxis dataKey="date" />
          <YAxis />

          {/* Tooltip on hover + Legend */}
          <Tooltip />
          <Legend />

          {/* Line for calories */}
          <Line
            type="monotone"
            dataKey="calories"
            name="Calories"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />

          {/* Line for steps */}
          <Line
            type="monotone"
            dataKey="steps"
            name="Steps"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Small note for formula */}
      <p className="text-xs text-gray-500 mt-2">
        Steps = durationMinutes × {STEPS_PER_MIN}
      </p>
    </div>
  );
}