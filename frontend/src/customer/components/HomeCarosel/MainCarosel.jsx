import React from "react";
import AliceCarousel from "react-alice-carousel";
import { mainCaroselData } from "./MainCaroselData";
import "react-alice-carousel/lib/alice-carousel.css";

function MainCarosel() {
  const items = mainCaroselData.map((item) => (
    <img className="w-screen h-96" src={item.image} role="presentation" />
  ));
  return (
    <div>
      <AliceCarousel
        items={items}
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
      />
    </div>
  );
}

export default MainCarosel;
