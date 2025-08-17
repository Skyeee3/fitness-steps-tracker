import Table from "./components/Table";
import Chart from "./components/Chart";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Fitness Tracker</h1>

        {/* 1 col on small, 2 cols on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Table card */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <Table />
          </div>

          {/* Chart card */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <Chart />
          </div>
        </div>
      </div>
    </main>
  );
}