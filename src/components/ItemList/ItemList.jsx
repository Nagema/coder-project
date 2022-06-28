import React from 'react'
import { Item } from '../Item/Item';
import './styles.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function ItemList({
  title, 
  text, 
  image, 
  items, 
  stock, 
  price, 
  currency 
}) {
  return (
    <div className="cardGroupWrap">
      <Row sx={1} md={3} className="g-4">
        {Array.from({ length: items }).map((_, idx) => (
          <Col key={idx}>
            <div className="d-flex justify-content-around">
              <Item 
                title={title}
                idx={idx}
                text={text}
                image={image}
                stock={stock}
                price={price}
                currency={currency}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}