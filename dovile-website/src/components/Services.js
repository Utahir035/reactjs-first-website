import {useRef} from 'react'
import React from 'react'
import "./Services.css"
import { FaTwitter,FaFacebook,FaInstagram,FaBars } from 'react-icons/fa';


import {Link} from 'react-router-dom';

function Services() {
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
          <li className='active'><Link to='/Services'>SERVICES</Link></li>
          <li><Link to='/About'>ABOUT ME</Link></li>
          <li><Link to='/Contact'>CONTACT</Link></li>
          <li><Link to='/Blog'>BLOG</Link></li>

          </ul>

        </div>
        
        </nav>

     <div className='box'>
        <div className='image2'></div>
          <div className='content2'>
          <h2>Services</h2>
          <p>From campaign planning and consultation to content<br></br> creation and extended social media campaigning,
           I'm here to<br></br> help your brand sound like you online.</p>
           <Link to='/Contact'>
           <button className='b2'>First consultation is free</button></Link>
           </div>
        </div>
        <div className='paras2'>
          <h2>Social Media Management</h2>
          <p>Whether you need help with planning the right kinds of campaigns for your social media accounts or need to<br/>
           establish a general social media strategy in the first place, I'll work closely with you to identify how we can scale<br/>
            your social media activities to a whole new level. </p>
          <div className='serv'>
          <h3>Services</h3>
          <p>
          • Audit of current social media activities<br/>
• Hashtag and strategy research<br/>
• Developing a personal strategy<br/>
• Content creation (including editing & social media graphics)<br/>
• Community management</p>

<h3>Duration</h3>
<p>
The initial contract is always for 3 months – this way, we can<br/>
 monitor together that we achieve the desired results. After the initial<br/>
  contract period, we continue on a monthly basis.
</p>
<h3>Add ons</h3>
<p>
• Daily engagement to grow your account<br/>
• Facebook Group management<br/>
• Blog post writing<br/>
• Newsletter creation<br/>
• Guide/Freebie creation<br/>
• Graphic design<br/>
</p>
<h3>Pricing</h3>
<p>On request – the total price depends on your business and needs.</p>
</div>
        </div>
        <div className='paras3'>
        <h2>Graphic design</h2>
          <p>It's true that a picture tells more than a thousand words – and on social media platforms like Instagram and<br/>
           Facebook, top graphics can make or break your content. In my work, I focus on creating visual assets that work <br/>
           cross-functionally across different platforms and communicate your brand in the best way possible. </p>
          <div className='serv2'>
          <h3>Services</h3>
          <p>• Social media graphic templates<br/>
• Facebook ads design<br/>
• Facebook covers and headers<br/>
• Instagram story highlight icons<br/>
• Product cover</p>
<h3>Pricing</h3>
<p>On request – the total price depends on your business and needs.</p>
<h3>Duration</h3>
<p>The initial contract is always for 3 months – this way, we can<br/> 
monitor together that we achieve the desired results. After the initial<br/>
 contract period, we continue on a monthly basis.</p>
 <Link to='/Contact'>
 <button className='b2'>View More</button></Link>
 </div>
 <div className='column'>
  <div className='box1'></div>
  <div className='box2'></div>
  <div className='box3'></div>
 </div>
        </div>
        <div className='portion'>
          <div className='image4'></div>
          <div className='content-s'>
            <p>”We went from having zero online presence to dominating our niche<br/>
             on Google. As a technophobe I never thought we could do it, but<br/>
              currently social media amounts for the majority of our sales.”</p>
              <h3>Nicollas Ductorn</h3>
              <p>Director of Corporate MarketingForge Inc.</p>
          </div>
        </div>
        <div className='portion2'>
        <div className='img10'></div>
          <div className='content-s2'>
        
          <h2>First consultation<br/> for free</h2>
          <p>
          People don't buy goods and services. They buy solutions and<br/> stories that you tell. 
          </p>
          <button className='b2'>Get yours</button>
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

export default Services