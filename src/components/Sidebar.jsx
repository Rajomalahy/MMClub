import React from 'react'
import {FaUserTie, FaBalanceScale, FaPlane,FaCalendarAlt ,FaPhotoVideo   } from 'react-icons/fa'
import '../styles/Sidebar.css'

export default function Sidebar() {

  return (
    <aside className='sidebar'>
        <div className="sidebar-header">
          <FaUserTie className='admin' />
            <h3>JOHN DON</h3>
            <h5>johndon@gmail.com</h5>
        </div>
        <nav className='sidebar-nav'>
            <ul className='main'>
                <li className='active'>
                    <a href="/dashboard" className='dash'>
                       <FaBalanceScale className='dash-icon'/>
                        <span>DASHBOARD</span>
                    </a>
                </li>
                <li className='active'>
                    <a href="/voyage" className='dash'>
                    <FaPlane className='dash-icon'/>
                        <span>VOYAGES</span>
                    </a>
                </li>
                <li className='active'>
                    <a href="/reservation" className='dash'>
                        <FaCalendarAlt className='dash-icon'/>
                        <span>RESERVATION</span>
                    </a>
                </li>
                <li >
                    <a href="/photos"  className='dash'>
                        <FaPhotoVideo className='dash-icon'/>
                        <span>PHOTOS</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
  )
}
