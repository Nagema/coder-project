import React, { Fragment, useContext } from 'react';
import { Shop } from '../../context/ShopContext';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import EmptyCart from '../../assets/emptyCart.png';
import { useNavigate } from 'react-router-dom';
import './styles.css'
import constants from '../../utils/constants';

function Cart() {
  
  const { cart, removeItem, clear, totalPrice } = useContext(Shop);
  const navigate = useNavigate();
  const goToProducts = () => {
    navigate('/')
  }

  const confirmOrder = async () => {
    navigate('/checkout-process')

  }

  return (
    <Fragment>
      {cart.length === 0 && 
       <>
        <Image style={{width:'100%'}} src={EmptyCart} alt="Empty cart"></Image>
       <div className='back-to-list'>
        <Button variant="light" onClick={goToProducts}> 
          {constants.goToSeeProducts}
        </Button>
       </div>
       </>
      }
      <div className="cart-wrapper">
        <div className="cartImageWrapper">
          <Row sx={1} md={1} className="g-4">
            {cart.map((product) => (
              <div key={product.id}>
                <div className="d-flex">
                  <Card style={{ width:'65%', marginLeft:'5%', marginRight:'5%'}}>
                    <div className="card-detail-group">
                      <img className='detail-img'
                        src={product.image}
                        alt={product.title}
                        />
                      <Card.Body>  
                      <p style={{fontWeight:'600'}}>{product.title}</p>
                      <p>{constants.price} : {product.price} {constants.currency}</p>
                      <Card.Text>{constants.qtyText} : {product.addedProducts}</Card.Text>
                      <Button variant="light" onClick={() => removeItem(product, 1)}> 
                        <span> {constants.deleteText} {<FontAwesomeIcon icon={faTrash} size="lg" />}</span>
                      </Button>
                      <Card.Text>{constants.subtotal} ({product.addedProducts} {constants.itemsText}) : {product.addedProducts * product.price} {constants.eur}</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </Row>
        </div>
        {cart.length > 0 &&
        <div className="delete-all-button-and-checkout">
          <div>
            <Button variant="outline-secondary" onClick={clear}> 
              <span>
                {constants.deleteAllText} {<FontAwesomeIcon icon={faTrash} size="lg" />}
              </span>    
            </Button>
            <p>{constants.total}: {totalPrice.toFixed(2)} {constants.eur}</p>
          </div>
            <div>
            <Button variant="outline-success" onClick={confirmOrder}> 
              {constants.confirmOrderText}
            </Button>
            </div>
        </div>
        }
      </div>
    </Fragment>
  )
}

export default Cart