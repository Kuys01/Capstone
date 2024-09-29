import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaMapMarkerAlt, FaClipboardList, FaInbox, FaSignOutAlt } from 'react-icons/fa';
import 'flowbite'; // Ensure Flowbite JS components work
import 'flowbite/dist/flowbite.min.css'; // Flowbite CSS
import BinAlertPNG2 from '../assets/BinAlertPNG2.png';
import { Outlet } from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('');

    const handleNavigation = (route) => {
        setSelected(route);
        navigate(route);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-green-800 shadow-lg">
                <div className="p-6 h-full">
                    {/* Logo and Website Name */}
                    <div className="flex items-center justify-items-center mb-8">
                        <img
                            src={BinAlertPNG2}
                            className="object-cover h-20"
                            alt="BinAlert Logo"
                        />
                        <h1 className="text-2xl font-bold text-white ml-2">BinAlert</h1>
                    </div>
                    {/* Navigation Links */}
                    <ul className="w-full space-y-4">
                        <li>
                            <button
                                onClick={() => handleNavigation('/main/dashboard')}
                                className={`w-full text-white flex items-center space-x-3 p-3 rounded-lg transition-colors ${selected === '/main/dashboard' ? 'bg-green-600 text-white' : 'hover:bg-green-100 hover:text-green-600'}`}
                            >
                                <FaTachometerAlt className="text-lg" />
                                <span>Dashboard</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/main/viewbinpage')}
                                className={`w-full text-white flex items-center space-x-3 p-3 rounded-lg transition-colors ${selected === '/main/viewbinpage' ? 'bg-green-600 text-white' : 'hover:bg-green-100 hover:text-green-600'}`}
                            >
                                <FaMapMarkerAlt className="text-lg" />
                                <span>View Bin Location</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/main/logpage')}
                                className={`w-full text-white flex items-center space-x-3 p-3 rounded-lg transition-colors ${selected === '/main/logpage' ? 'bg-green-600 text-white' : 'hover:bg-green-100 hover:text-green-600'}`}
                            >
                                <FaClipboardList className="text-lg" />
                                <span>Logs</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigation('/main/inbox')}
                                className={`w-full text-white flex items-center space-x-3 p-3 rounded-lg transition-colors ${selected === '/main/inbox' ? 'bg-green-600 text-white' : 'hover:bg-green-100 hover:text-green-600'}`}
                            >
                                <FaInbox className="text-lg" />
                                <span>Inbox</span>
                            </button>
                        </li>

                        <div className='flex w-full'>
                            <li>
                                <button
                                    onClick={() => handleNavigation('/welcome')}
                                    className={`w-full text-white flex items-center space-x-3 p-3 rounded-lg transition-colors ${selected === '/logout' ? 'bg-green-500 text-white' : 'hover:bg-green-100 hover:text-green-600'}`}
                                >
                                    <FaSignOutAlt className="text-lg" />
                                    <span>Logout</span>
                                </button>
                            </li>
                        </div>
                    </ul>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
}
