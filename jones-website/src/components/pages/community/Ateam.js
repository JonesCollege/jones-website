import React, {useEffect, useState} from 'react'
import Footer from '../../Footer'
import './Ateam.css'

const Ateam = () => {
  const [resize, setResize] = useState(false)

  useEffect(()=>{
    window.scrollTo({
        top: 0,
    });
    innerWidth()
  },[])

  const innerWidth = () => {
    if (window.innerWidth <= 768){
      setResize(true)
    }
    else{
      setResize(false)
    }
  }
  window.addEventListener('resize', innerWidth);


  return (
    <div>
    <div id='ateam'>
      <div id='ateamintro'>
        <h2>ADULT TEAM</h2>
        <p>Here at Rice, each college has a number of amazing faculty, staff, alumni, and 
          community members that are affectionately referred to as Associates. At Jones, 
          they are the best of the bunch. They cheer on our Powderpuff, sponsor study breaks, 
          and do whatever they can to make your college experience the best it can possibly be.
        </p>
      </div>

      <div className='ateamflex'>
        <img src={require('./ateam/images/ballfamily.jpg')} alt='Jones Magisters, Zach and Trisha Ball' className='ateamimage' id='magisterimage'></img>
        <div className='ateaminfo'>
          <p className='ateamname'>Zach, Trisha, and Emilia Ball</p>
          <div className='ateamposemail'><span className='ateampos'>Magisters</span><a href='mailto: zb1@rice.edu' className='ateamemail'>zb1@rice.edu</a></div>
          <p className='ateamdesc'>We are Zach and Trisha Ball, and we are honored and thrilled to serve as Magisters at Jones College, 
            a diverse, vibrant community with a storied Beer Bike tradition. We are here to support Jones students 
            throughout their journey at Rice and advise and assist them in running the college.<br></br><br></br>
            Zach is a professor in the Department of Chemistry. At Rice since 2006, his research group focuses on 
            biological applications of organic and organometallic chemistry, including developing new synthetic methods 
            for the preparation of therapeutics, biosensors, and new molecular tools to study biological pathways. He 
            teaches organic and organometallic chemistry, and serves as director of the Institute of Biosciences and 
            Bioengineering. Trisha has worked in writing, editing, and development capacities for academic and other 
            non-profit organizations, including Development and Alumni Relations at Rice.<br></br><br></br>
            Prior to settling in Houston, we lived in the San Francisco Bay Area, where Zach completed graduate and 
            postdoctoral training. We met in Boston as undergraduates at Harvard before jumping coasts to California. 
            Trisha hails from Upstate New York and still aches for crisp fall and winter weather, though curiously 
            didn’t learn to knit until moving to Houston. Zach is a native of Columbus, Ohio, and enjoys cooking, film, and cycling.
          </p>
        </div>
      </div>

      <div className='ateamflex'>
        {resize && <img src={require('./ateam/images/michelle.webp')} alt='Jones College Coordinator, Michelle Bennack' className='ateamimage float-right' id='ccimage'></img>}
        <div className='ateaminfo'>
          <p className='ateamname'>Michelle Bennack</p>
          <div className='ateamposemail'><span className='ateampos'>College Coordinator</span><a href='mailto: mrb4@rice.edu' className='ateamemail'>mrb4@rice.edu</a></div>
          <p className='ateamdesc'>
          Michelle joined the team at Jones College in 2009 and is the college coordinator
          for Jones College. Michelle is responsible for the daily operations of the college.
          She helps manage the college's finances, events and facilities. Michelle's
          involvement in the many aspects of Jones College life, means she will often be a
          student's first stop for questions and guidance. She is here to help you through
          your college years and provide you with a variety of things: your mail, packages
          from home, stamps, envelopes, faxes, photocopies, answers to your queries, and
          being the cool aunt providing you with smiles, hugs and a candy treat!
          <br/><br/>
          When she's not making the kingdom of Jones run smoothly, Michelle enjoys
          entertaining friends with the perfect cocktail, relaxing with a great book or movie
          and cycling with her husband Lloyd (btw he's a Rice Grad, a Jones associate, and
          all round great guy).
          <br/><br/>
          Just know the office is a great place to hangout with comfy couches, candy, and
          the amazing Michelle! Stop by anytime to take a break from your busy day!
          </p>
        </div>
        {!resize && <img src={require('./ateam/images/michelle.webp')} alt='Jones College Coordinator, Michelle Bennack' className='ateamimage float-right' id='ccimage'></img>}
      </div>

      <div className='ateamflex'>
        <img src={require('./ateam/images/kerri.jpg')} alt='Jones RA, Kerri Barber' className='ateamimage' id='southraimage'></img>
        <div className='ateaminfo'>
          <p className='ateamname'>Kerri Barber</p>
          <div className='ateamposemail'><span className='ateampos'>Jones South RA</span><a href='mailto: klb8@rice.edu' className='ateamemail'>klb8@rice.edu</a></div>
          <p className='ateamdesc'>Kerri is a BoSox lovin’, Yankee hating, country music parrot-head that uses “wicked” and “y’all” in the same sentence. 
          Kerri earned her B.S. in Sport Management from Ithaca College and was a member of the 2002 NCAA DIII National Championship softball team. 
          Kerri is such a competitive player she thought it would be a great idea to play in the championship series with a busted ankle and broken nose 
          (hey a fancy ring was worth it right?!?)<br></br><br></br>
          After spending four years bundled up in blankets and snow suits, Kerri realized she wanted to spend her days in flip flops and shorts. 
          Since owning an island was way too expensive, she decided moving to hot-humid Houston was the answer. Kerri taught Physical Education and 
          was the founding Athletic Director at the Southwest Campus of YES Prep Public Schools. Kerri was a Maverick for eight years until she made 
          the wicked smart decision to become an Owl as the administrator for the Department of Sport Management. When she isn’t keeping her rowdy faculty 
          in line, Kerri enjoys supporting the Houston sports scene, hosting TV watch parties (Game of Thrones &amp; Bachelor), reliving her softball glory days, 
          or indulging herself in the Houston brewery and food scenes. Kerri and her furbaby Bruin (or BruBru pup) are always together and have the same 
          amount of energy, and you’ll never see them apart. They are both eager to meet anyone and everyone headed towards Jones!</p>
        </div>
      </div>
      <div className='ateamflex'>
        {resize && <img src={require('./ateam/images/caitlin.webp')} alt='Jones RA, Caitlin Lindsay' className='ateamimage float-right' id='ccimage'></img>}
        <div className='ateaminfo'>
          <p className='ateamname'>Caitlin Lindsay</p>
          <div className='ateamposemail'><span className='ateampos'>Jones North RA</span><a href='mailto: cml18@rice.edu' className='ateamemail'>cml18@rice.edu</a></div>
          <p className='ateamdesc'>
          We are Caitlin and Calypso and so excited to be a part of the Jones Community. We moved to Houston from Pennsylvania in 2021, but Caitlin is originally from 
          Milwaukee, WI (something you'll quickly recognize when you see how much better she is with the cold, compared to Houston's heat).
          <br/> <br/>
          My Master's Degree is in Higher Education Administration from St. Cloud State, meaning I went to school specifically to learn strategies for working at a 
          university and advising/supporting students. At Rice, I am the Associate Director of Facilities, Events, and Student Run Businesses in the Student Center. 
          I'm also an Adviser for the Rice Black Women's Association, Instructor for the Critical Dialogues on Diversity course, and am the Chair of the Multiracial 
          Network for a higher education organization called ACPA.  When not working, you can usually find me spending time with Calypso, at the theatre, playing games 
          (video, board, or card), reading, or trying out new restaurants and venues in Houston.
          <br/> <br/>
          Calypso is a Shiba Inu mix Caitlin rescued in 2021. You'll often hear her compared to a cat. She loves to sniff people, and is easily bribed with food, but 
          she's skittish and takes time to warm up to people before she's comfortable being pet.
          <br/> <br/>
          We're excited to get to know all of you! Please do not hesitate to reach out if there's anything you need, ways I can help you to have a better experience 
          at Jones or Rice, or if you just want to chat!
 
          </p>
        </div>
        {!resize && <img src={require('./ateam/images/caitlin.webp')} alt='Jones RA, Caitlin Lindsay' className='ateamimage float-right' id='ccimage'></img>}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Ateam