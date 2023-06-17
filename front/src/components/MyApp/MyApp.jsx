import React from 'react'
import './MyApp.css'
import Home from '../Home/Home'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'

const MyApp = () => {
  return (
    <div className='myApp'>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default MyApp