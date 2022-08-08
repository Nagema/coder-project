import React from 'react'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import constants from '../../utils/constants';

function PurchaseDetail({cart, totalPrice}) {
  return (
    <div className='form-client'>
        <h3>{constants.purchaseDetail}</h3>
        <ListGroup>
            {cart.map((product) => (
                <div key={product.id}>
                    <ListGroup.Item
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">{product.title}</div>
                        <p>
                            {product.category}
                        </p>
                        <div className="fw-bold">{constants.subtotal}: {product.addedProducts * product.price} {constants.eur}</div>
                        
                        </div>
                        <Image style={{width:'10%', marginTop:'20px'}} src={product.image}/>
                        <Badge bg="success" pill>
                        {product.addedProducts}
                        </Badge>

                    </ListGroup.Item>
                </div>
                ))
            }
            <div className='total-info-detail'>
                <p>{constants.total}</p>
                <p>{totalPrice.toFixed(2)} {constants.eur}</p>
            </div>
        </ListGroup>
    </div>
  )
}

export default PurchaseDetail