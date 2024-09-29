import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'flowbite'; // To ensure Flowbite JS components work
import 'flowbite/dist/flowbite.min.css'; // Flowbite CSS

export default function Profile (){
    const navigate = useNavigate();

    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-gray-300"
            src="https://via.placeholder.com/150"
            alt="Profile Avatar"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
          <p className="mt-2 text-gray-500">Full Stack Developer</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800">Profile Information</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value="john.doe@example.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            >
              Passionate developer with experience in React, Node.js, and more.
            </textarea>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
