import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';

export function Item({
    title, 
    text, 
    image, 
    idx, 
    stock, 
    price, 
    currency 
}) {
  return (
    <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>  
            <Card.Title>{title} {idx + 1}</Card.Title>
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