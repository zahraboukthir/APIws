import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProdDetails = () => {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setproduct(res.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getOneProduct();
  }, [id]);
  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProdDetails;
