import Index from './components/page'
import DefaultLayouts from './layouts/DefaultLayouts'
import { createBrowserRouter, RouterProvider , redirect} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Photos from './pages/Photos'
import Reservation from './pages/Reservation'
import Voyage from './pages/Voyage'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Index/>,
    children:[
      {
      }
    ]
  },
   // 🔁 Redirections pour les anciens chemins (optionnel)
   {
    path: '/dashboard',
    loader: () => redirect('/app/dashboard'),
  },
  {
    path: '/reservation',
    loader: () => redirect('/app/reservation'),
  },
  {
    path: '/voyage',
    loader: () => redirect('/app/voyage'),
  },
  {
    path: '/photos',
    loader: () => redirect('/app/photos'),
  },
  {
    path:'/app',
    element:<DefaultLayouts/>,
    children:[
      {
        index: true, 
        element: <Dashboard />
       },
      { 
        path: 'dashboard', 
        element: <Dashboard /> 
      },
      { 
        path: 'voyage', 
        element: <Voyage /> 
      },
      {
       path: 'reservation',
       element: <Reservation /> },
      {
        path: 'photos', 
        element: <Photos /> 
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
