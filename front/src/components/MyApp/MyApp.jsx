import React, { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './MyApp.css'
import Home from '../Home/Home'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'

const MyApp = () => {
  /*  
  const contactSection = useRef(null);

  const goToContactSection = () =>
    window.scrollTo({
      top: contactSection.current.offsetTop, behavior: "smooth",
    })
   */
  const contactRef = useRef(null);



  return (
    <div className='myApp'>


      <Header />

      <Router>
        <Routes>
          <Route exact path={["/#home", "/#contact"]}>
          <Route exact path='/#home' element={<Home mainRef={contactRef}/>}/>
          
            
          </Route>
        </Routes>
      </Router>

      <Projects />
      <Skills />
      <Contact />


    </div>
  )
}

export default MyApp