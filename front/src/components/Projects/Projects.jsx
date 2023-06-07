import React from 'react'
import './Projects.css'
import Html5 from '../Figures/Html5'
import Css from '../Figures/Css'
import Js from '../Figures/Js'
import React_i from '../Figures/React_i'
import Node from '../Figures/Node'

const Projects = () => {
  return (
    <div className='projects'>
        <span className='header'>PROJECTS</span>
        <div className='card'>
            <div>
                <span className='img'>Imagen</span>
                <span className='title'>Título</span>
                <span className='icons'>
                <Html5 />
                <Css />
                <Js />
                <React_i />
                <Node />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Projects
