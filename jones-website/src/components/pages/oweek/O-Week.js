import React , { useEffect, useState } from 'react';
import Modal from "react-modal";
import './O-Week.css';
import '../../../App.css';
import CoordCard from './CoordCard';
import GroupCard from './GroupCard';
import Footer from '../../Footer';
import LetterModal from './LetterModal';
import { CoordLetter, OWeekGroups, CoordBios } from './OWeekDataSheet';

export default function OWeek () {
    const [showLetterModal, setShowLetterModal] = useState(false);

    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
    },[])

    const openLetterModal = () => {
        setShowLetterModal(true);
    };
    const closeLetterModal = () => {
        setShowLetterModal(false);
    };
    return (
        <div>
        <div className='oweek-container'>
            <div className='flex-row'>
                <div className='flex-column'>
                    <CoordCard className="card" coord={CoordBios[0]}/>
                    <CoordCard className="card" coord={CoordBios[1]} />
                </div>
                <CoordCard className="card" coord={CoordBios[2]}/>
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
                <div style={{textAlign:'center'}}>
                    <button className='open-letter-text' onClick={openLetterModal}>Read More</button>
                </div>
            </div>
            <Modal
            isOpen={showLetterModal}
            className="advisor-modal"
            onRequestClose={closeLetterModal}
            centered
            >
                <LetterModal closeModal={closeLetterModal}/>
            </Modal>

        </div>
        <div className='o-week-grid-container'>
            <div className='o-week-group-grid'>
            {
                OWeekGroups.map((item, key)=> {
                    return(
                        <GroupCard 
                            img={item.img} 
                            name={item.name} 
                            members={item.members} 
                            profiles={item.profiles}
                            key={key}
                        />
                    )
                })
            }
        </div>
        </div>
        <Footer/>
    </div>
    )
}