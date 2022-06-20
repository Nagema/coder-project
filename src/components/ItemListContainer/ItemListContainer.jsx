import React from 'react'
import './styles.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function ItemListContainer({ title, text, image , index }) {
  return (
    <div className='cardGroupWrap'>
      <Row sx={1} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <div className="d-flex justify-content-around">
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {text}
                  </Card.Text>
                  <Button variant="warning">add</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}
