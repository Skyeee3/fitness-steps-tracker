import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import data from "../data/exerciseData.json";

export default function Chart() {
  const STEPS_PER_MIN = 100;

  const chartData = data.map((d) => ({
    date: d.date,
    calories: d.calories,
    steps: d.durationMinutes * STEPS_PER_MIN,
  }));

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-3">Calories & Steps Trend</h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={chartData}
          margin={{ top: 40, right: 50, bottom: 10, left: 50 }}
        >
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* X axis */}
          <XAxis dataKey="date" />

          {/* Left Y axis (Calories) */}
          <YAxis yAxisId="left">
            <Label
              value="Calories (kcal)"
              position="top"
              offset={20}
              fill="#374151"
              fontSize={12}
              fontWeight="bold"
            />
          </YAxis>

          {/* Right Y axis (Steps) */}
          <YAxis yAxisId="right" orientation="right">
            <Label
              value="Steps (count)"
              position="top"
              offset={20}
              fill="#374151"
              fontSize={12}
              fontWeight="bold"
            />
          </YAxis>

          {/* Tooltip + Legend */}
          <Tooltip />
          <Legend />

          {/* Calories line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="calories"
            name="Calories"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />

          {/* Steps line */}
          <Line
            yAxisId="right"
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

      <p className="text-xs text-gray-500 mt-2">
        Steps = durationMinutes × {STEPS_PER_MIN}
      </p>
    </div>
  );
}