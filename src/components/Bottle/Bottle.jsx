import React from "react";

const Bottle = ({ bottle, handleadd2Cart }) => {
  const { img, name, price, stock } = bottle;
  return (
    <div className="border p-1 border-gray-500 text-center">
      <div className="border-2 border-teal-800 p-5 rounded-3xl flex justify-center">
        <img className="w-40 h-52 m-1.5 object-contain" src={img}></img>
      </div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="font-bold text-3xl">${price}</p>
        <p className="font-semibold">available: {stock}</p>
        <button
          className="bg-amber-600 px-2 py-1 rounded-lg hover:bg-green-500 hover:text-white"
          onClick={handleadd2Cart}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Bottle;
