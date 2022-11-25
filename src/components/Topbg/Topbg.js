import React from 'react'
import About from './About/About'
import { Element } from 'react-scroll'

import './topbg.css'

const Topbg = () => {
  return (
    <Element name='about' className='topbg'>
       <About/>
    </Element>
       
      
    
  )
}

export default Topbg
