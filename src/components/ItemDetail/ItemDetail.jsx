import React from 'react'
import Card from 'react-bootstrap/Card';

function ItemDetail({product}) {
  console.log(product)
  return (
    <div>
      <Card style={{ width: 'auto', height: 'auto' }}>
        <Card.Img 
          variant="top" 
          src={product.image} 
          style={{ width: '18rem', height: '30rem', margin: 'auto', paddingTop: '20px' }} 
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