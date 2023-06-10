import React from 'react'
import { contact } from '../portfolio'

export default function Contact() {
  const {email} = contact
  return (
    <div className='contact' id='contact'>
    <h2>Contact</h2>
    <button><a href={`mailto:${email}`}>Send email</a></button>
    </div>
  )
}
