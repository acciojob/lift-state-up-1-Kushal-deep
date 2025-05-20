
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {


  const [showModal,setShowmodal]=useState(false)

  const handelshowmodal=()=>{
    setShowmodal(true)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
          <Child handelshowmodal={handelshowmodal} showModal={showModal}/>
        </div>

    </div>
  )
}

const Child = ({handelshowmodal ,showModal})=>{
  return (
    <>
    <h2>Child component</h2>
    <button onClick={handelshowmodal}>Show Modal</button>

{
  showModal &&(  
    <div>
  <h3>Modal Content</h3>
  <p>This is the modal content.</p>
  </div>

  )}
  </>

  )
}

export default App
