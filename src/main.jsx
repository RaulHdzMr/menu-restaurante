import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // 👈 Importar Router
import './index.css';


import Layout from './components/Layout.jsx'; 
// import HomePage from './pages/HomePage.jsx'; 
import MealsPage from './components/MealsPage.jsx'; 
import MealDetailsPage from './components/MealDetailsPage.jsx';
// import AboutPage from './components/AboutPage.jsx'; 


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      // {
      //   index: true, 
      //   element: <HomePage />, 
      // },
      {
        path: 'meals', 
        element: <MealsPage />, 
      },
      {
        
        path: 'meals/:mealId', 
        element: <MealDetailsPage />, 
      },
      // {
      //   path: 'about',
      //   element: <AboutPage />, 
      // },
  
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {}
    <RouterProvider router={router} /> 
  </StrictMode>
);
