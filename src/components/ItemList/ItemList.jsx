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
      <Row sx={1} md={5} className="g-4">
        {products.map((product, idx) => (
          <Col key={idx}>
            <div className="d-flex justify-content-around">
              <Item 
                title={product.title}
                text={product.description}
                image={product.image}
                stock={stock}
                price={product.price}
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