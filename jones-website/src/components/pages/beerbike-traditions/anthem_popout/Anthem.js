import React from 'react'
import { useState, useEffect } from 'react';
import {BsPlayFill, BsPauseFill, BsChevronRight, BsChevronLeft, BsDownload} from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import {Box, Slider, createTheme, ThemeProvider } from '@mui/material'
import './Anthem.css'
import 'animate.css';
import { display } from '@mui/system';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const toggle = () => setPlaying(!playing)
    
    useEffect(() => {
        playing ? audio.play() : audio.pause();
        },
        [playing]
    );
    
    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        audio.addEventListener('timeupdate', () => setCurrentTime((audio.currentTime / audio.duration) * 100))
        return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);
    return [audio, playing, currentTime, toggle];
};

function Anthem() {
    const [audio, playing, currentTime, toggle] = useAudio('/audio/Jones+College+Anthem.mp3');
    const [collapse, setCollapse] = useState(false)
    const theme = createTheme({
        status: {
          danger: '#e53e3e',
        },
        palette: {
          primary: {
            main: '#0971f1',
            darker: '#053e85',
          },
            neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
        },
      });
    const handleCollapse = () => {
        setCollapse(!collapse)
        console.log(collapse)
    }

    return (
        <div className={`anthem-container ${collapse? 'anthem-out': 'anthem-in'}`}>
            <div className='anthem-box'>
                <div className='anthem-contents'>
                <p className='anthem-rotated'>
                    Jones College Anthem <a className='anthem-download' href="/audio/Jones+College+Anthem.mp3" download><HiDownload /></a>
                </p>
                <Box sx={{ height: 250, display: 'flex', flexDirection:'column'}}>
                    <ThemeProvider theme={theme}>
                    <Slider
                        sx={{
                        '& input[type="range"]': {
                            WebkitAppearance: 'slider-vertical',
                        },
                        }}
                        orientation="vertical"
                        isTtb={true}
                        defaultValue={30}
                        track="inverted"
                        color="neutral"
                        value={currentTime}  
                        components={{Thumb: 'disabled'}}
                        onChange={(e) => {
                            const seekto = audio.duration * (+e.target.value / 100);
                            audio.currentTime = seekto;
                          }}
                        //onKeyDown={preventHorizontalKeyboardNavigation}
                    />
                    </ThemeProvider>
                    <button  onClick={toggle} className='anthem-play-pause'>
                    {playing ? <BsPauseFill color='white' className='anthem-icon'/> : <BsPlayFill color='white' className='anthem-icon'/>}
                </button>
                </Box>
                </div>
            </div>
            <button onClick={handleCollapse} className='anthem-icon-button'>
                {collapse? <BsChevronRight className='anthem-icon'/> : <BsChevronLeft className='anthem-icon'/>}
            </button>
        </div>
  )
}

export default Anthem
