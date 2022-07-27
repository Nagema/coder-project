import React, { useContext, useState } from 'react'
import './styles.css'
import Card from 'react-bootstrap/Card';
import ButtonCount from '../ButtonCount/ButtonCount';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext'
import constants from '../../utils/constants';

function ItemDetail({
  product
}) {
  const [addedProducts, setAddedProducts] = useState(0);
  const navigate = useNavigate();

  const handleConfirm = (items) => {
    setAddedProducts(items)
  }

  const {addItem} = useContext(Shop);

  const purchase = () => {
    addItem(product, addedProducts)
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
                : <Button onClick={purchase}>{constants.proceedToCheckout}: {addedProducts} {constants.item}</Button>
              }
          </Card.Body>
        </div>
      </Card>
    </div>

  )
}

export default ItemDetail