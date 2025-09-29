import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DefaultLayouts() {
  return (
    <div>
       <Sidebar></Sidebar>
       <div
         style={{
                 marginLeft:'200px',
                 marginTop:'-39rem', 
               }}
       >
          <Navbar></Navbar>
       </div>
       <div
          style={{marginLeft:'210px'}}
       >
          <Outlet/>
       </div>
    </div>
  )
}
