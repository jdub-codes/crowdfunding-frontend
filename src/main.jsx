import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/HomePage.jsx"
import ProjectPage from "./pages/ProjectPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import CreateProjectPage from "./pages/CreateProjectPage.jsx"

import NavBar from"./components/NavBar.jsx"
import { AuthProvider } from "./components/AuthProvider.jsx"
import CreatePledge from "./components/CreatePledge.jsx"
// import DeletePledge from "./components/DeletePledge.jsx"
// import DeleteProject from "./components/DeleteProject.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element:<NavBar />,
    children: [
      { path:"/", element:<HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/create", element: <CreateProjectPage /> },
      { path: "/pledge", element: <CreatePledge /> },
      // { path: "/deletepledge", element: <DeleteProject /> },
      // { path: "/deleterpoject", element: <DeletePledge /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)