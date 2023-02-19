import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardItem({
  article,
  increment,
  decrement,
  hendelSumIncrement,
  hendelSumDecrement,
  addToCart,
  operation,
}) {
  const handleIncrement = () => {
    increment(article.id);
    hendelSumIncrement(article.id);
  };

  const hendleDecrement = () => {
    decrement(article.id);
    hendelSumDecrement(article);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={article.image} />
      <Card.Body>
        <Card.Title>{article.name}</Card.Title>
        <Card.Text>{article.price}$</Card.Text>
        <Button variant="danger" onClick={handleIncrement}>
          +
        </Button>
        <span style={{ fontSize: "25px" }}>{article.qte}</span>
        <Button variant="primary" onClick={hendleDecrement}>
          -
        </Button>
      </Card.Body>
      {operation === "get" && (
        <Button variant="primary" onClick={() => addToCart(article)}>
          Add To Cart
        </Button>
      )}
    </Card>
  );
}

export default CardItem;
