import React from 'react';
import './PeerResources.css';
import {Fellows} from './PeerNames';

function PeerResources() {
  return (
  <>
    <div className='peer-container'>
      <h1 className='peer-title'>Peer Resources</h1>
      <h3>Academic Fellows</h3>
      <p>Each residential college has an academic fellows or mentors society—an honorary service organization 
        dedicated to the promotion of intellectual and scholastic endeavors. Jones Fellows are juniors and 
        seniors who have proven academic achievement, college citizenship, an interest in academic life of 
        Jones college, and a willingness to help fellow students. Perhaps most importantly, they are a group of 
        students who have excelled in their respective disciplines and who are willing to offer aid to 
        whoever should need it.</p>
        <p>The Jones Academic Fellows:</p>
        <ul>
          <li>Serve as tutors, peer editors, and mentors for fellow Jonesians</li>
          <li>Provide academic assistance through review sessions and individual tutoring sessions</li>
          <li>Provide information about post-graduation opportunities by connecting students to knowledgable community members within a particular field</li>
          <li>Host talks from faculty members or associates concerning a current event or a topic of interest to the Jones community</li>
        </ul>
        <p>Unlike the PAAs, Fellows do not specialize in academic advising, meaning they are not generally experts on class selection 
          or scheduling. Rather, the Academic Fellows are people who have taken and aced that difficult introductory course which 
          keeps you up late on a Saturday night, and they want to help you succeed in it as well. Feel free to contact any of your 
          Fellows whenever you may need them!</p>
          <h4>Jones Academic Fellows</h4>
          <p>jonesacademicfellows@gmail.com</p>
          <p>Link to Office Hours</p>
          {
            Fellows.map((item, index) => {
                return(
                    <li key={index}>
                    <p>{item.name}</p>
                    <p>{item.subjects}</p>
                    <p>{item.email}</p>
                  </li>
                );
            })
          }
        <h3>Peer Academic Advisors</h3>
        <p>Serving as liaisons for the Office of Academic Advising, PAAs are students at each college that have been broadly 
          trained in numerous areas of academics here at Rice.  Generally speaking, your college PAA team coordinates numerous 
          group and individual activities that attempt to strengthen the academic vitality of your residential college. You 
          may find yourself seeking the advice of a PAA about:</p>
        <ul>
          <li>General graduation requirements</li>
          <li>Specific classes</li>
          <li>Research opportunities</li>
          <li>Studying abroad</li>
          <li>Professional school requirements</li>
          <li>Or any topic as it relates to academics</li>
        </ul>
        <p>Remember, even if a particular PAA cannot answer each and every one of your detailed questions, they can at least 
          serve as a helpful resource to point you in the right direction of someone else that can.  As you become more familiar 
          with academics here at Rice, we hope you begin to understand that academics, learning, and especially advising are all 
          ongoing dynamic conversations that involve multiple perspectives and not just a prescription for registrations.</p>


        <h3>Rice Health Advisors (RHAs)</h3>
        <p>Hey Jones! We are your Rice Health Advisors, a peer resource trained to assist you with wellbeing needs in college. 
          We’ve all participated  in a semester-long class at Rice to  receive training  and receive on-going training throughout 
          the year on the following topics:  </p>
        <ul>
          <li>Mental Health</li>
          <li>Drugs and Addiction</li>
          <li>Nutritional Wellness and Exercise</li>
          <li>Sexual Wellness and Healthy Sexuality</li>
          <li>Conflict Mediation</li>
          <li>Time Management</li>
          <li>Stress and Self-Care</li>
          <li>Roommate Relationships</li>
          <li>Suicide Prevention</li>
          <li>Active Bystander Training</li>
          <li>Ally Training</li>
        </ul> 
        <p>We work closely with the Rice Counseling and Wellness Centers (and our A-Team!) in order to provide direct support to our 
          college through year-long programming, one-on-one support, and office hours concerning anything and everything related to 
          your wellbeing! Although we have designated office hour times, you can reach out to us individually at any time. Our 
          intention with office hours is to provide clear opportunities for students to come to us if they are hesitant about reaching 
          out to us at a random time. But seriously, reach out whenever!
          <br/>
          We are well trained, but we are not experts. So, if there’s something we don’t know about, we’ll know who to refer you to 
          instead and support you through the process. We handle all conversations with confidentiality unless we see a peer in a 
          situation of immediate danger.
          <br/>
          RHAs are also stocked with: bandages, pain relievers, ear plugs, condoms, cough drops, tampons, pads, cool packs, heating 
          pads, antacids, and thermometers. These resources are available at anytime, please don’t hesitate to ask!
          <br/>
          Feel free to text us or message us on Facebook when you need anything, we are here for you.
          </p> 
        <h4>Jones Rice Health Advisors 2020-2021</h4>
        <p>jonesrhas@gmail.com</p>
        
    </div>
  
  </>
  );
}

export default PeerResources;
