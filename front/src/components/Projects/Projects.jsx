import React from 'react'
import './Projects.css'
import Html5 from '../Figures/Html5'
import Css from '../Figures/Css'
import Js from '../Figures/Js'
import React_i from '../Figures/React_i'
import Node from '../Figures/Node'
import MySql from '../Figures/MySql'
import Php from '../Figures/Php'
import Laravel from '../Figures/Laravel'
import adopt_home from '../../assets/projects/adoptacoder/home.jpeg'
import weCheck_projects from '../../assets/projects/weCheck/projectsPage.jpeg'




const Projects = () => {
  return (
    <div className='projects'>
        <hr></hr>
        <span className='header'>PROJECTS</span>
        <div className="container">
        <div className="projects_container">
        <div className='project_card'>         
                <div className='text'>
                        <span className='project_title'>[adopt/a/coder]</span>
                        <span className='project_description'>This project was created to connect coders with enterprises which want to "take care of them", since both of them are looking for concret and special -soft and hard- skills and atmosphere.</span>
                        
                        <button className='btn' >Demo
                        <a href="https://adoptacoder.vercel.app/" target="_blank" rel="noopener noreferrer"></a>
                        </button>

                        <button className='btn'>GitHub</button>
                        <a href="https://github.com/mauisiri/adoptacoder" target="_blank" rel="noopener noreferrer"></a>
                        <div className='icons_bg'>
                                <span className='project_icons'>
                                <Html5 />
                                <Css />
                                <Js />
                                <React_i />
                                <Node />
                                </span>
                        </div>
                </div>
                <span className='project_img'>
                <img src={adopt_home} alt=' '/>
                </span>
        </div>
        </div>
        <div className='project_card'>         
                <div className='text'>
                        <span className='project_title'>WeCheck</span>
                        <span className='project_description'>WeCheck is a rubric system for the critical evaluation of interfaces, this idea was developed by a research group from the Universitat Oberta de Catalunya. 
                        Different evaluators can review web pages and score them using this system. The customer needs a website where these rubrics can be entered, so that registered or unregistered users can evaluate websites and obtain a visual result of the evaluations, by evaluator and by average.
                        </span>

                        <button className='btn'>GitHub</button>
                        <a href="https://github.com/Rubrics-project/WeCheckUx" target="_blank" rel="noopener noreferrer"></a>

                        <span className='project_icons'>
                        <Js />
                        <React_i />
                        <Node />
                        <Laravel />
                        <MySql />
                        <Php />
                        </span>
                </div>
                <span className='project_img'>
                <img src={weCheck_projects} alt=' '/>
                </span>
        </div>
        </div>
    </div>
  )
}

export default Projects
