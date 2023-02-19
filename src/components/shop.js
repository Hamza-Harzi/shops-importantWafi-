import React from "react";
import CardItem from "./CardItem";

function shop({ shop }) {
  console.log("shop", shop);
  return (
    <div>
      {shop.length === 0
        ? "you don't have any achat"
        : shop.map((elt) => (
            <CardItem key={elt.id} operation="shop" article={elt} />
          ))}
    </div>
  );
}

export default shop;
