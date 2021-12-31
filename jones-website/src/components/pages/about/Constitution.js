import React from 'react'
import Footer from '../../Footer';
import './Constitution.css'

function Constitution() {
    return (
        <>
        <div className='const-container'>
            <h1 className='const-title'>THE CONSTITUTION</h1>
            <p className='const-text'>The Jones Constitution details the laws of our land. It’s the way we make 
                most of our decisions, and how we put people in charge. From room draw procedures to the 
                most eccentric of Presidential duties, the Constitution has got it all. There are over 35 
                pages of carefully worded text to guide our college’s activity. The College Parliamentarian 
                is responsible for updating and changing the Constitution as he or she sees fit. The 
                Constitution is broken down into six main sections:</p>
            <div className='download-btns'>
                <a href='https://docs.google.com/document/d/1BLsb4rq-Fcj2wgF4A0kCxWFqpW3vI1I_s96o3qxUnug/' target='_blank'>
                    <button className='btn-d' >Constitution (PDF)</button>
                </a>
                <a href='https://docs.google.com/document/d/1sBOXhZnGkC-nO3L14g2DziKVOoi6bzKpwv7YbY5eYj8/' target='_blank'>
                    <button className='btn-d' >By-Laws (PDF)</button>
                </a>
                <a href='https://docs.google.com/document/d/1_H3TbtjjN2BL4JVot9IKGvlbtI_fs4jWj8zRYH2eh6g/' target='_blank'>
                    <button className='btn-d' >Code of Conduct (PDF)</button>
                </a>
            </div>
            <iframe src="https://docs.google.com/document/d/1BLsb4rq-Fcj2wgF4A0kCxWFqpW3vI1I_s96o3qxUnug/pub?embedded=true" width={'850px'} height={'600px'}></iframe>
            <iframe src="https://docs.google.com/document/d/1sBOXhZnGkC-nO3L14g2DziKVOoi6bzKpwv7YbY5eYj8/pub?embedded=true" width={'850px'} height={'600px'}></iframe>
            <iframe src="https://docs.google.com/document/d/1_H3TbtjjN2BL4JVot9IKGvlbtI_fs4jWj8zRYH2eh6g/pub?embedded=true" width={'850px'} height={'600px'}></iframe>
            
        </div>
        <Footer/>
        </>
    )
}

export default Constitution
