import React from 'react';
import CardItem from './CardItem';
import { Button } from './Button';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
        <h1>Welcome to Jones!</h1>
        <div className='banner-container'>
                <div className='banner-title'>
                    BLACK LIVES MATTER 
                </div>
                <div className='banner-btn'>
                    <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                    READ FULL STATEMENT
                    </Button>
                </div>
            
        </div>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem 
                src="images/jones_history.jpeg"
                text="Jones History"
                path='/'    
              />
            <CardItem 
                src="images/jones_historian.jpg"
                text="Pictures!"
                path='/'    
              />
            <CardItem 
                src="images/jones_rooms.jpg"
                text="Reserve a Room"
                path='/forms'    
              />
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Cards
