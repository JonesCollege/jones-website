import React, { useState } from 'react';
import { Spring } from 'react-spring';
import './CoordCard.css';
import 'animate.css';

function CoordCard(props) {
    const [showText, setShowText] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);

    const bgImg = {
        backgroundImage: `url(${props.img})`,
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
                        Sarah Birenbaum
                    </h4>
                    <p className='coord-bio'>
                        Here is some text. Here is some more text. It is very interesting.
                    </p> 
                </div>

            </div>
        </div>
    </div>
  )
}

export default CoordCard