import React from 'react'
import './Skills.css'



const Skills = () => {
  return (
    <div className='skills'>
        <hr></hr>
        <span className='header'>SKILLS</span>
        <div className='content'>
            <span>Languages
                    <li>JavaScript</li>
                    <li>HTML5/CSS3</li>
                    <li>SQL</li>
                    <li>PHP</li>
            </span>

            <span>FrontEnd frameworks     
                    <li>React</li>
                    <li>Vue</li>
                    <li>Bootstrap</li>
            </span>

            <span>BackEnd
                    <li>Node</li>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>MySQL</li>
                    <li>Postman</li>
                    <li>Laravel</li>
                    <li>MVC</li>
                    <li>API Rest</li>
            </span>

            <span>Agile, tools & good practices
                    <li>SCRUM & Kanban</li>
                    <li>SOLID</li>
                    <li>OOP</li>
                    <li>Atomic Design</li>
                    <li>Git & GitHub</li>
                    <li>Figma</li>
                    <li>PhotoShop</li>
                    <li>Trello, Asana & ClickUp</li>
                    <li>Slack</li>
            </span>
        </div>
    </div>
  )
}

export default Skills
