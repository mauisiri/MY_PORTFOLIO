import React from 'react'
import './Skills.css'
import SectionTitle from '../SectionTitle/SectionTitle';


const Skills = () => {
  return (
    <div className='skills'>
      <SectionTitle title="SKILLS"/>
        <div className='content'>

            <span>FrontEnd
                <li>JavaScript</li>    
                <li>HTML5/CSS3</li>
                <li>Bootstrap</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Vue</li>
                <li>JUnit</li>
                <li>Figma, PhotoShop</li>
            </span>

            <span>BackEnd
                <li>JavaScript</li>
                <li>Node</li>
                <li>PHP</li>
                <li>SQL</li>
                <li>MySQL</li>
                <li>Postman</li>
                <li>Laravel</li>
                <li>MVC</li>
                <li>API Rest</li>
            </span>

            <span>Tools & good practices
                <li>Agile</li>
                <li>SCRUM & Kanban</li>
                <li>SOLID</li>
                <li>OOP</li>
                <li>MVC</li>
                <li>Microservices</li>
                <li>Atomic Design</li>
                <li>Chat GPT / Gemini</li>
                <li>Slack, Teams</li>
                <li>Git & GitHub / Bitbucket</li>  
                <li>Trello, Asana & ClickUp</li>
                
            </span>
        </div>
    </div>
  )
}

export default Skills
