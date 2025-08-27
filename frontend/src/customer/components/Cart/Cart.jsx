import React from "react";
import CartItem from "./CartItem";

import { Button } from "@mui/material";

function Cart() {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          <CartItem />
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p>Price details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3">
                <p>price</p>
                <p>$499</p>
              </div>
              <div className="flex justify-between pt-3">
                <p>price</p>
                <p>$499</p>
              </div>
              <div className="flex justify-between pt-3">
                <p>price</p>
                <p>$499</p>
              </div>
              <div className="flex justify-between pt-3">
                <p>price</p>
                <p>$499</p>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
