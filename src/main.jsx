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
import Module from './Components/AdminDashboard/Module.jsx';
import BooksDash from './Components/AdminDashboard/BooksDash.jsx';
import Attendance from './Components/AdminDashboard/Attendance.jsx';
import Expenses from './Components/AdminDashboard/Expenses.jsx';
import SettingsPage from './Components/AdminDashboard/SettingsPage.jsx';
import SMSTemplate from './Components/AdminDashboard/SMSTemplate.jsx';
import BulkSMS from './Components/AdminDashboard/BulkSMS.jsx';
import Notice from './Components/AdminDashboard/Notice.jsx';
import IDCard from './Components/AdminDashboard/IDCard.jsx';
import SubscriptionPage from './Components/AdminDashboard/SubscriptionPage.jsx';
import RegistrationForm from './Components/Pages/Login/RegistrationForm.jsx';
import AdminHome from './Components/AdminDashboard/AdminHome/AdminHome.jsx';
import BatchDashboard from './Components/AdminDashboard/Batch/BatchDashboard.jsx';
import StudentTable from './Components/AdminDashboard/students/StudentTable.jsx';

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

      {
        path:'/register',
        element:<RegistrationForm></RegistrationForm>
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

      {
        path:'notice',
        element:<Notice></Notice>
      },

      {
        path:"id-Card",
        element:<IDCard></IDCard>
      },

      {
        path:'subscription',
        element:<SubscriptionPage></SubscriptionPage>
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
