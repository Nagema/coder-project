import React, { useState } from 'react';
import './styles.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

export function ItemListContainer({ title, text, image , items, itemsAvailable, currency, price }) {

  const [add, setCount] = useState(0);

  const addItems = () => { 
   add < itemsAvailable && setCount(add + 1);
  }

  const deleteItems = () => {
   add >= 1 && setCount(add - 1) 
  }
  
  return (
    <div className="cardGroupWrap">
      <Row sx={1} md={3} className="g-4">
        {Array.from({ length: items }).map((_, idx) => (
          <Col key={idx}>
            <div className="d-flex justify-content-around">
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>  
                  <Card.Title>{title} {idx}</Card.Title>
                  <Card.Text>
                    {text}
                  </Card.Text>
                  <div className='add-items'>
                    <Button variant="light" onClick={deleteItems}>
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>  
                    <p>{add}</p>
                    <Button variant="light" onClick={addItems}>
                      <FontAwesomeIcon icon={faPlus} />
                    </Button> 
                  </div>
                  <div className='buying-process'>
                    <Button variant="warning">add to cart</Button>
                    <Badge bg="light" text="dark">{currency}{price}</Badge>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}
