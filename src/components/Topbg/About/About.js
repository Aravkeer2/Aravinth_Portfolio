import React from 'react'
import { Link } from 'react-scroll'
import './about.css'
import resume from './Aravindasamy.pdf'

const About = () => {
  return (
    <div className='mine'>
      <h1 className='mr'>Mr.Aravinth</h1>
      <h4 className='front'> Front-end Developer</h4>
    <a href={resume}>
      <button className='download'>Download CV</button>
      </a>

      <Link to='projects' smooth={true} duration={500}>
      <button className='work'>My Work</button>
      </Link>
</div>
    
  )
}

export default About
