import React from 'react'
import AudioPlayer from './AudioPlayer'
import './JonesAnthem.css'

function JonesAnthem() {
    return (
        <div className='audio-container'>
            <div className='title-text'>
                Jones College Anthem
                {/* <p className='download-txt'>download it&nbsp;
                    <a href='./audio/Jones+College+Anthem.mp3' download className='text-green'>here</a></p>  */}
            </div>
            <div className='audio-card'>
            <img src='./images/inferno_goat.png' height={'200px'} width={'200px'}></img>
            <div className='audio-text'>
                <h2 className='audio-title'>Jones Anthem</h2>
                <h3 className='audio-subtitle'>Jones College</h3>
            </div>
            <AudioPlayer />
            </div>
        </div>
        
    )
}

export default JonesAnthem
