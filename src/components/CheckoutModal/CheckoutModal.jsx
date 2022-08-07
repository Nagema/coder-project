import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import constants from '../../utils/constants';

function CheckoutModal({
  show,
  handleClose,
  order
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{constants.purchaseConfirmation}</Modal.Title>
          <FontAwesomeIcon style={{ marginLeft:'15px', height: '1.5em',color: 'green'}} icon={faCircleCheck} />
        </Modal.Header>
        <Modal.Body>{constants.thankYouForYourPurchase} 😊</Modal.Body>
        <Modal.Body>{constants.generatedOrderId} {order.id}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {constants.goToSeeProducts}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CheckoutModal