
import {useRef} from 'react'
import {Link} from 'react-router-dom';
import { FaTwitter,FaFacebook,FaInstagram,FaBars } from 'react-icons/fa';
import "./Contact.css";

function Contact() {
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
          <li className='active'><Link to='/Contact'>CONTACT</Link></li>
          <li><Link to='/Blog'>BLOG</Link></li>
          </ul>
        </div>
        </nav>
        <div className='containerC'>
          <div className='imgC-5'></div>
          <div className='contentC'>
            <h2>Leave me a<br/> message</h2>
          <form>
            <label>Name</label><br/>
            <input type={'text'} placeholder='Your name'></input><br/>
            <label>Your email*</label><br/>
            <input type={'email'} placeholder='Your email address'></input><br/>
            <label>Message*</label><br/>
            <textarea className='message' type={'message'} placeholder='Enter your message'></textarea><br/> 
          </form>
          <button className='b2'>Submit</button>
          </div>
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

export default Contact