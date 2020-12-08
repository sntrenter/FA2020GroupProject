import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout/DashboardLayout';
import MainLayout from './layouts/MainLayout/MainLayout';
import DashboardView from './views/reports/DashboardView/DashboardView';
import Signin from './views/auth/Signup';
import NotFoundView from './views/errors/NotFoundView';
import RegisterLoginPage from './views/auth/RegisterLoginPage';


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> },
      
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'FA2020GroupProject', element: <RegisterLoginPage /> },
      { path: 'login', element: <RegisterLoginPage /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <RegisterLoginPage /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;