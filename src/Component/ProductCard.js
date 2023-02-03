import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ produit }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={produit.image} />
      <Card.Body>
        <Card.Title>{produit.title}</Card.Title>
        <Card.Text>{produit.price}</Card.Text>
        <Link to={`/details/${produit.id}`}>
          <Button variant="primary">see details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
