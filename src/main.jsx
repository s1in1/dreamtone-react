import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/root'
import {Home} from './Pages/Home/Home'
import ErrorPage from './Pages/Error/Error'
import { Catalog } from './Pages/Catalog/Catalog'
import { About } from './Pages/About/About'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/catalog',
        element: <Catalog/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
