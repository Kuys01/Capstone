import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaUser, FaTrash, FaMapMarkerAlt } from 'react-icons/fa';
import 'flowbite'; // Ensure Flowbite JS components work
import 'flowbite/dist/flowbite.min.css'; // Flowbite CSS
import BinAlertPNG2 from '../assets/BinAlertPNG2.png';

export default function Dashboard() {
  const navigate = useNavigate();

  // Sample data for bins
  const bins = [
    { id: 1, location: "Cafeteria", status: "Full", color: "red" },
    { id: 2, location: "Library", status: "Empty", color: "green" },
    { id: 3, location: "Gym", status: "Halfway", color: "yellow" },
  ];

  // Function to render each bin's status
  const renderBins = () => {
    return bins.map(bin => (
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
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
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
