// src/App.js
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import './index.css'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}> 
      <Route index element={<HomePage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Route>
  ),
  {
    basename: '/sculpt-dev',
  }
);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
