import { LineChart, Line, XAxis, YAxis } from "recharts";
import data from "../data/exerciseData.json";

export default function Chart() {

    // Define steps in one minute
    const STEPS_PER_MIN = 100;
    
    const chartData = data.map(d => ({
        date: d.date,
        calories: d.calories,
        // Calculate steps based on tduration
        steps: d.durationMinutes * STEPS_PER_MIN,
  }));

  return (
    <LineChart width={400} height={300} data={chartData}>
      <XAxis dataKey="date" />  
      <YAxis />              
      <Line type="monotone" dataKey="calories" />
      <Line type="monotone" dataKey="steps" />
    </LineChart>
  );
}