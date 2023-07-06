import React , { useEffect, useState } from 'react';
import Modal from "react-modal";
import './O-Week.css';
import '../../../App.css';
import CoordCard from './CoordCard';
import GroupCard from './GroupCard';
import Footer from '../../Footer';
import LetterModal from './LetterModal';
import { CoordLetter, OWeekGroups, CoordBios, PAAs, Gophers } from './OWeekDataSheet';
import {MdDownload} from 'react-icons/md'

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
    const text = 'hello'
    return (
        <div>
        <div className='oweek-container'>
            <div className='coord-display'>
                <div className='coord-row'>
                    <div className='coord-column'>
                        <CoordCard coord={CoordBios[0]}/>
                        <CoordCard coord={CoordBios[1]} />
                    </div>
                    <CoordCard coord={CoordBios[2]}/>
                </div>
            </div>
            
            <div className='oweek-text-container'>
                <h1 className='oweek-h1'>
                    OWEEK
                </h1>
                <h3 className='oweek-h3'>
                    WELCOME FUTURE JONESIANS!
                </h3>
                <div className='oweek-letter-box'>
                {CoordLetter.text.split('\n').map(line => <p className='oweek-p' key={line}>{line}<br/></p>)}                </div>
                <div style={{textAlign:'center'}}>
                    <button className='open-letter-text' onClick={openLetterModal}>Read More</button>
                </div>
            </div>
            <Modal
            isOpen={showLetterModal}
            className="letter-popup"
            onRequestClose={closeLetterModal}
            centered
            >
                <LetterModal closeModal={closeLetterModal}/>
            </Modal>

        </div>
        <div className='o-week-grid-container'>
            <h2 className='oweek-h2'>MEET YOUR ADVISORS</h2>
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
        <h2 className='oweek-h2'>OWEEK AFFILIATES</h2>
        <div className='oweek-affiliate-container'>
            <h2 className='oweek-h4'>OWEEK PEER ACADEMIC ADVISORS</h2>
            <div className='oweek-paa-grid'>
                {
                PAAs.map((item, key) => {
                    const bgImg = {
                        backgroundImage: `url(${item.img})`,
                        backgroundPosition:"center",
                        backgroundSize: "cover",
                      }
                    return(
                        <div className='oweek-affiliate-profile' key={key}>
                            <div className='advisor-img' style={bgImg}/>
                            <p className='oweek-affiliate-name'>{item.name}</p>
                            <p className='oweek-affiliate-email'>{item.email}</p>
                            <p className='oweek-affiliate-majors'>{item.major}</p>
                        </div>
                    )   
                })
                }
            </div>
            <h2 className='oweek-h4'>GOPHERS</h2>
            <div className='oweek-gopher-grid'>
                {
                Gophers.map((item, key) => {
                    const bgImg = {
                        backgroundImage: `url(${item.img})`,
                        backgroundPosition:"center",
                        backgroundSize: "cover",
                      }
                    return (
                        <div className='oweek-affiliate-profile' key={key}>
                            <div className='advisor-img' style={bgImg}/>
                            <p className='oweek-affiliate-name'>{item.name}</p>
                            <p className='oweek-affiliate-majors'>{item.major}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
        <div className='oweek-book-container'>
            <div className='book-title-container'>
                <h2 className='oweek-book-title'>OWEEK BOOK</h2>
                <a 
                    className='book-download-button' 
                    target="_blank"
                    rel="noreferrer" 
                    href='https://drive.google.com/file/d/1u-HmxieeziywHnF7iUEhzBzPjs4N6iSq/view?usp=sharing'>
                    <MdDownload className='book-download-icon'/>
                </a>
            </div>
            <iframe className='oweek-flipbook' title='Jones O-Week Book' src="https://publuu.com/flip-book/181965/446672/page/1?embed" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe>
            </div>
        <Footer/>
    </div>
    )
}