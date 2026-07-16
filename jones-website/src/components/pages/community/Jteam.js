import React, { useState } from "react";
import Footer from "../../Footer";
import "./css/Jteam.css";
import { useResizeWidth, useScrollToTop } from "../../../utility";

const Ateam = () => {
  const [resize, setResize] = useState(false);

  useScrollToTop();
  useResizeWidth(768, setResize);

  return (
    <div>
      <div id="ateam">
        <div id="ateamintro">
          <h2>J-TEAM</h2>
          <p>
            Here at Rice, each college has a number of amazing faculty, staff,
            alumni, and community members that are affectionately referred to as
            Associates. At Jones, they are the best of the bunch. They cheer on
            our Powderpuff team, sponsor study breaks, and do whatever they can
            to make your college experience the best it can possibly be.
          </p>
        </div>

        <div className="ateamflex">
          <img
            src={require("./INFO/ateam_images/zachball.jpg")}
            alt="Jones Magister Zach Ball"
            className="ateamimage"
            id="magisterimage"
          ></img>
          <div className="ateaminfo">
            <p className="ateamname">Zach Ball</p>
            <div className="ateamposemail">
              <span className="ateampos">Magister</span>
              <a href="mailto: zb1@rice.edu" className="ateamemail">
                zb1@rice.edu
              </a>
            </div>
            <p className="ateamdesc">
              I am Zach Ball, and I am honored and thrilled to serve as Magister
              at Jones College, a diverse, vibrant community with a storied Beer
              Bike tradition. I live at Jones with my daughter Emilia, a high
              school junior. I am here to support Jones students throughout
              their journey at Rice and advise and assist them in running the
              college.
              <br />
              <br />
              Zach is a professor in the Department of Chemistry. At Rice since
              2006, his research group focuses on biological applications of
              organic and organometallic chemistry, including developing new
              synthetic methods for the preparation of therapeutics, biosensors,
              and new molecular tools to study biological pathways. He teaches
              organic and organometallic chemistry.
              <br />
              <br />
              Zach is a native of Columbus, Ohio, and spent time in Boston and
              San Francisco before settling in Houston. He enjoys cooking, film,
              and cycling, and games of all kinds. My daughter Emilia is a
              native Houstonian who is active in high school theater and enjoys
              art, writing, and birdwatching.
            </p>
          </div>
        </div>

        <div className="ateamflex">
          {resize && (
            <img
              src={require("./INFO/ateam_images/SagerPic.jpg")}
              alt="Jones College Coordinator, Kellie Sager"
              className="ateamimage float-right"
              id="ccimage"
            ></img>
          )}
          <div className="ateaminfo">
            <p className="ateamname">Kellie Sager</p>
            <div className="ateamposemail">
              <span className="ateampos">College Coordinator</span>
              <a href="mailto: ks235@rice.edu" className="ateamemail">
                ks235@rice.edu
              </a>
            </div>
            <p className="ateamdesc">
              Kellie Sager (she/they) is the new College Coordinator for Jones
              College Started on June 17th. Originally from Dallas.
              <br />
              <br />
              She helps manage the college's finances, events and facilities.
              Kellie's involvement in the many aspects of Jones College life,
              means she will often be a student's first stop for questions and
              guidance. She is here to help you through your college years and
              provide you with a variety of things: your mail, packages from
              home, stamps, envelopes, faxes, photocopies, answers to your
              queries, and being the cool aunt providing you with smiles, hugs
              and a candy treat!
              <br />
              <br />
              Outside of work, she stays busy with her husband, four children,
              dog, and two cats. They share a passion for Renaissance fairs,
              gaming adventures, and anime marathons as a family. She also likes
              to indulge her creative side with crafting projects, exploring
              graphic design, and capturing moments through photography.
              <br />
              <br />
              She is very excited to connect with Jonesians and contribute to
              the growth and success of all students. Just know the office is a
              fun place to hangout with comfy couches and candy. Stop by anytime
              to take a break from your busy day! She is here to help and
              support you on your journey!
            </p>
          </div>
          {!resize && (
            <img
              src={require("./INFO/ateam_images/SagerPic.jpg")}
              alt="Jones College Coordinator, Michelle Bennack"
              className="ateamimage float-right"
              id="ccimage"
            ></img>
          )}
        </div>

        <div className="ateamflex">
          <img
            src={require("./INFO/ateam_images/kelsey_heather.jpg")}
            alt="Jones RA, Kelsey Ullom"
            className="ateamimage"
            id="southraimage"
          ></img>
          <div className="ateaminfo">
            <p className="ateamname">Kelsey Ullom and Heather Roberts</p>
            <div className="ateamposemail">
              <span className="ateampos">Jones South RA</span>
              <a href="mailto: keu1@rice.edu" className="ateamemail">
                keu1@rice.edu
              </a>
            </div>
            <p className="ateamdesc">
              Hey Jones! We are Kelsey and Heather, your RAs residing in Jones
              South.
              <br />
              <br />
              Originally from Miami, Florida, Kelsey has called a lot of places
              home—everywhere from Arkansas to DC. She majored in International
              Studies at Ohio Wesleyan University, where she took full advantage
              of study abroad opportunities and quickly became a believer in the
              power of learning through travel.
              <br />
              <br />
              Since then, Kelsey’s global adventures have taken her far and
              wide: She’s led service-learning programs in Haiti, worked on
              study abroad initiatives with the U.S. Department of State,
              consulted for the United Nations, and earned a master’s degree in
              International Education from the University of Pennsylvania.
              <br />
              <br />
              At Rice, Kelsey serves as Associate Director at the Center for
              Civic Leadership, where she helps students turn their travel
              dreams into action through international programs, internships,
              and fellowships. Outside of work, Kelsey is an avid cyclist and an
              amateur crafter, writer, and birder. She dabbles in the ukulele,
              enjoys reading, camping, hiking, and baking key lime pie. You can
              usually find her outdoors, ideally near a body of water.
              <br />
              <br />
              Heather was born in Houston and raised just down the road in
              Pasadena, so this area has always been home. She went to college
              at Texas A&M University–Corpus Christi (go Islanders!) where she
              earned her BA in Communication. Over the years, she’s worked a
              variety of fun and random jobs—from a music venue and a local
              visitor’s center to a dog food company. Currently, she manages a
              LensCrafters store, where she helps people find the glasses of
              their dreams (because life’s just better in focus, right?)
              <br />
              <br />
              When she’s off the clock, Heather loves reading with her book
              club, juggling (yes, literally), and contemplating the purchase of
              a unicycle she’s had in her Amazon cart for years. She also has a
              skateboard, but hasn't figured out how to do any tricks yet. Open
              to tips! Even though Jones is big on biking, Heather prefers to
              exercise on two legs—she’s completed six half marathons and
              countless 5k’s. Maybe a Jones Running Club in the future?
              <br />
              <br />
              We live with a beloved, anti-social cat named Atlas, who you may
              or may not get the chance to meet (he prefers his privacy). Stop
              by Jones South to hang out, see our art collection, and debate
              where to get the best french fries. We’re excited to be part of
              the Jones College community and looking forward to getting to know
              everyone!
            </p>
          </div>
        </div>
        <div className="ateamflex">
          {resize && (
            <img
              src={require("./INFO/ateam_images/caitlin.jpg")}
              alt="Jones RA, Caitlin Lindsay"
              className="ateamimage float-right"
              id="ccimage"
            ></img>
          )}
          <div className="ateaminfo">
            <p className="ateamname">Caitlin Lindsay</p>
            <div className="ateamposemail">
              <span className="ateampos">Jones North RA</span>
              <a href="mailto: cml18@rice.edu" className="ateamemail">
                cml18@rice.edu
              </a>
            </div>
            <p className="ateamdesc">
              We are Caitlin and Calypso and so excited to be a part of the
              Jones Community. We moved to Houston from Pennsylvania in 2021,
              but Caitlin is originally from Milwaukee, WI (something you'll
              quickly recognize when you see how much better she is with the
              cold, compared to Houston's heat).
              <br />
              <br />
              My Master's Degree is in Higher Education Administration from St.
              Cloud State, meaning I went to school specifically to learn
              strategies for working at a university and advising/supporting
              students. At Rice, I am the Director of Student Center Operations,
              so I oversee the RMC, Rice Coffeehouse (Chaus), and Rice Bikes.
              I'm also overinvolved on campus, so if you have a question about
              getting involved, time management, etc., let me know! When not
              working, you can usually find me spending time with Calypso, at
              the theatre, playing games (video, board, or card), reading, or
              trying out new restaurants and venues in Houston.
              <br />
              <br />
              Calypso is a Shiba Inu mix Caitlin rescued in 2021. You'll often
              hear her compared to a cat. She loves to sniff people, and is
              easily bribed with food, but she's skittish and takes time to warm
              up to people before she's comfortable being pet.
              <br />
              <br />
              We're excited to get to know all of you! Please do not hesitate to
              reach out if there's anything you need, ways I can help you to
              have a better experience at Jones or Rice, or just want to chat!
            </p>
          </div>
          {!resize && (
            <img
              src={require("./INFO/ateam_images/caitlin.jpg")}
              alt="Jones RA, Caitlin Lindsay"
              className="ateamimage float-right"
              id="ccimage"
            ></img>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ateam;
