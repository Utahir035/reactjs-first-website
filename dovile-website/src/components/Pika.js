import React from 'react'
import './Pika.css'
import logo from './logo.png'

import {Link} from 'react-router-dom';

function Pika() {
  return (

    <>
    <nav className="nav">
        <div className='navbar-container1'>
          <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/Services'>SERVICES</Link></li>
          <li><Link to='/About'>ABOUT ME</Link></li>
          <li><Link to='/Contact'>CONTACT</Link></li>
          <li><Link to='/Blog'>BLOG</Link></li>

          </ul>

        </div>
        
        </nav>
        <div>
          <img src={logo}></img>
        </div>
    
    </>
    
  )
}

export default Pika