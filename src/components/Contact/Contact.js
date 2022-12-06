import React from 'react'
import { Element } from 'react-scroll'
import './contact.css'
import { SiIndeed } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import mapp from './mapp.jpg'

const Contact = () => {
  return (
    <Element id='contact' className='contact'>            
            <div className='threeblock'>
                <div className='left'>

            <p className='get'>Get in touch</p>
            <div className='ag'>
            <div className='contact_1'>
                
                    <form>
                        <input className='box' id='name' type="text" placeholder='Name' required></input>
                        <input className='box' id='email' type='email' placeholder='Email' required></input>
                        <input className='box' id='phone' type='number' placeholder='Mobile Number'required></input>
                        <textarea id='message' rows={4} placeholder='Message me'></textarea>
                        <button id='submit'  type='submit'>SEND</button>
                    </form>
                
            </div>


            <div className='conatct_socialmedia'>

              <div className='onetwo'>
                <a className='sm1' href='https://www.naukri.com/mnjuser/profile?id=&altresid'>
  
  <span className="one"> <SiIndeed aria-hidden='true'/></span>

</a>
<a className='sm2'href='https://twitter.com/Aravint95752066'>
                
  <span class="two"> <BsTwitter/> </span>

</a>
</div>


<div className='threefour'>
<a className='sm3'href='https://www.instagram.com/julion_aravinth?utm_source=qr'>
                 <span class="three"> <BsInstagram/> </span>

</a>
<a className='sm4' href='https://www.linkedin.com/in/aravinth-samy-7a779916b'>
  <span class="four"> <BsLinkedin/> </span>

</a>
</div>

<div className='fivesix'>
<a className='sm5' href='https://dribbble.com/Arav_keer2'>
  <span class="five"> <BsDribbble/> </span>

</a>
<a className='sm6' href='https://github.com/Aravkeer2'>
                  <span class="six"> <BsGithub/> </span>

</a>
</div>               
  
                
            </div>
            </div>
            </div>
            
            <div className='conatct_address'>
            <p className='i'> where I am?</p>
                <p className='B'>Bommanahalli, Bangalore</p>
                <a href="https://www.google.co.in/maps/place/COMFORTS+APARTMENTS,+CYPRUS+OAK,+Vishwapriya+Nagar,+Begur,+Bengaluru,+Karnataka+560068/@12.8867692,77.6265852,17.97z/data=!4m5!3m4!1s0x3bae14c9afdc11a3:0x91d68408166b2b6!8m2!3d12.8860763!4d77.628688?hl=en-GB" >
          <div className='mapp'><img src={mapp} alt="ji"/>
          </div>
        </a>
            </div>
            <div>
              
            </div>
            

        </div>
        
        
        
        

        <h1 className='quo'>
"A little progress each day adds up to big results"

</h1>

    </Element>
  )
}

export default Contact