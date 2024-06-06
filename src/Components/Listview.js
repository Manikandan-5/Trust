import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Listview = ({product}) => {
  return (
    <>
     <Card style={{ width: '18rem',height:'33rem'}} className='text-center mt-4'>
      <Card.Img variant="top" src={product.img} className='img-fluid' style={{height:'100vh'}} />
      <Card.Body>
        <Card.Title>{product.trustname}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Children's : {product.count}</ListGroup.Item>
        <ListGroup.Item>{product.address}</ListGroup.Item>
        <ListGroup.Item>{product.cellnumber}</ListGroup.Item>
        <ListGroup.Item> $ Donate Number : {product.gpay}</ListGroup.Item>

      </ListGroup>
    </Card>
    </>
  )
}

export default Listview