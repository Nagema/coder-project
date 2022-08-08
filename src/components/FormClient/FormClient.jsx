import React from 'react'
import Form from 'react-bootstrap/Form';
import constants from '../../utils/constants';
import Button from 'react-bootstrap/Button';

function FormClient({
    email,
    name,
    address,
    onChangeEmail,
    onChangeName,
    onChangeAddress,
    sendClientInfo,
    disabled
}) {
  return (
    <div className='form-client'>
        <h3>{constants.clientInformation}</h3>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{constants.emailAddress}</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={onChangeEmail}/>
                <Form.Text className="text-muted">
                {constants.emailNoteWarning}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>{constants.name}</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name} onChange={onChangeName}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>{constants.address}</Form.Label>
                <Form.Control type="text" placeholder="Address" value={address} onChange={onChangeAddress} />
            </Form.Group>
            <Button variant="success" disabled={disabled} type="submit" onClick={sendClientInfo}>
                {constants.completeCheckout}
            </Button>
        </Form>
    </div>
  )
}

export default FormClient