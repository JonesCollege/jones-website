import React from 'react'
import './Resources.css';

function Fellows () {
    return (
        <div className='resource-desc-container'>
            <div className="resource-left-green-box">
                <h3 className = "resource-h3-title" >ACADEMIC FELLOWS</h3>
                <p className = "resource-p-text">
                    Each residential college has an academic fellows or mentors society—an honorary service organization dedicated to the promotion of 
                    intellectual and scholastic endeavors. Jones Fellows are juniors and seniors who have proven academic achievement, college citizenship, 
                    an interest in academic life of Jones college, and a willingness to help fellow students. Perhaps most importantly, they are a group of 
                    students who have excelled in their respective disciplines and who are willing to offer aid to whoever should need it.
                    <br/><br/>
                    Unlike the PAAs, Fellows do not specialize in academic advising, meaning they are not generally experts on class selection or scheduling. 
                    Rather, the Academic Fellows are people who have taken and aced that difficult introductory course which keeps you up late on a Saturday night, 
                    and they want to help you succeed in it as well. Feel free to contact any of your Fellows whenever you may need them!
                </p>
            </div>
            <div className='p-right-box'>
                <ul className='resource-p-text'>
                    <p className='resource-p-text'>The Jones Academic Fellows:</p>
                    <li className='resource-p-text'>Serve as tutors, peer editors, and mentors for fellow Jonesians</li>
                    <li className='resource-p-text'>Provide academic assistance through review sessions and individual tutoring sessions </li>
                    <li className='resource-p-text'>Provide information about post-graduation opportunities by connecting students to knowledgable community members within a particular field</li>
                    <li className='resource-p-text'>Host talks from faculty members or associates concerning a current event or a topic of interest to the Jones community</li>
                </ul>
                <a href = 'https://docs.google.com/spreadsheets/d/1M41oSg5dVmD5FTauyBtquQuUOpPLmcfJIFbE_CiOQeQ/edit?usp=sharing' rel="noreferrer" target = '_blank'>
                    <button className='resource-button'>View Office Hours</button>
                </a>
            </div>
        </div>
    )
}

export default Fellows

