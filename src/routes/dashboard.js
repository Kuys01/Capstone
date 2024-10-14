import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, RadialBarChart, RadialBar, Cell, ResponsiveContainer } from 'recharts';
import { FaBell, FaUser, FaTrash } from 'react-icons/fa';
import 'flowbite'; // Ensure Flowbite JS components work
import 'flowbite/dist/flowbite.min.css'; // Flowbite CSS

// Sample Data for Charts
const wasteTypesData = [
  { name: 'Plastic', value: 300 },
  { name: 'Organic', value: 500 },
  { name: 'Paper', value: 200 },
  { name: 'Metal', value: 100 },
];

const recyclingEfficiencyData = [
  { name: 'Recycled', value: 65 },
  { name: 'Non-recycled', value: 35 },
];

const energyUsageData = [
  { day: 'Mon', usage: 200 },
  { day: 'Tue', usage: 300 },
  { day: 'Wed', usage: 500 },
  { day: 'Thu', usage: 250 },
  { day: 'Fri', usage: 350 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  // Function to render waste bin status
  const renderBins = () => {
    const bins = [
      { id: 1, location: "Cafeteria", status: "Full", color: "red" },
      { id: 2, location: "Library", status: "Empty", color: "green" },
      { id: 3, location: "Gym", status: "Halfway", color: "yellow" },
    ];

    return bins.map((bin) => (
      <div key={bin.id} className="p-4 bg-white border rounded-lg shadow-md">
        <FaTrash className={`text-3xl mb-2 text-${bin.color}-600`} />
        <p className="font-semibold text-gray-700">{bin.location}</p>
        <p className="text-sm text-gray-500">Status: {bin.status}</p>
      </div>
    ));
  };

  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Waste Management Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-700 hover:text-green-600"
              onClick={() => navigate('/notifications')}
            >
              <FaBell className="text-lg" />
            </button>
            <button
              className="text-gray-700 hover:text-green-600"
              onClick={() => navigate('/main/profile')}
            >
              <FaUser className="text-lg" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to your Dashboard</h2>

          {/* Waste Data Section */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Waste Types Distribution</h3>
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={wasteTypesData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {wasteTypesData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Energy Usage Section */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Energy Usage Per Day</h3>
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={energyUsageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="usage" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Recycling Efficiency Section */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Recycling Efficiency</h3>
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
              <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="10%"
                  outerRadius="80%"
                  barSize={10}
                  data={recyclingEfficiencyData}
                >
                  <RadialBar minAngle={15} background clockWise dataKey="value" />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Bin Status Section */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Bin Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {renderBins()}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
