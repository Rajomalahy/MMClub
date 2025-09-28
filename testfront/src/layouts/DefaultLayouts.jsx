import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DefaultLayouts() {
  return (
    <div>
       <Sidebar></Sidebar>
       <div
         
       >
          <Navbar></Navbar>
       </div>
       <div style={{
            marginLeft:'20rem',
            marginTop: '-48rem'
          }}
          
       >
          <Outlet   />
       </div>
    </div>
  )
}
