import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import ProductDetail from "./ProductDetail";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
      let searchQuery = query.get("q") || "";
      console.log("퀴리값은", searchQuery)
      let url = `https://my-json-server.typicode.com/kangdongjumin/noona-hnm-practice/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
      console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
