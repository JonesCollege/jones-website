import React , { useState } from 'react';
import Modal from "react-modal";
import './O-Week.css';
import '../../../App.css';
import CoordCard from './CoordCard';
import GroupCard from './GroupCard';
import Footer from '../../Footer';
import LetterModal from './LetterModal';
import { CoordLetter } from './OWeekDataSheet';

export default function OWeek () {
    const [showLetterModal, setShowLetterModal] = useState(false);

    const openLetterModal = () => {
        setShowLetterModal(prev => !prev);
    };
    const closeModal = () => {
        setShowLetterModal(false);
    };
    return (
        <div>
        <div className='oweek-container'>
            <div className='flex-row'>
                <div className='flex-column'>
                    <CoordCard className="card" img={"./images/des_mort.jpg"}/>
                    <CoordCard className="card" img={"./images/des_mort.jpg"}/>
                </div>
                <CoordCard className="card" img={"./images/des_mort.jpg"}/>
            </div>
            <div className='oweek-text-container'>
                <h1 className='oweek-h1'>
                    OWEEK
                </h1>
                <h3 className='oweek-h3'>
                    HELLO NEW JONESIANS!
                </h3>
                <div className='oweek-letter-box'>
                {CoordLetter.text.split(/\n/).map(line => <p className='oweek-p' key={line}>{line}<br/></p>)}
                </div>
                <div className='open-letter-text'>
                    <a style={{cursor:"pointer"}} onClick={openLetterModal}>Read More</a>
                </div>
            </div>
            <Modal
            isOpen={showLetterModal}
            className="advisor-modal"
            onRequestClose={closeModal}
            centered
            >
                <LetterModal closeModal={closeModal}/>
            </Modal>

        </div>
        <GroupCard />
        <Footer/>
    </div>
    )
}