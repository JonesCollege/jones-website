import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Contact us
                </p>
                <p className='footer-subscription-text'>
                    right here
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email"
                        placeholder='Your Email'
                        className='footer-input' />
                    <Button buttonStyle='btn--outline'>Send</Button> 
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/contact'>How it works</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Jones
                        </Link>
                    </div>
                    <div className="social-icons">
                       <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                        <i  className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                        <i  className='fab fa-instagram' />
                        </Link>  
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Footer
