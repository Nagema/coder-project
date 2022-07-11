import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';

export function Item({   
    currency,
    product
}) {

  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/detail/${product.id}`)
  }
  return (
    <Card style={{ width: '25rem', height:'25rem' }} onClick={handleDetail}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ width: '8rem', height: '12rem', margin: 'auto', paddingTop: '20px' }} 
        />
        <div className='price-info'>
          <Badge bg="light" text="dark">{currency}{product.price}</Badge>
        </div>
        <Card.Body>  
            <Card.Title style={{ textAlign: 'center' }}>{product.title}</Card.Title>
            <div className='buying-process'>
          </div>
        </Card.Body>
    </Card>
  )
}