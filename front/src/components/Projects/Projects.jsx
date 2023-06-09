import React from 'react'
import './Projects.css'
import Html5 from '../Figures/Html5'
import Css from '../Figures/Css'
import Js from '../Figures/Js'
import React_i from '../Figures/React_i'
import Node from '../Figures/Node'
import project_img from '../../assets/projects/adoptacoder/home.jpg'

const Projects = () => {
  return (
    <div className='projects'>
        <hr></hr>
        <span className='header'>PROJECTS</span>
        <div className='project_card'>         
                <div className='text'>
                        <span className='project_title'>[adopt/a/coder]</span>
                        <span className='project_description'>This project was created to connect coders with enterprises which want to "take care of them", since both of them are looking for concret and special -soft and hard- skills and atmosphere.</span>
                        
                        <button className='btn' >Demo
                        <a href="https://adoptacoder.vercel.app/" target="_blank" rel="noopener noreferrer"></a>
                        </button>

                        <button className='btn'>GitHub</button>
                        <a href="https://github.com/mauisiri/adoptacoder" target="_blank" rel="noopener noreferrer"></a>

                        <span className='project_icons'>
                        <Html5 />
                        <Css />
                        <Js />
                        <React_i />
                        <Node />
                        </span>
                </div>
                <span className='project_img'>
                <img src={project_img} alt=' '/>
                </span>
        </div>
    </div>
  )
}

export default Projects
