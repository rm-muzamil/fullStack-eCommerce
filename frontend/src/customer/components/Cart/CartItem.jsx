import React from "react";

function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top "
            src="https://www.acecart.pk/cdn/shop/files/9-2_7518509b-02b0-4843-9c50-cafb10e238ce.jpg?v=1713606278"
            alt="jhgyjg"
          />
        </div>
        <div>
          <p>title</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
