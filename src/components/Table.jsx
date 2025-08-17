import data from "../data/exerciseData.json";

export default function Table() {
  return (
    // Table container
    <div className="overflow-x-auto shadow-md rounded-lg p-4 bg-white mb-6">

    <h2 className="text-lg font-semibold mb-3">Exercise Records</h2>
      {/* table structure */}
      <table className="min-w-full bg-white border border-gray-200">
        {/* table header */}
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Date</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Calories</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">Duration (min)</th>
          </tr>
        </thead>

        {/* Table body with data rows */}
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {/* date */}
              <td className="px-6 py-4 border-b">{item.date}</td>
              {/* calories */}
              <td className="px-6 py-4 border-b">{item.calories}</td>
              {/* duration */}
              <td className="px-6 py-4 border-b">{item.durationMinutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}