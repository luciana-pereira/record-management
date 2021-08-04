import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../Actions/CartActions';
import Checkout from '../../Checkout/Checkout'; 
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';

const Payment = (props) => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress.address) {
        props.history.push('/shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    };

    return (
        <div>
            <Checkout step1 step2 step3 />
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Forma de Pagamento</h1>
                </div>
                <div>
                    <Input
                        type="radio"
                        id="paypal"
                        value="PayPal"
                        name="paymentMethod"
                        checked
                        label="PayPal"
                        htmlFor="paypal"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                </div>
                <div>
                    <Input
                        type="radio"
                        id="pix"
                        value="Pix"
                        name="paymentMethod"
                        label="Pix"
                        htmlFor="pix"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                </div>
                <div>
                    <label />
                    <Button type="submit">
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Payment;