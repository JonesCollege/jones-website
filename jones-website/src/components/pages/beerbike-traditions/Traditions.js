import React from 'react'
import "./Traditions.css"
import Tradition from "./Tradition"

const Traditions = () => {
  return (
    <div className="section">
        <h1>Traditions</h1>
        <div className="traditions">
            <Tradition/>
            <Tradition/>
            <Tradition/>
        </div>


    </div>
    
  )
}

export default Traditions