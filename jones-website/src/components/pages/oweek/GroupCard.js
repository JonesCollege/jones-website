import React, { useState } from 'react';
import Modal from "react-modal";
import AdvisorModal from './AdvisorModal';
import './GroupCard.css';
import 'animate.css';


function GroupCard(props) {
    console.log(props)
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
        backgroundImage: `url(${props.img})`,
        backgroundSize:"300px",
        backgroundRepeat:"no-repeat"
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
            <h4 className='group-name'>
                {props.name}
            </h4>
            <p className='group-members'>
                {props.members}
            </p> 
        </div>
        <Modal
            isOpen={showAdvisorModal}
            className="advisor-modal"
            onRequestClose={closeModal}
            centered
        >
            <AdvisorModal closeModal={closeModal} profiles={props.profiles} name={props.name}/>
        </Modal>
    </div>
  )
}

export default GroupCard