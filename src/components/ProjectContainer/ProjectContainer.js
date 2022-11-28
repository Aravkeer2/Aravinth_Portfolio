import React from 'react'
import ttt from './ttt.jpg'
import web from './web.png'
import calc from './calc.jpg'

import './projectcontainer.css'
const ProjectContainer = () => {
  return (
    <div className='projects'>
      
      
    <div className='divide1'>
    <p>Simple Android Apps</p>
    <div className='calc'>
      <a href="https://github.com/Aravkeer2/Calculator" >
        <div className='calcc'>
          <img src={calc} alt="ji"/>
        </div>
        
        </a>
        <p>calculator</p>
        </div>
<div className='ttt'>
        <a href="https://github.com/Aravkeer2/Tic-Tok-Toe" >
        <div className='tttt'>
        <img src={ttt} alt="ji"/>
        </div>
        </a>
        <p>tik-tok-toe</p>
        </div>
        </div>
<div className='divide2'>
<p>Simple websites</p><div className='pf'>
        <a href="https://github.com/Aravkeer2/arav" >
          <div className='pff'><img src={web} alt="ji"/>
          </div>
        </a>
        <p>portfolio</p>
        </div>
                        
        </div></div>
  )
}

export default ProjectContainer