import React from 'react';
import Card from 'react-bootstrap/Card';
import WorkingInProgress from '../../assets/workingInProgress.png'

function Cart({note}) {

  return (
    <div>
    <Card className="bg-dark text-white">
      <Card.Img src={WorkingInProgress} alt="Card image" />
      <Card.ImgOverlay>
        <div className='carousel-caption note'>
            <h1>{note}</h1>
        </div>
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}

export default Cart