import React from 'react'
import { Item } from '../Item/Item';
import './styles.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function ItemList({
  products,
  stock, 
  currency 
}) {
  return (
    <div className="cardGroupWrap">
      <Row sx={1} md={3} className="g-4">
        {products.map((product, idx) => (
          <Col key={idx}>
            <div className="d-flex justify-content-around">
              <Item 
                product={product}
                stock={stock}
                goToDetail={'go to detail'}
                currency={currency}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}