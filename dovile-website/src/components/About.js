import React,{useRef} from 'react'
import {Link} from 'react-router-dom';
import "./About.css";
import { FaTwitter,FaFacebook,FaInstagram,FaBars } from 'react-icons/fa';

function About() {
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
          <li className='active'><Link to='/About'>ABOUT ME</Link></li>
          <li><Link to='/Contact'>CONTACT</Link></li>
          <li><Link to='/Blog'>BLOG</Link></li>

          </ul>

        </div>
        
        </nav>
        <div className='containerA'>
          <div className='img11'></div>
          <div className='contentA'>
            <h2>So, who am I?</h2>
            <p>I'm your new social media bestie. My mission is to help small and<br/> 
              medium-sized businesses grow their audience and brand recognition<br/> 
             through social media. My goal is to help you understand the power of <br/> 
             social media and create connections that go beyond the internet.</p>
             <button className='b2'>Contact Me</button>
          </div>
        </div>
        <div className='container2'>
          <ul>
            <li className='feat'>Featured</li>
            <li className='lani'>Lani Haw</li>
            <li className='deon'>Deon Five</li>
            <li className='noxe'>KNOXEMUS</li>
          </ul>

        </div>
        <div className='container3'>
          <h2>Changing the digital world</h2>
          <p>I believe it's paramount to create a committed and genuine community that has a positive influence<br/>
           on people’s lives beyond the online sphere. With more people online than ever before, the<br/>
            competition for attention is fierce, and you have to work hard to appeal to the masses. That's why<br/>
             it's my goal to help you understand the power of social media and create connections that go<br/>
              beyond the internet.</p>
        </div>
        <div className='container6'>
        <div className='img3'></div>
          <div className='content4'>
            <h2>My blog</h2>
            <p>I'll let you in on some trade secrets and share my top tips on<br/>
             how to successfully promote your brand online.</p>
             <Link to='Blog'>
           <button className='b2'>Read Blog</button></Link>
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

export default About