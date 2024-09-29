import Background from '../assets/Background.jpg'; // Import the background image
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'flowbite'; // To ensure Flowbite JS components work
import 'flowbite/dist/flowbite.min.css'; // Flowbite CSS
import Bg from '../assets/Bg.jpg'; // Import the second image

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }} // Background image
    >
      <div className="flex items-center bg-white shadow-md rounded-lg w-[500px] bg-opacity-80 backdrop-blur-lg">
        <div className="w-1/4 h-full overflow-hidden flex">
          <img
            src={Bg}
            alt="Decorative"
            className="object-cover h-full" // Adjust width here
          />
        </div>

        {/**Welcome to Website */}
        <div className="w-2/3 p-8 m-6 flex items-center flex-col">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Welcome to the App
          </h1>
          
          <button
            onClick={() => navigate('/login')}
            className="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Let's get Started
          </button>
        </div>
        
      </div>
    </div>
  );
}
