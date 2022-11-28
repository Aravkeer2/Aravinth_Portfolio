import React from 'react'
import { Element } from 'react-scroll'
import pngegg from "../Skill/pngegg.png"
import { LinearProgress } from '@mui/material'
import './skill.css'
    

const Skill = () => {
  return (
    <Element className='skillspage' id='skills'>
        <div className='image'>
            <img src={pngegg} alt="" width={550} height={650} />
        </div>

        <div className='skillset'>
        <h2>SKILL SET</h2>
        
        <div className='skillset__react'>
            <h5>React</h5>
        <div>
            <LinearProgress variant="determinate" value={50}/>
        </div>
        </div>

        <div className='skillset__javascript'>
            <h5>JavaScript</h5>
        <div>
            <LinearProgress variant="determinate" value={50}/>
        </div>
        </div>

        <div className='skillset__css'>
            <h5>CSS</h5>
        <div>
            <LinearProgress variant="determinate" value={80}/>
        </div>
        </div>

        <div className='skillset__html'>
            <h5>HTML</h5>
        <div>
            <LinearProgress variant="determinate" value={95}/>
        </div>
        </div>

        <div className='skillset__java'>
            <h5>Java</h5>
        <div>
            <LinearProgress variant="determinate" value={40}/>
        </div>
        </div>

        <div className='skillset__sql'>
            <h5>SQL</h5>
        <div>
            <LinearProgress variant="determinate" value={50}/>
        </div>
        </div>




        </div>
    </Element>
  )
}

export default Skill