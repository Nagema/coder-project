import React, { useState } from 'react';
import './styles.css'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


export function ItemCount({stock, currency, price}) {
    const [add, setCount] = useState(1);

    const addItems = () => { 
     add < stock && setCount(add + 1);
    }
  
    const substractItems = () => {
     add > 1 && setCount(add - 1) 
    }
  return (
    <div>
        <div className='add-items'>
            <Button variant="light" onClick={substractItems}>
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
    </div>
  )
}
