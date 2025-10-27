import React, {useState} from 'react'
import "./MyComponent.css"
const MyComponent = () => {
    
    const [number, setNumber]= useState(1)
    const plus2 = ()=> {
        setNumber(number+2) 
      
    }
     const mul5 = ()=> {
        setNumber(number*5) 
      
    }
  const div2 = ()=> {
        setNumber(number/2) 
      
    }
    const salom = ()=> {
        setNumber("Salom") 
      
    }
    return (
  
    <div>
       
      <p>Number: {number}</p>
      <div className='buttons'>
    <button onClick={plus2}>+2</button>
 <button onClick={mul5}>*5</button>
  <button onClick={div2}>/2</button>
   <button onClick={salom}>Salom</button>
    </div></div>
  )
}

export default MyComponent
