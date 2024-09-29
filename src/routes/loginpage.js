import Background from '../assets/Background.jpg'; // Use the same background image as WelcomePage
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'flowbite'; // To ensure Flowbite JS components work
import 'flowbite/dist/flowbite.min.css'; // Flowbite CSS

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }} // Background image
    >
      <div className="flex items-center justify-center bg-white shadow-md rounded-lg w-[400px] bg-opacity-80 backdrop-blur-lg p-6">
        <div className="w-full">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
            Login to Your Account
          </h1>

          <form className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <button onClick={() => navigate('/main/dashboard')}
              type="submit"
              className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/Signup')}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
