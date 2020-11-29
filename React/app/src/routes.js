import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout/DashboardLayout';
import MainLayout from './layouts/MainLayout/MainLayout';
import DashboardView from './views/reports/DashboardView/DashboardView';
import LoginView from './views/auth/LoginView';
import NotFoundView from './views/errors/NotFoundView';


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
      { path: 'FA2020GroupProject', element: <LoginView /> },
      { path: 'login', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <LoginView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;