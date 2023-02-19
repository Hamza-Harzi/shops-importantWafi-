import React from "react";
import CardItem from "./CardItem";

const List = ({
  articles,
  sum,
  increment,
  decrement,
  hendelSumIncrement,
  hendelSumDecrement,
  addToCart,
}) => {
  return (
    <div>
      <div>
        {articles.map((elt) => (
          <CardItem
            key={elt.id}
            article={elt}
            increment={increment}
            decrement={decrement}
            hendelSumIncrement={hendelSumIncrement}
            hendelSumDecrement={hendelSumDecrement}
            addToCart={addToCart}
            operation={"get"}
          />
        ))}
      </div>

      <h1>sum:{sum} </h1>
    </div>
  );
};

export default List;
