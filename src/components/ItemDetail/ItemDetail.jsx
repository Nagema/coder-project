import React from 'react'
import Card from 'react-bootstrap/Card';

function ItemDetail({product}) {
  
  return (
    <div className='detail-item-card'>
      <Card style={{ width:'80%', height: 'auto', margin: 'auto' }}>
        <Card.Img 
          variant="top" 
          src={product.image}      
        />
        <Card.Body>  
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}

export default ItemDetail