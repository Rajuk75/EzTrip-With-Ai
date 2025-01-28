import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CreateTrip from './create-Trip/index.jsx'
import Header from './components/custom/Header.jsx'


import {RouterProvider,createBrowserRouter} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Home route
  },
  {
    path: "/create-trip",
    element: <CreateTrip/>, // Another component, e.g., About.jsx
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
