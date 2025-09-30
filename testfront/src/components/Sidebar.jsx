import React from 'react'
import {FaUserTie, FaBalanceScale, FaPlane,FaCalendarAlt ,FaPhotoVideo   } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
                    <Link to="/app/dashboard" className='dash'>
                       <FaBalanceScale className='dash-icon'/>
                        <span>DASHBOARD</span>
                    </Link>
                </li>
                <li>
                <Link to="/app/voyage" className="dash">
                    <FaPlane className="dash-icon"/>
                    <span>VOYAGES</span>
                </Link>
                </li>
                <li>
                <Link to="/app/reservation" className="dash">
                    <FaCalendarAlt className="dash-icon"/>
                    <span>RESERVATION</span>
                </Link>
                </li>
                <li>
                <Link to="/app/photos" className="dash">
                    <FaPhotoVideo className="dash-icon"/>
                    <span>PHOTOS</span>
                </Link>
                </li>
            </ul>
        </nav>
    </aside>
  )
}
