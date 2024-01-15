import SimpleSlider from "./SimpleSlider";
import HistoryItem from "./HistoryItem";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/History.css";

import image1 from "./INFO/history_images/1957.jpg";
import image2 from "./INFO/history_images/1970.png";
import image3 from "./INFO/history_images/1980.jpg";
import image4 from "./INFO/history_images/1981.jpg";
import image5 from "./INFO/history_images/2001.jpg";

function History() {
  const items = [
    <HistoryItem
      photo={image1}
      traditionName="1957"
      paragraphText={
        "Jones College was built as the first women's dormitory at Rice University. The building was made possible because of a $1 million donation from Houston philanthropist Jesse H. Jones. The college was named in honor of his wife, Mary Gibbs Jones. Jones College, which consisted of two buildings - Jones North and Jones South - opened to the first female residents in September 1957.In the early days, Jones College's culture was quite conservative since the college was all-female. The women were always expected to maintain 'ladylike' manners. At meals, each table had a hostess, and dinner was served family style. Strict rules were enforced by house mothers when men from the south colleges visited the female students. The students even had to abide by a strict curfew - 11 PM on weekdays and 2 AM on weekends."
      }
    />,
    <HistoryItem
      photo={image2}
      traditionName="1970"
      paragraphText={
        "In the 1970s, Jones began phasing out many of the strictest rules, but some women were still unsatisfied with the college. In 1972, some Jones women took the opportunity to transfer to Baker and Hanszen, the first two co-ed colleges. 1972 was also the year of the first Women's Beer Bike Race. Jones lost Beer Bike to Brown that year, but it went on to win in 1975, 1978, 1979, and 1980."
      }
    />,
    <HistoryItem
      photo={image3}
      traditionName="1980"
      paragraphText={
        "In 1981, Jones made its Beer Bike men's race debut by finishing second-to-last. The Jones men didn't make a mark in Beer Bike history until 1988 when they won their first ever men's race by just twenty-four hundredths of a second over Lovett. This victory sparked a glorious run of four men's race titles in six years (1988, 1989, 1992, and 1993). Jones men also captured Beer Bike titles in 1996, 2001, 2005, 2006, 2011, 2015, and 2017. Since Jones became co-ed, Jones women have won the women's race a total of four times - in 1990, 2002, and back-to-back titles in 2014 and 2015. The year 2015 marked the first time that both the Jones women's and men's teams won their race in the same year."
      }
    />,
    <HistoryItem
      photo={image4}
      traditionName="1981"
      paragraphText={
        "In the fall of 1980, Jones made a major change that would alter life at the college forever - it went co-ed! Male students from the south colleges were given the chance to apply for transfer to Jones. Since Lovett went co-ed the same year as Jones, many of the new Jonesians were former Loveteers. Jones women who disagreed with the decision to go co-ed were allowed to transfer to Brown College, which remained all-female until 1987."
      }
    />,
    <HistoryItem
      photo={image5}
      traditionName="2001"
      paragraphText={
        "In 2001, construction began on the new Jones Commons and Jones Central, which would connect North and South. During the same time, Jones' wonderful, spacious parking lot (the envy of all other colleges) was destroyed to make way for the construction of the so-called Martel College. The new Jones Commons opened for use in March 2002. Jones Central opened in August 2002. In 2017, Jones underwent a renovation for their quadspace, and named the new quad 'Achard Courtyard' in honor of former Jones Masters Michel and Melanie Achard."
      }
    />,
  ];

  return (
    <div className="history-container">
      <h1>History</h1>
      <SimpleSlider items={items} />
    </div>
  );
}

export default History;
