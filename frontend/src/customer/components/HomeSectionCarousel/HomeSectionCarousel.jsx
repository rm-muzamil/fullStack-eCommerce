import React, { useRef, useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button } from "@mui/material";
import { beauti_products } from "../../../Data/Beauti/beauti_products";

function HomeSectionCarousel({ data, sectionName }) {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = data
    .slice(0, 12)
    .map((item) => <HomeSectionCard products={item} />);
  const maxIndex = items.length - 5;
  return (
    <div>
      <h2>{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          // activeIndex={activeIndex}
        />
        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              transform: "translateY(50%)",
              rotate: "90deg",
            }}
          >
            <NavigateNextIcon sx={{ rotate: "90deg" }} />
          </Button>
        )}
        {activeIndex < maxIndex && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateY(50%)",
              rotate: "90deg",
            }}
          >
            <NavigateNextIcon sx={{ rotate: "-90deg" }} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
