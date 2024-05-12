import React from 'react'
import {about} from '../portfolio'
import resumeSvg from '../image/resume.svg'
import github from '../image/github.svg'
import linkedin from '../image/linkedin.svg'

export default function Home() {
  const { name, role, description, resume, social } = about
  return (
    <div className='home' id='home'>
        <h1 className='name'>
            Hi, I'm <br /><span>{name}</span>
        </h1>
        <h3 className='role'>
          {role}
        </h3>
        <p className='intro'>
            {description}
        </p>


        <div className='social'>
        {resume && (
          <a href={resume} target='_blank'>
              <img src={resumeSvg} alt="Resume" />
              Resume
          </a>
        )}

          {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github" />
                GitHub
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedIn" />
                LinkedIn
              </a>
            )}
            </>
        )}
        </div>
    </div>
  )
}
