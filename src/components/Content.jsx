import React, { useState } from 'react';
import '../styles/styles.css';
import cityscapes from '../assets/Cityscapes - Downtown.png';
import croods from '../assets/2111.w030.n002.246B.p1.246.jpg';

let images =  [ cityscapes, croods] 
function Content() {
  const [Current,setCurrent]= useState(0);

  let handle =()=>{
    setCurrent((Current)=>{
     return Current<images.length ? Current +1 : 0
    })
  }
  return (

    
    <div className='image-container'>
        <img src={images[Current]} alt='' onClick={handle}  />
        <button onClick={handle}>Click to Change</button>
    </div>
 
  )
}

export default Content