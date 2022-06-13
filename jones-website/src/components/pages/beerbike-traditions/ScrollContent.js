import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ScrollContent({ items }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef(); //get current status of the carousel reference

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="ScrollContent">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {items.map((item) => {
            return (
              <motion.div className="item">
                <item />
              </motion.div>
            );
          })}
          ;
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ScrollContent;
