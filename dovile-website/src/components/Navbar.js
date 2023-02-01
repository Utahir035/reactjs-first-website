import React,{useRef} from 'react';
import { FaTwitter,FaFacebook,FaInstagram,FaBars } from 'react-icons/fa';
import "./Navbar.css"
import {Link} from 'react-router-dom';

function Navbar() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  
  return (
    <>
    <nav className="navbar">
    <h1>DOVILE</h1>
    <button className='logo' onClick={showNavbar}>
    <FaBars/>
        </button>
        <div className='navbar-container' ref={navRef}>
          <ul>
          <li className='active'><Link to='/'>HOME</Link></li>
          <li><Link to='/Services'>SERVICES</Link></li>
          <li><Link to='/About'>ABOUT ME</Link></li>
          <li><Link to='/Contact'>CONTACT</Link></li>
          <li><Link to='/Blog'>BLOG</Link></li>

          </ul>

        </div>
       
        </nav>
  
        <div className='container'>
          <div className='content'>
          
          <h2>
          Hello, so good to<br></br> see you!
          </h2>
          <p className='para1'>
          I help small and medium-sized businesses grow their <br></br>audience and brand recognition through social media.
          </p>
          <Link to='/Contact'>
          <button className='b1'>Contact me</button></Link>
          </div>
          <div className='img1'></div>
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
          <h2>My name is Dovile</h2>
          <p>I'm your new social media bestie. My mission is to help small and medium-sized businesses grow<br></br>
            their audience and brand recognition through social media. To do that, I believe it's paramount to <br></br>
            create a committed and genuine community that has a positive influence on people’s lives beyond<br></br> the
             online sphere. My goal is to help you understand the power of social media and create<br></br> connections 
             that go beyond the internet.</p>
        </div>
        <div className='container4'>
        <div className='image2'></div>
          <div className='content2'>
          <h2>Services</h2>
          <p>From campaign planning and consultation to content<br></br> creation and extended social media campaigning,
           I'm here to<br></br> help your brand sound like you online.</p>
           <Link to='Services'>
           <button className='b2'>Read More</button></Link>
           </div>
        </div>

        <div className='container5'>
          <div className='content3'>
            <h2>Are you ready to...</h2>
            <div className='paras'>
            <h3>Create content that's visually pleasing?</h3>
            <p>It's not enough to just create an account and post<br/> 
            something. Your content needs to represents your<br/>
             brand and showcase your mission and values. And<br/>
            you want to do it in a way that stops the user in their<br/>
            tracks – with beautiful content.</p>
            <h3>Grow your brand and turn your audience into paying clients?</h3>
            <p>Selling online is different from traditional sales<br/>
             channels. But most of all, you need to gain your<br/>
              audience's trust if you want them to part with their<br/>
               dollar.</p>
            <h3>Get hold of your dream clients online?</h3>
            <p>Everybody is online, so why shouldn't you try to<br/>
             reach out to them? With a bigger reach than ever before,<br/>
              the world really is your oyster when it comes to <br/>
              selling online.</p>
            <h3>Invest in your brand and take your business<br/> to the next level?</h3>
            <p>Social media marketing is much more than simply <br/>
            posting about an upcoming sale. With the right<br/> approach,
             you can exponentially grow your bottom line.</p>
             </div>
          </div>
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
        <div className='container7'>
          <div className='image4'></div>
          <div className='content-s'>
            <p>”We went from having zero online presence to dominating our niche<br/>
             on Google. As a technophobe I never thought we could do it, but<br/>
              currently social media amounts for the majority of our sales.”</p>
              <h3>Nicollas Ductorn</h3>
              <p>Director of Corporate MarketingForge Inc.</p>
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


export default Navbar