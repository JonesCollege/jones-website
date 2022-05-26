import React, { useState } from 'react';
import Modal from "react-modal";
import AdvisorModal from './AdvisorModal';
import './GroupCard.css';
import 'animate.css';


function GroupCard(props) {
    const [showText, setShowText] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const [showAdvisorModal, setShowAdvisorModal] = useState(false);

    const openAdvisorModal = () => {
        setShowAdvisorModal(prev => !prev);
    };
    const closeModal = () => {
        setShowAdvisorModal(false);
    };

    const bgImg = {
        backgroundColor: "red",
        backgroundImage: `url(${props.img})`,
    }

  return (  
    <div className='g-bg-img'
        style={bgImg}>  
        <div className={`g-text-card ${showText ? 'g-text-card-up' : `${firstLoad? "g-text-card-down" : ""}`}`}
            onMouseOver={()=>{
                setShowText(true)
                setFirstLoad(true)
            }}
            onMouseOut={()=>setShowText(false)}
            onClick={openAdvisorModal}
            
        >
            <h4 className='coord-name'>
                Sarah Birenbaum
            </h4>
            <p className='coord-bio'>
                Here is some text. Here is some more text. It is very interesting.
            </p> 
        </div>
        <Modal
            isOpen={showAdvisorModal}
            className="advisor-modal"
            onRequestClose={closeModal}
            centered
            
        >
            <AdvisorModal closeModal={closeModal} />
        </Modal>
    </div>
  )
}

export default GroupCard