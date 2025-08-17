import Table from "./components/Table";
import Chart from "./components/Chart";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Fitness Tracker</h1>
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <Table />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <Chart />
        </div>
      </div>
    </main>
  );
}