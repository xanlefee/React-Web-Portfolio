import React from 'react';
import { NavLink } from 'react-router-dom';
import './pages/Style.scss'

function NavTabs() {
  return ( 
    <ul className="nav nav-tabs" >
      <li className="nav-item" >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="portfoliogallery"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="project"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project
        </NavLink>
      </li>
      
      
      
     
   

      <li className="nav-item">
        <NavLink
          to="contactform"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
      
    </ul>
    
  );
}

export default NavTabs;
