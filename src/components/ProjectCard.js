import React from 'react'
import github from '../image/github.svg'
import demo from '../image/livePreview.svg'

export default function ProjectCard({project}) {

  const { name, description, stack, sourceCode, livePreview} = project

  return (
    <div className='projectCard'>
      <h4 className='projectName'>{name}</h4>
      <p className='projectDescription'>{description}</p>
      <div className="stack">
      {
        stack.map((s)=>(
          <p>{s}</p>
        ))
      }
      </div>
      <div className="projectLinks">
        <a href={sourceCode} aria-label='source code'
                  className='link link--icon'
                  target="_blank"
                  rel="noopener noreferrer" >
                  <img src={github} alt="Github" />
                  Source Code
        </a>
        <a href={livePreview} aria-label='source code'
                  className='link link--icon'
                  target="_blank"
                  rel="noopener noreferrer" >
                  <img src={demo} alt="Github" />
                  Demo
        </a>
      </div>
    </div>
  )
}
