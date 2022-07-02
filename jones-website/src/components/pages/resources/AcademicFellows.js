import React from 'react'
import './AcademicFellows.css';




function AcademicFellows () {
    return (
        <div className='fellows-desc-container'>
            <div className="left-green-box">
                <h3 className = "h3-left-green-title" >ACADEMIC FELLOWS</h3>
                <p className = "p-left-green-text">
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
                <ul className='p-right-text'>
                    <p className='p-right-li-title'>The Jones Academic Fellows:</p>
                    <li className='p-right-li'>Serve as tutors, peer editors, and mentors for fellow Jonesians</li>
                    <li className='p-right-li'>Provide academic assistance through review sessions and individual tutoring sessions </li>
                    <li className='p-right-li'>Provide information about post-graduation opportunities by connecting students to knowledgable community members within a particular field</li>
                    <li className='p-right-li'>Host talks from faculty members or associates concerning a current event or a topic of interest to the Jones community</li>
                </ul>
                <a href = 'https://docs.google.com/spreadsheets/d/1V6dX2OWrP0T_kq5Y-VJLCRTUwkPVFkrl2320KY8hdpk/edit#gid=0' rel="noreferrer" target = '_blank'>
                    <button className='fellows-right-button'>View Office Hours</button>
                </a>
            </div>
        </div>
    )
}

export default AcademicFellows

