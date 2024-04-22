//'use client';
import React from "react";
import AddToCart from "./AddToCart";
//import stylesssssss from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div /*className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-rose-950" /*className={stylesssssss.card}*/>
        <AddToCart/>
      {/*<button onClick={() => console.log("Clicked")}>Add to Cart</button>*/}
    </div>
  );
};

export default ProductCard;
