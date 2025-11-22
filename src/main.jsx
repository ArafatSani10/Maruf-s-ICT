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
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import AdminHome from './Components/AdminDashboard/AdminHome.jsx';
import BatchDashboard from './Components/AdminDashboard/BatchDashboard.jsx';
import StudentTable from './Components/AdminDashboard/StudentTable.jsx';
import Module from './Components/AdminDashboard/Module.jsx';
import BooksDash from './Components/AdminDashboard/BooksDash.jsx';
import Attendance from './Components/AdminDashboard/Attendance.jsx';
import Expenses from './Components/AdminDashboard/Expenses.jsx';
import SettingsPage from './Components/AdminDashboard/SettingsPage.jsx';
import SMSTemplate from './Components/AdminDashboard/SMSTemplate.jsx';
import BulkSMS from './Components/AdminDashboard/BulkSMS.jsx';

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
        path: '/instructor',
        element: <Instructors></Instructors>
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


  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'admin-home',
        element: <AdminHome></AdminHome>
      },

      {
        path: 'batch',
        element: <BatchDashboard></BatchDashboard>
      },

      {
        path: 'enrollment-student',
        element: <StudentTable></StudentTable>
      },

      {
        path: 'module',
        element: <Module></Module>
      },

      {
        path: 'books',
        element: <BooksDash></BooksDash>
      },

      {
        path: 'attendance',
        element: <Attendance></Attendance>
      },

      {
        path: 'expense',
        element: <Expenses></Expenses>
      },

      {
        path: 'landing-setting',
        element: <SettingsPage></SettingsPage>
      },

      {
        path: 'sms-template',
        element: <SMSTemplate></SMSTemplate>
      },

      {
        path: 'Bulk-SMS',
        element: <BulkSMS></BulkSMS>
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
