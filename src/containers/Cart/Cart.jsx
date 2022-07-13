import React, { useContext } from 'react';
import { Shop } from '../../context/ShopContext';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart() {

  const { cart, removeItem, clear } = useContext(Shop);
  const currency = 'EUR';
  const qtyText = 'Qty';
  const deleteText = 'Delete';
  const deleteAllText = 'Delete all'
  return (
    <div className="cardGroupWrap">
      {cart.length > 0 &&
      <div className="deleteAllButton">
        <Button variant="light" onClick={clear}> 
          <span>
            {deleteAllText} {<FontAwesomeIcon icon={faTrash} size="lg" />}
          </span>    
        </Button>
      </div>
      }
      <Row sx={1} md={1} className="g-4">
        {cart.map((product) => (
          <Col key={product.id}>
            <div className="d-flex justify-content-around">
              <Card style={{ width:'80%', margin: 'auto' }}>
                <div className="card-detail-group">
                  <img className='detail-img'
                    src={product.image}
                    />
                  <Card.Body>  
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Title>{product.price} {currency}</Card.Title>
                  <Card.Text>{qtyText} : {product.addedProducts}</Card.Text>
                  <Button variant="light" onClick={() => removeItem(product, 1)}> 
                    <span> {deleteText} {<FontAwesomeIcon icon={faTrash} size="lg" />}
                    </span>
                  </Button>
                  </Card.Body>
                </div>
              </Card>
            </div>
          </Col>

        ))}
      </Row>
    </div>
  )
}

export default Cart