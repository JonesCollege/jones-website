import React from 'react'
import "./Traditions.css"
import Tradition from "./Tradition"

const Traditions = () => {
  return (
    <div className="traditions-container">
        <h1>Traditions</h1>
        <div className="traditions">
            <Tradition
                photo = {"./images/mgj_birthday.jpeg"}
                traditionName = "Mary Gibbs Jones Birthday Bash"
                paragraphText = "The Jones Birthday Bash is a day where all Jonesians come together to celebrate our beloved college with lots of food, games, fun, and animals. It is a day where we can express our love for Jones and everything we enjoy about it! Associates and alumni are also invited to join the festivities. In years past, we have had baby goats, puppies, bounce houses, water slides, human hamster balls, and more! There's always plenty of great food, including Torchy's Tacos, burgers hot off the grill, and of course the popcorn, snow cone, and cotton candy machines!"
                
            />
            <Tradition
                photo = {"./images/freshman_hg.jpeg"}
                traditionName = "Freshman Hunger Games"
                paragraphText = "In the fiercest and most deadly battle of Floor Olympics, freshmen from each floor are offered up as tributes to battle for the honor of their floor. Chosen at a reaping alongside an upperclassman mentor, one freshman girl and one freshman boy must prepare themselves for the greatest challenge of their life. However, one female and one male OC (off-campus) student are also selected to be the careers of the battle. To show support for their tributes, floor-mates win points to purchase gifts  by demonstrating their knowledge and creativity for the Hunger Games. You will not want to miss this epic war complete with swords (noodles), guns (water guns), and blood (red paint)!"
            />
            <Tradition
                photo = {"./images/floor_olympics.jpeg"}
                traditionName = "Floor Olympics"
                paragraphText = "A house divided against itself. Jones Floor Olympics is an annual tradition in which each floor competes against one another to prove themselves as the most dominant. In the past, competitions have included: volleyball, dodgeball, trivia, the Jones Hunger Games, and many more! Floors receive points based on where they rank in each competition, and the floor with the most points at the end of the year receives a monetary prize to spend however they so choose. Get excited to bond with your floor-mates and show other Jonesians your athleticism and wits! Jones College Anthem"
            />
        </div>


    </div>
    
  )
}

export default Traditions