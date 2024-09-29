// src/index.js or src/App.js
import 'flowbite/dist/flowbite.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import React from "react";
import ReactDOM from "react-dom/client";  // Make sure to use ReactDOM from 'react-dom/client' in React 18+
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import WelcomePage from "./routes/welcomepage";
import LoginPage from "./routes/loginpage";
import Dashboard from './routes/dashboard';
import Main from './routes/main';
import Viewbinpage from './routes/viewbinpage';
import Logpage from './routes/logpage';
import Inboxpage from './routes/inbox';
import Profile from './routes/profile';
import SignupPage from './routes/signup';


// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',  // Root path
    element: <Navigate to="/welcome" />,  // Redirect to /welcome when the app starts
  },

  {
    path: '/welcome',  // Route for WelcomePage
    element: <WelcomePage />,
  },

  {
    path: '/login',  // Route for LoginPage
    element: <LoginPage />,
  },

  {
    path: '/signup', //Route for SignupPage
    element: <SignupPage/>,
  },

  {
    path: '/main',
    element: <Main />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },

      {
        path: 'viewbinpage',
        element: <Viewbinpage/>,
      },

      {
        path: 'logpage',
        element: <Logpage/>
      },

      {
        path: 'inbox',
        element: <Inboxpage/>
      },

      {
        path: 'profile',
        element: <Profile/>
      },
     
      {
        index: true,
        element: <Dashboard />,  // Redirect to Dashboard when '/main' is accessed directly
      },
    ],
  },
  {
    path: '*',  // Catch-all route to handle undefined paths
    element: <div>404 Page Not Found</div>,  // You can also create a custom component here
  }
]);

// Use ReactDOM.createRoot to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
