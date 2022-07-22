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
        setShowAdvisorModal(true);
    };
    const closeAdvisorModal = () => {
        setShowAdvisorModal(false);
    };

    const bgImg = { 
        backgroundImage: `url(${props.img})`,
        backgroundSize:"300px",
        backgroundRepeat:"no-repeat"
    }

  return (  
    <div>
    <div className='g-bg-img'
        style={bgImg}
        onMouseOver={()=>{
            setShowText(true)
            setFirstLoad(true)
        }}
        onMouseOut={()=>setShowText(false)}
        onClick={openAdvisorModal}
        >  
        <div className={`g-text-card ${showText ? 'g-text-card-up' : `${firstLoad? "g-text-card-down" : ""}`}`} 
        >
            <h4 className='group-name'> 
                {props.name}
            </h4>
            <p className='group-members'>
                {props.members}
            </p> 
        </div>
        </div>
        <Modal
            isOpen={showAdvisorModal}
            onRequestClose={closeAdvisorModal}
            className='advisor-popup'
            centered
        >
            <AdvisorModal closeModal={closeAdvisorModal} profiles={props.profiles} name={props.name}/>
        </Modal>
    </div>
  )
}

export default GroupCard