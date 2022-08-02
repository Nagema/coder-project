import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';
import constants from '../../utils/constants';
import './styles.css';

export function Item({   
    currency,
    product
}) {
  const stock = `${product.stock} ${constants.units}`
  const sold = product.stock === 0 && 'red';
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
        <div className='product-info'>
          <Badge bg="light" text="dark">{currency}{product.price}</Badge>
          
        </div>
        <div className='product-info'>
          <p style={{fontWeight:'600', color:sold}}> 
            {product.stock !== 0 
              ? stock
              : constants.sold
            }
          </p>
        </div>
       
        <Card.Body>  
            <p style={{ textAlign: 'center', fontWeight:'600' }}>{product.title}</p>
            <div className='buying-process'>
          </div>
        </Card.Body>
    </Card>
  )
}