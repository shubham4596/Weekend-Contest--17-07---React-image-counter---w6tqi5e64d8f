import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  let [size,setSize]= useState(0);
  let style ={
    height: 300 + size + "px",
    width: 300 + size + "px",
  }
  const handleClick = ()=>{
    size= size+2;
    setSize(size);
  }
  return (
    <div id="main">
      <img src={star}  height="300px" width="300px" onClick={handleClick} />
    </div>
  )
}


export default App;
