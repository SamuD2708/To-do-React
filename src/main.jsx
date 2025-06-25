// PAGINE
import App from './App.jsx'
import About from './Pages/About.jsx'
import Today from './Pages/Today.jsx'
import Completed from './Pages/Completed.jsx'
import ToComplete from './Pages/ToComplete.jsx'
import Contact from './Pages/Contact.jsx'
import AllTask from "./Pages/AllTask.jsx"
import { Provider } from 'react-redux'

// FILE CSS
import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Store from './Redux/Store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Today></Today>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/today',
        element: <Today></Today>
      },
      {
        path: '/completed',
        element: <Completed></Completed>
      },
      {
        path: '/tocomplete',
        element: <ToComplete></ToComplete>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/alltask',
        element: <AllTask></AllTask>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
