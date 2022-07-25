import React, { Fragment, useContext, useState } from 'react';
import { Shop } from '../../context/ShopContext';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import EmptyCart from '../../assets/emptyCart.png';
import { useNavigate } from 'react-router-dom';
import generateOrder from '../../utils/generateOrder.js'
import './styles.css'
import saveOrder from '../../utils/saveOrder';

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
  const confirmOrderText = 'Proceed to checkout'
  let totalPrice = 0;

  const { cart, removeItem, clear } = useContext(Shop);
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate('/')
  }

  const confirmOrder = async () => {
    const order = generateOrder("alguien", "casa de alguien nro 1", cart, totalPrice);
    saveOrder(cart, order);
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
        <div className="cartImageWrapper">
          <Row sx={1} md={1} className="g-4">
            {cart.map((product) => (
              <div key={product.id}>
                <div className="d-flex">
                  <Card style={{ width:'50%', marginLeft: '5%', marginRight:'0%'}}>
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
              </div>
            ))}
          </Row>
        </div>
        {cart.length > 0 &&
        <div className="deleteAllButton">
          <div>
            <Button variant="light" onClick={clear}> 
              <span>
                {deleteAllText} {<FontAwesomeIcon icon={faTrash} size="lg" />}
              </span>    
            </Button>
            <p>{total}: {totalPrice}</p>
          </div>
            <div>
            <Button variant="light" onClick={confirmOrder}> 
              {confirmOrderText}
            </Button>
            </div>
        </div>
        }
      </div>
    </Fragment>
  )
}

export default Cart