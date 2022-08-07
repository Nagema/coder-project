import React, { Fragment, useContext, useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import { Shop } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import './styles.css'
import generateOrder from '../../utils/generateOrder';
import saveOrder from '../../utils/saveOrder';
import constants from '../../utils/constants';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import CheckoutModal from '../CheckoutModal/CheckoutModal';

function ClientForm() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const [show, setShow] = useState(false);
    const [order, setOrder] = useState({})
    
    const handleCloseModal = () => {
        setShow(false);
        clear();
        navigate('/');
    }
   
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

    const goToProducts = () => {
      navigate('/')
    }
    const sendClientInfo = async (event) => {
        event.preventDefault();
        const orderToSave = generateOrder(email, name, address, cart, totalPrice);
        const newOrder = await saveOrder(cart, orderToSave);
        setOrder(newOrder);
        setShow(true)
        
    };

    const inputTextValidation = name.length > 2 && address.length > 3

    const disabled = !email || !name || !address || !inputTextValidation;

  return (
    <Fragment>
        {cart.length !== 0 ?
        <div className='form-client-wrapper'>
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
                    {show && <CheckoutModal show={show} handleClose={handleCloseModal} order={order} />}
                </Form>
            </div>
            <div className='form-client'>
                <h3>{constants.purchaseDetail}</h3>
                <ListGroup>
                    {cart.map((product) => (
                        <div key={product.id}>
                            <ListGroup.Item
                                className="d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">{product.title}</div>
                                <p>
                                    {product.category}
                                </p>
                                <div className="fw-bold">{constants.subtotal}: {product.addedProducts * product.price} {constants.eur}</div>
                                
                                </div>
                                <Image style={{width:'10%', marginTop:'20px'}} src={product.image}/>
                                <Badge bg="success" pill>
                                {product.addedProducts}
                                </Badge>

                            </ListGroup.Item>
                        </div>
                        ))
                    }
                    <div className='total-info-detail'>
                        <p>{constants.total}</p>
                        <p>{totalPrice.toFixed(2)} {constants.eur}</p>
                    </div>
                </ListGroup>
            </div>
        </div> : 
    <div className='alert-message'>
        <Alert show={true} variant="warning">
        <Alert.Heading>{constants.helloText}</Alert.Heading>
        <p>
            {constants.warningNote} 😉
        </p>
        <hr />
        <div className="d-flex justify-content-end">
            <Button onClick={goToProducts} variant="outline-success">{constants.goToSeeProducts}</Button>
        </div>
        </Alert>
    </div>
    }
    </Fragment>
  )
}

export default ClientForm