import React from 'react'
import './App.css'
import { routes } from "./routes/index"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar"
// import Card from "./components/Card/Card"

const router = createBrowserRouter(routes)

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar /> */}
      {/* <Card /> */}

    </>
  )
}

export default App
