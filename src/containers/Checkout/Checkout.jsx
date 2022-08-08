import React, { Fragment, useContext, useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Shop } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import './styles.css'
import generateOrder from '../../utils/generateOrder';
import saveOrder from '../../utils/saveOrder';
import constants from '../../utils/constants';
import CheckoutModal from '../../components/CheckoutModal/CheckoutModal';
import PurchaseDetail from '../../components/PurchaseDetail/PurchaseDetail';
import FormClient from '../../components/FormClient/FormClient';

function Checkout() {

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
        {cart.length !== 0 
        ?   <div className='form-client-wrapper'>
                <FormClient 
                    email={email}
                    onChangeEmail={onChangeEmail}
                    name={name}
                    onChangeName={onChangeName}
                    address={address}
                    onChangeAddress={onChangeAddress}
                    sendClientInfo={sendClientInfo}
                    disabled={disabled}
                />
                {show && <CheckoutModal show={show} handleClose={handleCloseModal} order={order} />}
                <PurchaseDetail cart={cart} totalPrice={totalPrice}/>
            </div> 
        :   <div className='alert-message'>
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

export default Checkout