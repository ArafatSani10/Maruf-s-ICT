import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Layout/Mainlayout.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import About from './Components/Pages/About/About.jsx';
import Batches from './Components/Pages/Batches/Batches.jsx';
import Books from './Components/Pages/Books/Books.jsx';
import ContactUs from './Components/Pages/ContactUs/ContactUs.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import Instructors from './Components/Pages/Instructors/Instructors.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },

      {
        path: '/batches',
        element: <Batches></Batches>
      },

      {
        path: '/books',
        element: <Books></Books>
      },

      {
        path:'/instructor',
        element:<Instructors></Instructors>
      },

      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>
      },

      {
        path: '/login',
        element: <Login></Login>
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
