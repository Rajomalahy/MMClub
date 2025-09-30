import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DefaultLayouts() {
  return (
    <div style={{
      
      background: '#EDF9F3',
    }}>
       <Sidebar></Sidebar>
       <div
         
       >
          <Navbar></Navbar>
       </div>
       <div style={{
            marginLeft:'20rem',
            marginTop: '-48rem',
            background: '#EDF9F3',
            width:'90rem',
            height:'46rem',
          }}
          
       >
          <Outlet   />
       </div>
    </div>
  )
}
