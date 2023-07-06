import React from "react";
import "./Traditions.css";
import Tradition from "./Tradition";

import image1 from "./traditions_images/floor_olympics.jpeg";
import image2 from "./traditions_images/freshman_hg.jpeg";
import image3 from "./traditions_images/le_krewe.jpg";


const Traditions = () => {
  return (
    <div className="traditions-container">
      <h1>Traditions</h1>
      <div className="traditions">
      <Tradition
          photo={image1}
          traditionName="Floor Olympics"
          paragraphText="A house divided against itself. Jones Floor Olympics is an annual tradition in which each floor competes against one another to prove themselves as the most dominant. In the past, competitions have included: volleyball, dodgeball, trivia, the Jones Hunger Games, and many more! Floors receive points based on where they rank in each competition, and the floor with the most points at the end of the year receives a monetary prize to spend however they so choose. Get excited to bond with your floor-mates and show other Jonesians your athleticism and wits!"
        />
        <Tradition
          photo={image2}
          traditionName="Freshman Hunger Games"
          paragraphText="In the fiercest and most deadly battle of Floor Olympics, freshmen from each floor are offered up as tributes to battle for the honor of their floor. Chosen at a reaping alongside an upperclassman mentor, one freshman girl and one freshman boy must prepare themselves for the greatest challenge of their life. Additionally, one female and one male OC (off-campus) student are selected to be the careers of the battle. To show support for their tributes, floormates win points to purchase gifts by demonstrating their knowledge and creativity for the Hunger Games. You will not want to miss this epic war complete with swords (noodles), guns (water guns), and blood (red paint)!"
        />
        <Tradition
          photo={image3}
          traditionName="Le Krewe de Jones"
          paragraphText='Welcome to "Le Krewe de Jones", the ultimate Louisiana-style Mardi Gras extravaganza! Get ready to immerse yourself in a day filled with vibrant festivities, exciting relay races, delectable Southern cuisine, and a touch of mystique. Grab a plate and come indulge in the rich flavors of the South, featuring our very own crawfish boil. Enter a world of colors, live music, and endless fun as we celebrate and dance the night away. Let the good times roll at Le Krewe de Jones!'

        />
      </div>
    </div>
  );
};

export default Traditions;
