import React, { Fragment, useContext, useState } from 'react';
import { Shop } from '../../context/ShopContext';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import EmptyCart from '../../assets/emptyCart.png';
import { useNavigate } from 'react-router-dom';
import './styles.css'

function Cart() {

  const currency = 'EUR';
  const qtyText = 'Qty';
  const itemsText = 'items';
  const deleteText = 'Delete';
  const deleteAllText = 'Delete all';
  const price = 'Price';
  const subtotal = 'Subtotal';
  const total = 'Total';
  const goToSeeProducts = 'Back to products'
  let totalPrice = 0;

  const { cart, removeItem, clear } = useContext(Shop);
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate('/')
  }
  
  cart.forEach(item => {
    totalPrice += (item.price * item.addedProducts);
  });

  return (
    <Fragment>
      {cart.length === 0 && 
       <>
        <Image style={{width:'100%'}} src={EmptyCart} alt="Empty cart"></Image>
       <div className='back-to-list'>
        <Button variant="light" onClick={goToProducts}> 
          {goToSeeProducts}
        </Button>
       </div>
       </>
      }
      <div className="cardGroupWrap">
        {cart.length > 0 &&
        <div className="deleteAllButton">
          <Button variant="light" onClick={clear}> 
            <span>
              {deleteAllText} {<FontAwesomeIcon icon={faTrash} size="lg" />}
            </span>    
          </Button>
          <p>{total}: {totalPrice}</p>
        </div>
        }
        <div className="cartImageWrapper">
          <Row sx={1} md={1} className="g-4">
            {cart.map((product) => (
              <Col key={product.id}>
                <div className="d-flex">
                  <Card style={{ width:'50%', marginLeft: '5%'}}>
                    <div className="card-detail-group">
                      <img className='detail-img'
                        src={product.image}
                        />
                      <Card.Body>  
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Title> {price} : {product.price} {currency}</Card.Title>
                      <Card.Text>{qtyText} : {product.addedProducts}</Card.Text>
                      <Button variant="light" onClick={() => removeItem(product, 1)}> 
                        <span> {deleteText} {<FontAwesomeIcon icon={faTrash} size="lg" />}
                        </span>
                      </Button>
                      <Card.Text>{subtotal} ({product.addedProducts} {itemsText}) : {product.addedProducts * product.price}</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Fragment>
  )
}

export default Cart