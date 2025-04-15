import React, { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addId2StoreCart, getStoreCart, removeFromCart } from "../../utils/localstorage";
import Choice from "../Choice/Choice";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  // useEffect_______________________________
  useEffect(() => {
    const storedCartIds = getStoreCart();

    const storedCart = [];

    for (const id of storedCartIds) {
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      // to prevent 'undefined' product (added the product to cart long ago, but now not available in bottles. in that case we are checking below)
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCart(storedCart);
  }, [bottles]);
  // ___________________________________________

  const handleadd2Cart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    // save the bottle id in local storage
    addId2StoreCart(bottle.id);
  };
  // console.log(bottles);

  const handleRemoveFromCart = (id) => {
    console.log("remove item from the cart", id);
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromCart(id);
  };

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <h3>Added to Cart: {cart.length} </h3>
      <Choice cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Choice>

      {/*--------------- bottles container------------- */}
      <div className="grid grid-cols-3 gap-5">
        {bottles.map((bottle) => (
          <Bottle
            handleadd2Cart={() => handleadd2Cart(bottle)}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
