import React, { useState } from 'react'
import './styles.css'
import Card from 'react-bootstrap/Card';
import ButtonCount from '../ButtonCount/ButtonCount';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function ItemDetail({
  product
}) {
  product.stock = 3;

  const [addedProducts, setAddedProducts] = useState(0);
  const navigate = useNavigate();

  const handleConfirm = (items) => {
    setAddedProducts(items)
  }
  const purchase = () => {
    navigate('/cart')
  }
  return (
    <div className='detail-item-card'>
      <Card style={{ width:'80%', margin: 'auto' }}>
        <div className="card-detail-group">
          <img className='detail-img'
            src={product.image}
            />
          <Card.Body>  
          <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
              {!addedProducts 
                ? <ButtonCount onConfirm={handleConfirm} maxQuantity={product.stock} />
                : <Button onClick={purchase}>Terminar compra</Button>
              }
          </Card.Body>
        </div>
    </Card>
    </div>

  )
}

export default ItemDetail