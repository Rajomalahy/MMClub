import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayouts from './layouts/DefaultLayouts'
import Dashboard from './pages/Dashboard'
import Photos from './pages/Photos'
import Reservation from './pages/Reservation'
import Voyage from './pages/Voyage'



const router = createBrowserRouter([
  {
    path : '/',
    element:<DefaultLayouts/>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/voyage',
        element:<Voyage/>
      },
      {
        path:'/reservation',
        element:<Reservation/>
      },
      {
        path:'/photos',
        element:<Photos/>
      },
    ]
  }
])
function App() {
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}

export default App

 
