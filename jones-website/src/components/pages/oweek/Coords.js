import React from 'react'
import './Coords.css'

function Coords() {
    return (
        <div>
            <div className='content-container'>
                <div className='text-container'>
                <h1 className='c-title'>Meet the Coords</h1>
                <div className='text-body'>
                    <p className='c-text'>Hey everyone!</p>
                    <p className='c-text'>We are Christian Metoyer, Thomas Gill, and Tiffany Vuong, and we’re your Jones College O-Week 2021 Coordinators! 
                        We have been working tirelessly since January to prepare for your arrival and to help you make your transition 
                        to Rice amazing. This past year has been stressful and difficult for all of us, and we hope this O-Week is a good 
                        start to your transition to post-pandemic and college life. All of us and your advisors are SO excited to meet 
                        you and we cannot wait to show you why Jones is the best college at Rice! We all love Jones and want to share 
                        that with you. We hope you are as excited (being a little scared is also okay) as we are about you starting your 
                        life at Jones and at Rice - it will without a doubt be unforgettable! We will see you so soon, and if you have 
                        any questions for us, please reach out using our email jonescollegeoweek@gmail.com.</p>
                    <p className='c-text'>JIBA!</p>
                    <p className='c-text'>P.S. New Jonesians should join our Facebook group- Jones College DreamWorks StudiO-Week and follow our Instagram (@DreamWorksStudiOWeek) :)  </p>
                </div>
                </div>
                <div className='coord-pic'/>
            </div>
            <div className='magazine'>
                <div className='mag-header'>
                   <h2>O-Week Book</h2> 
                   <a href='https://drive.google.com/file/d/1OOL9gpVg8cZxUTcM0eat3IOeOJ4mpJeE/view?usp=sharing' target='_blank'>
                       <button className='btn-d' >Download (PDF)</button>
                   </a>
                </div>
                <iframe width="940px" height="400px" src="https://www.yumpu.com/en/embed/view/2BcjsFrteuXJgfx0" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe><a href="https://www.yumpu.com/en/document/view/65762197/o-week-book-2021" title="O Week Book 2021" target="_blank"></a>
            </div>
        </div>
    )
}

export default Coords
