import React from 'react'
import { skills } from '../portfolio'

export default function Skills() {
  return (
    <div className='skills' id='skills'>
    <h2>Skills</h2>
    <div className="skillsList">
      {
        skills.map((skill) => (
          <span className='skill'>{skill}</span>
        ))
      }
      </div>
    </div>
  )
}
