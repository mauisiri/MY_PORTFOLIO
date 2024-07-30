import React from 'react'
import Home from './Home/Home'
import Header from './Header/Header'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Interaction from './Interaction/Interaction'

const MyApp = () => {
  return (
    <div className='myApp'>
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Interaction />
      <Contact />
    </div>
  )
}

export default MyApp