import React from 'react'
import {projects} from '../portfolio'
import ProjectCard from './ProjectCard'


export default function Projects() {


  return (
    <div className='project' id='projects'>
     <h2>Projects</h2>
     <div className="cardContainer">
    {
      projects.map((project) => (
        <ProjectCard project={project} />
      ))
    }
    </div>
    </div>
  )
}
