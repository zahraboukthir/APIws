import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => setproducts(json));

    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((res) => setproducts(res.data));
    const getData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setproducts(res.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  if (loading) {
    return <Spinner animation="border" />;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {products.map((el) => (
        <ProductCard key={el.id} produit={el} />
      ))}
    </div>
  );
};

export default ProductList;
