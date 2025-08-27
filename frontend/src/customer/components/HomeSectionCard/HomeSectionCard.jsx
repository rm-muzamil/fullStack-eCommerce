import React from "react";

function HomeSectionCard({ products }) {
  return (
    <div className="w-[15rem] bg-amber-100 flex flex-col items-center overflow-hidden mx-3 shadow-lg">
      <div className="w-[10rem] h-[13rem]">
        <img src={products.imageUrl} />
      </div>
      <div>
        <h3>{products.title}</h3>
        <p>description ....</p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
