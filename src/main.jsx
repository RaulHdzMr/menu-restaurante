import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './index.css';
import './App.css';


import Layout from './components/Layout.jsx'; 
// import HomePage from './pages/HomePage.jsx'; 
import MealsPage from './components/MealsPage.jsx'; 
import MealDetailsPage from './components/MealDetailsPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import CategoriesPage from './components/CategoriesPage.jsx';
import CategoryPage from './components/CategoryPage.jsx'; 


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true, 
        element: <Navigate to="/meals" replace />, 
      },
      {
        path: 'meals', 
        element: <MealsPage />, 
      },
      {
        
        path: 'meals/:mealId', 
        element: <MealDetailsPage />, 
      },
      {
        path: 'about',
        element: <AboutPage />, 
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
      },
      {
        path: 'category/:categoryName',
        element: <CategoryPage />,
      },
  
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
