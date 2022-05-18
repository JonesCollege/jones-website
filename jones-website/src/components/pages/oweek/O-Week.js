import React from 'react';
import './O-Week.css';
import '../../../App.css';
import CoordCard from './CoordCard';
import GroupCard from './GroupCard';
import Footer from '../../Footer';

export default function OWeek () {
    
    return (
        <div>
        <div className='oweek-container'>
            <div className='flex-row'>
                <div className='flex-column'>
                    <CoordCard className="card" img={"./images/des_mort.jpg"}/>
                    <CoordCard className="card" img={"./images/des_mort.jpg"}/>
                </div>
                <CoordCard className="card" img={"./images/des_mort.jpg"}/>
            </div>
            <div className='oweek-text-container'>
                <h1 className='oweek-h1'>
                    OWEEK
                </h1>
                <h3 className='oweek-h3'>
                    HELLO NEW JONESIANS!
                </h3>
                <p className='oweek-p'>
                We are Harry, Sarah, and Sofia (otherwise known as the Casinoords), and we’re coordinating your O-Week! We were elected 
                at the end of the Fall 2021 semester by Jones College and have been working since January to make sure O-Week 2022 is as 
                fun, informative, and fulfilling as possible. We are so excited to welcome you into Jones, a place that has meant so much 
                to the three of us, and we can assure you with 110% certainty that your advisors and all the other Jonesians can’t wait 
                to meet you either. This is the start of a great new chapter in your life, and our goal for O-Week is to familiarize you 
                with all the resources you have available to you (including alumni, associates, advisors, and offices on campus) so you 
                can make something incredible out of your Rice experience.
                <br/>
                Rice Orientation Week, more commonly known as O-Week, is very different from normal university orientations. It’s a full 
                week of events that basically fit into three categories:
                    <li>those that help you plan your classes,</li> 
                    <li>those that describe the opportunities and resources you have here at Rice and beyond, </li>
                    <li>and those that make you feel at home in Houston, on campus, and especially at Jones. </li>

                No need to worry about planning anything beforehand. We’ll walk you through everything you need to know and do during the 
                week! It’ll be a lot to take in, but trust us, it’s going to be a great time.
                <br/>
                The first people you’ll meet when you get here will be your O-Week group: four upperclassman advisors and about eight other 
                new students. (You can look up your advisors in this book.) This is your new little family. These are the people who will 
                guide you, support you, and be there for you even after O-Week itself ends. Together, you’ll learn many fundamental truths: 
                why Jones is the winningest college, why Beer Bike is the best sport ever, and what makes Jones a family. As you come to 
                rely on your new family here at Jones, we will teach you to embrace our defining characteristic of winning. This doesn’t 
                necessarily mean that Jones always comes in first place, nor do we expect you to. It describes an attitude and a philosophy 
                of life that Jonesians subscribe to. When we chant “Jones Wins Again,” it means that regardless of the outcome of an event, 
                we all get to be winners because we get to head back to Jones. It is this strong sense of pride and fellowship that makes us 
                feel lucky to call Jones our home because when we’re together, there’s no doubt that all we do is win.
                <br/>
                While at Rice, you’ll quickly learn to love (or put up with) our obsession with themes and punny names. So why CasinO-Week? 
                CasinO-Week is built around two main values: courage and support. We remember when we decided to come to Rice, and it was 
                daunting. Your matriculating class comes from all places, backgrounds, identities, lifestyles, and traditions, and as 
                excited as you are to attend such an amazing university, putting yourselves in this new environment is intimidating. But 
                even in a totally new place with totally new people, we don’t want you to shy away from taking risks. Each and every one 
                of the special experiences we have had here has come about because a risk we took paid off. Whether it’s attending a new 
                club meeting (or starting your own!), taking a class you’re unsure about (or teaching your own!), or joining an intramural 
                sports team (or forming your own!), we want new students to come away from O-Week with the courage to make the most of their 
                Rice experience. And at the end of the day, the most important lesson is that Jones will be there to support you. Your fellow 
                Jonesians know that not every gamble pays off, and we’ll be there for the highs and the lows.
                <br/>
                By the time you read this, we will already be in Houston planning O-Week. If you have any concerns, requests for advice, packing 
                questions, weather forecasting needs, or movie recommendations, please don’t hesitate to reach out—that’s why we’re here.
                <br/>
                See you soon!
                </p>
            </div>
            
        </div>
        <GroupCard />
        <Footer/>
    </div>
    )
}