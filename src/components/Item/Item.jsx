import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';

export function Item({  
    stock,  
    currency,
    goToDetail,
    product 
}) {

  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/detail/${product.id}`)
  }
  return (
    <Card style={{ width: '15rem' }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ width: '8rem', height: '12rem', margin: 'auto', paddingTop: '20px' }} 
        />
        <Card.Body>  
            <Card.Title>{product.title}</Card.Title>
            <ItemCount   
              stock={stock}
              price={product.price}
              currency={currency}
            />
            <div className='buying-process'>
              <Button size="sm" variant="warning">add to cart</Button>
              <Button size="sm" variant="light" onClick={handleDetail}>{goToDetail}</Button>
          </div>
        </Card.Body>
    </Card>
  )
}