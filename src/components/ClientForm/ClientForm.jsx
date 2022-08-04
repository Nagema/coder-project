import React, { useContext, useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Shop } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import './styles.css'
import generateOrder from '../../utils/generateOrder';
import saveOrder from '../../utils/saveOrder';
import constants from '../../utils/constants';

function ClientForm() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const onChangeEmail = event => {
        setEmail(event.target.value);
    };

    const onChangeName = event => {
        setName(event.target.value);
    };
    const onChangeAddress = event => {
        setAddress(event.target.value);
    };

    const { cart, clear, totalPrice } = useContext(Shop);
    const navigate = useNavigate();
    const sendClientInfo = async () => {
        const order = generateOrder(email, name, address, cart, totalPrice);
        saveOrder(cart, order);
        clear();
        navigate('/')
    };

    const inputTextValidation = name.length > 2 && address.length > 3

    const disabled = !email || !name || !address || !inputTextValidation;

  return (
    <div className='form-client'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{emailAddress}</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={onChangeEmail}/>
                <Form.Text className="text-muted">
                {emailNoteWarning}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name} onChange={onChangeName}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" value={address} onChange={onChangeAddress} />
            </Form.Group>
            <Button variant="success" disabled={disabled} type="submit" onClick={sendClientInfo}>
                {constants.completeCheckout}
            </Button>
        </Form>
    </div>
  )
}

export default ClientForm