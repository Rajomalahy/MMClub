import React from 'react'
import {FaBell , FaArrowCircleRight} from 'react-icons/fa'
import '../styles/Navbar.css'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation();

  //definir un mapping entre les chemin et les sous-titres
  const subtitleMap = {
    '/': 'Accueil',
    '/app/dashboard': 'Dashboard',
    '/app/voyage': 'Detail du voyages',
    '/app/reservation': 'Details du reservation',
    '/app/photos':'Details du Photos'
  }

    // Récupérer le sous-titre en fonction du chemin actuel
    const currentSubtitle = subtitleMap[location.pathname] || 'Page inconnue';

  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <span className=" navbar-title">{currentSubtitle}</span>
        </div>
        <div className="navbar-right">
             <FaBell />
             <FaArrowCircleRight />
        </div>
    </nav>
  )
}
