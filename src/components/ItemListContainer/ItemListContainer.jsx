import React, { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './styles.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function ItemListContainer({ 
  title, 
  text, 
  image, 
  items, 
  itemsAvailable, 
  price, 
  currency 
}) {

  return (
    <div className="cardGroupWrap">
      <Row sx={1} md={3} className="g-4">
        {Array.from({ length: items }).map((_, idx) => (
          <Col key={idx}>
            <div className="d-flex justify-content-around">
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>  
                  <Card.Title>{title} {idx}</Card.Title>
                  <Card.Text>
                    {text}
                  </Card.Text>
                  <ItemCount   
                    itemsAvailable={itemsAvailable}
                    price={price}
                    currency={currency}
                  />
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}
