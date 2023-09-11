import React from 'react'
import { useState } from 'react'

const orange = {color:'orange'}
const blue = {color:'blue'}

function Language() {
    

   const [colorr, setColor] = useState(orange)
                   
  return (
    <div onMouseEnter={ () => setColor(blue)}>
        <select 
        style={{marginLeft:'1300px',colorr, border:'none'}}>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Telagu</option>
        </select>
    </div>
  ) 

}

export default Language
