
import React from 'react';
import Navbar from './/components/Navbar';
import Services from './/components/Services';
import About from './/components/About';
import Contact from './/components/Contact'
import Blog from './/components/Blog'
import Pika from './/components/Pika'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/pika' element={<Pika/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Blog' element={<Blog/>}/>
      
      </Routes>

      </Router>
     
  )
}

export default App;
