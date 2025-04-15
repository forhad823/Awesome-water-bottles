import React from "react";

const Choice = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {cart.map((bottle) => (
        <div className="w-20 h-40 object-cover" key={bottle.id}>
          <img src={bottle.img} alt="" />
          <button
            className="text-white bg-black hover:bg-red-600 p-2 py-0
             flex justify-center items-center rounded-full"
            onClick={() => handleRemoveFromCart(bottle.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Choice;
