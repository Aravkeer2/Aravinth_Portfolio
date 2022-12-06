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
        <p>Calculator</p>
        </div>
        
<div className='ttt'>
        <a href="https://github.com/Aravkeer2/Tic-Tok-Toe" >
        <div className='tttt'>
        <img src={ttt} alt="ji"/>
        </div>
        </a>
        <p>Tik-Tok-Toe</p>
        </div>
        <h3 className='c'>Created a simple Tic-Tok-Toe App using JAVA & XML in Android Studio </h3>
        <h3 className='b'>Created a simple Calculator App using JAVA & XML in Android Studio </h3>
        
        </div>
<div className='divide2'>
<p>Simple websites</p><div className='pf'>
        <a href="https://github.com/Aravkeer2/arav" >
          <div className='pff'><img src={web} alt="ji"/>
          </div>
        </a>
        <p>Portfolio</p>
        </div>
        <h3 className='d'>Created a Portfolio  using HTML, CSS and ReactJS in VScode </h3>
                        
        </div></div>
  )
}

export default ProjectContainer