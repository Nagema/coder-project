import React, { Fragment, useState } from 'react';
import './styles.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import constants from '../../utils/constants';

const ButtonCount = ({ onConfirm, maxQuantity }) => {
    
    const [value, setValue] = useState(1);

    const addItems = () => { 
        if (value < maxQuantity) {
            setValue(value + 1) 
        }
    }
  
    const substractItems = () => {
        if (value > 1) {
            setValue(value - 1) 
        }
    }

    const handleConfirm = () => {
        if (value <= maxQuantity) {
            onConfirm(value)
        } else {
            alert('products out of stock')
        }
    }

    const disabled = maxQuantity === 0; 

    return (
        <Fragment>
            {!disabled &&
                <div className='button-count'>
                    <Button variant="light" onClick={substractItems}>
                        <FontAwesomeIcon icon={faMinus} />
                    </Button> 
                    <p>{value}</p>   
                    <Button variant="light" onClick={addItems}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>     
                </div>
            }
            <div className='button-count'>
                <Button disabled={disabled} onClick={handleConfirm}>
                    {disabled ? constants.sold : constants.confirm}
                </Button>
            </div>
        </Fragment>
    )
}

export default ButtonCount