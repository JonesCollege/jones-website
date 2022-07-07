import React, { useState } from 'react';
import './CoordCard.css';
import 'animate.css';

function CoordCard({ coord }) {
    const [showText, setShowText] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);

    const bgImg = {
        backgroundImage: `url(${coord.img})`,
       backgroundPosition:"center",
                backgroundSize: "cover",
    }

  return (
      <div className='border-container'>
        <div 
            className='background-img'
            style={bgImg}
            onMouseOver={()=>{
                setShowText(true)
                setFirstLoad(true)
            }}
            onMouseOut={()=>setShowText(false)}
        >
            <div className={`text-bg animate__animated ${showText ? 'animate__slideInLeft' : `animate__slideOutLeft ${firstLoad? "" : "opacity-zero"}`}`}>
                <div className='text-container'>
                    <h4 className='coord-name'>
                        {coord.name}
                    </h4>
                    <p className='coord-bio' style={{fontSize:'12px'}}>
                        {coord.bio}
                    </p> 
                </div>

            </div>
        </div>
    </div>
  )
}

export default CoordCard