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
        <div className='project_card'>         
                <div className='text'>
                        <span className='project_title'>adoptacoder</span>
                        <span className='project_description'>This project was created to connect coders with enterprises which want to "take care of them", since both of them are looking for concret and special -soft and hard- skills and atmosphere.</span>
                        <span className='project_icons'>
                        <Html5 />
                        <Css />
                        <Js />
                        <React_i />
                        <Node />
                        </span>
                </div>
                <span className='project_img'>
                        <div>Imagen</div>
                </span>
        </div>
    </div>
  )
}

export default Projects
