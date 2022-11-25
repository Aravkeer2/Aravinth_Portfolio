import React from 'react'
import { Element } from 'react-scroll'
import pngegg from "../Skill/pngegg.png"
import { LinearProgress } from '@mui/material'
    

const Skill = () => {
  return (
    <Element className='skillspage' id='skills'>
        <div>
            <img src={pngegg} alt="" />
        </div>

        <div className='skillset'>
        <h2>SKILL SET</h2>
        
        <div>
            <h5>React</h5>
        <div>
            <LinearProgress variant="determinate" value={90}/>
        </div>
        </div>

        <div>
            <h5>JavaScript</h5>
        <div>
            <LinearProgress variant="determinate" value={90}/>
        </div>
        </div>

        <div>
            <h5>CSS</h5>
        <div>
            <LinearProgress variant="determinate" value={90}/>
        </div>
        </div>

        <div>
            <h5>HTML</h5>
        <div>
            <LinearProgress variant="determinate" value={90}/>
        </div>
        </div>

        <div>
            <h5>Java</h5>
        <div>
            <LinearProgress variant="determinate" value={90}/>
        </div>
        </div>

        <div>
            <h5>SQL</h5>
        <div>
            <LinearProgress variant="determinate" value={90}/>
        </div>
        </div>




        </div>
    </Element>
  )
}

export default Skill