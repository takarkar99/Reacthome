import React from 'react';
import './NewFeature.css';
import { useState } from 'react';
import Image from './Image';
import Imagess from './Imagess';



const blue =  {color:'blue'}
const black = {color:'black'} 

function NewFeature() {

    const [color , setColor ] = useState(black)

  return (

    <div  align='center' className='container' >

        <Image/>
    

            <span className='borr' ><span id='new'>  New feature</span> shashwat routing  ---</span>
        
        <Imagess/>
        <br/>

        <h1 className='boldd'>Easy Scheduling ahead</h1>
        <br/>

        <pre>Shashwat is a NPO dedicated to environmental conservation and
            sustainable development, working tirelessly to protect and nurture our planet for future.</pre>

        <p>Sign up free with Google or Microsoft</p>
        <Image/>
        <button className='booll' style={color} onMouseEnter={ () => { setColor(blue)}} onMouseLeave={ () => {setColor(black)}}>Google</button>
        <button className='booll' style={color} onMouseEnter={ () => { setColor(blue)}} onMouseLeave={ () => {setColor(black)}}>Microsoft</button>
        <Imagess/>
        <p><span style={{color:'blue'}}>Sign up free with email.</span> No credit card required</p>
    </div>
        
  )
}

export default NewFeature
