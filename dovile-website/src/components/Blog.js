import React,{useRef} from 'react'

import {Link} from 'react-router-dom';
import { FaTwitter,FaFacebook,FaInstagram,FaBars } from 'react-icons/fa';
import "./Blog.css";

function Blog() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <>
     <button className='logo' onClick={showNavbar}>
    <FaBars/>
        </button>
    <nav className="navbar">
    <h1>DOVILE</h1>
        <div className='navbar-container' ref={navRef}>
          <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/Services'>SERVICES</Link></li>
          <li><Link to='/About'>ABOUT ME</Link></li>
          <li><Link to='/Contact'>CONTACT</Link></li>
          <li className='active'><Link to='/Blog'>BLOG</Link></li>

          </ul>

        </div>
        
        </nav>
        <div className='containerB'>
          <Link to='/Pika'>
          <div className='blog1'>
            <div className='imgB1'></div>
            <h3>10 Ways to Improve Your Digital Marketing Strategy</h3>
            <p>Tired of not having a clear direction for your online marketing activities? It's easy to<br/> 
            regain focus and structure with our 10 tips.<br/>
            11/16/2021  1 min read</p>
          </div>
          <div className='blog2'>
            <div className='imgB2'></div>
            <h3>How I Built My Instagram Audience: A Lesson of Athenticity</h3>
            <p>While you might think that Instagram is only a visual platform, it's more a place for<br/>
             storytelling and authentic branding. Here's my story.<br/>
             11/16/2021  1 min read</p>
          </div>
          </Link>
        </div>
        <div className='container8'>
          <div className='column1'>
            <div className='box-1'></div>
            <div className='box-2'></div>
            <div className='box-3'></div>
            <div className='box-4'></div>

          </div>
          <div className='social-media'>
              <div>
            <a href='https://twitter.com/'><FaTwitter color='rgb(83, 83, 83)'/></a>
            </div>
            <div>
            <a href='https://facebook.com/'><FaFacebook color='rgb(83, 83, 83)'/></a>
            </div>
            <div>
            <a href='https://instagram.com/'><FaInstagram color='rgb(83, 83, 83)'/></a>
            </div>

          </div>
          <div className='Terms'>
          <a href=''>Terms and Conditions</a>
          </div>

        </div>

    </>
  )
}

export default Blog
