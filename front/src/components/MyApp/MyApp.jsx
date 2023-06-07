import React from 'react'
import './MyApp.css'
import Home from '../Home/Home'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'

const MyApp = () => {
  return (
    <div className='myApp'>
      <Header />
      <Home />
      <Skills />
    </div>
  )
}

export default MyApp