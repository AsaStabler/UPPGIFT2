//import { useState } from 'react'


//Alt 1: 
/* 
function Test() {
  return (
    <>
      <h1>Hello World!</h1> 
    </>
  )
}   
*/

//Alt 2:
const Test = () => {
    //const [count, setCount] = useState(0)
  
    return (
      <>
        <h1>Hello World!</h1> 
        <p>Hello react!</p>
        <div className="bg-primary">TEST</div>
      </>
    )
  }
  
  export default Test