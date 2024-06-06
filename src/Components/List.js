import React, { useState } from 'react'
import data from './data.json';
import Listview from './Listview';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const List = () => {

    const [products]=useState(data)
  return (
    <>
  <Container>
    <Row>
   { products.map((product)=>{
      return (
        <Col lg={4} md={6} key={product.id}>
        <Listview  product={product} />
    </Col>
      )
    })}
    

    </Row>
  </Container>
    </>
  )
}
