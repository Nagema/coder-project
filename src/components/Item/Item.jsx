import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';

export function Item({
    title, 
    text, 
    image, 
    stock, 
    price, 
    currency 
}) {
  return (
    <Card style={{ width: '15rem' }}>
        <Card.Img 
          variant="top" 
          src={image} 
          style={{ width: '8rem', height: '12rem', margin: 'auto', paddingTop: '20px' }} 
        />
        <Card.Body>  
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            <ItemCount   
              stock={stock}
              price={price}
              currency={currency}
            />
        </Card.Body>
    </Card>
  )
}