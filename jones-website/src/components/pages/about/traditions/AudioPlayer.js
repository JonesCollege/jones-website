import React, {useEffect, useState, useRef} from 'react'
import song from './audio/Jones+College+Anthem.mp3'
import './AudioPlayer.css'
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"

function AudioPlayer() {
  // state  
  const [isPlaying, setIsPlaying]= useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  //references
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef(); 
  const playPauseBtn = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`; 
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

   const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value); 
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) - 15;
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 15;
    changeRange();
  }

    return (
      <div className='audioPlayer'>
        <audio ref={audioPlayer} src={song} preload='metadata'></audio>
        
        <div className='audioBar'>
          <div>
            <input className='progressBar' type='range' defaultValue='0' ref={progressBar} onChange={changeRange}/>
          </div>
          <div className='time'>
            <div className='currentTime'>{calculateTime(currentTime)}</div>
            <div className='duration'>{duration && !isNaN(duration) && calculateTime(duration)}</div>
          </div>
        </div>
        
        <div className='playBar'>
          <button className='forwardBackward' onClick={backThirty}><img src='./images/backward15.png' height={'60px'} width={'60px'}/></button>
          
          <button className='playPause' onClick={togglePlayPause} ref={playPauseBtn}>
            { (isPlaying) ? <FaPause/> : <FaPlay className='play'/> }
          </button>

          <button className='forwardBackward' onClick={forwardThirty}><img src='./images/forward15.png' height={'60px'} width={'60px'}/></button>
        </div>
        

      </div>
    );
    }

export default AudioPlayer
