
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {


  const [showmodel,setShowmodel]=useState(false)

  const handelshowmodel=()=>{
    setShowmodel(true)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
          <Child handelshowmodel={handelshowmodel} showmodel={showmodel}/>
        </div>

    </div>
  )
}

const Child = ({handelshowmodel ,showmodel})=>{
  return (
    <>
    <h2>Child component</h2>
    <button onClick={handelshowmodel}>show model</button>

{
  showmodel &&(  
    <div>
  <h3>Model Content</h3>
  <p>This is the model content.</p>
  </div>

  )}
  </>

  )
}

export default App
