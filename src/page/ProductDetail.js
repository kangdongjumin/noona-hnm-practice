import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Col, Row, Dropdown, Button, DropdownButton } from 'react-bootstrap'
import { useParams} from 'react-router-dom'

const ProductDetail = () => {
    let {id} = useParams()
    const [product, setProduct] = useState(null)
    const getProductDetail=async()=> {
        let url = `https://my-json-server.typicode.com/kangdongjumin/noona-hnm-practice/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        setProduct(data)   
    }
    useEffect(()=> {
        getProductDetail()
    },[])

  return (
    <Container>
      <Row>
        <Col className="product-img">
        <img src={product?.img}/>
        </Col>
        <Col className="product-detail">
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        <div>{product?.choice}</div>
        <DropdownButton id="dropdown-basic-button" title="사이즈선택">
      <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
      <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
      <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
    </DropdownButton>
        <Button className="add-button"active variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
