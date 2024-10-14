import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { FaBell, FaUser, FaTrash } from 'react-icons/fa';
import 'flowbite';
import 'flowbite/dist/flowbite.min.css';

// Data for charts
const batteryData = [
  { name: 'Used', value: 60 },
  { name: 'Remaining', value: 40 },
];

const binStatusData = [
  { name: 'Low', value: 40 },
  { name: 'High', value: 60 },
];

// Sample data for weekly bin collection
// Sample data for weekly bin cleaning schedule
const weeklyCollectionData = [
  { day: 'Mon', cleaning: '50' },
  { day: 'Tue', cleaning: '70' },
  { day: 'Wed', cleaning: '50' },
  { day: 'Thu', cleaning: '70' },
  { day: 'Fri', cleaning: '90' },
  { day: 'Sat', cleaning: '50' },
  { day: 'Sun', cleaning: '70' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const renderBins = () => {
    const bins = [
      { id: 1, location: 'Cafeteria', status: 'Full', color: 'red' },
      { id: 2, location: 'Library', status: 'Empty', color: 'green' },
      { id: 3, location: 'Gym', status: 'Halfway', color: 'yellow' },
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
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-900">Waste Management Dashboard</h1>
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

        {/* Waste Overview Section */}
        <section className="mb-3">
          <h3 className="text-1xl font-semibold mb-4">Waste Overview</h3>
          <div className="w-full bg-white p-6 rounded-lg shadow-md flex justify-between gap-4">
            {/* Bin Status Pie Chart */}
            <div className="flex-1 flex flex-col items-center">
              <h4 className="mb-2 font-semibold">Bin Fill Level</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={binStatusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#ff6361"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {binStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % 2]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Battery Percentage Pie Chart */}
            <div className="flex-1 flex flex-col items-center">
              <h4 className="mb-2 font-semibold">Battery Percentage</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={batteryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#82ca9d"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {batteryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % 2]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Weekly Bin Cleaning Schedule Section */}
        <section className="mb-6">
          <h3 className="text-1xl font-semibold mb-3">Weekly Bin Cleaning Schedule</h3>
          <div className="w-full bg-white p-6 rounded-lg shadow-md">
            <ResponsiveContainer width="50%" height={250}>
              <BarChart data={weeklyCollectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="cleaning" fill="#8884d8"
                  
                />
              </BarChart>
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
      </div>
    </div>
  );
}

