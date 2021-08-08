import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../Actions/CartActions';
import Checkout from '../../Checkout/Checkout';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';

const Shipping = (props) => {
  	const userSignin = useSelector((state) => state.userSignin);
  	const { userInfo } = userSignin;
  	const cart = useSelector((state) => state.cart);

  	const { shippingAddress } = cart;
  	if (!userInfo) {
    	props.history.push('/signin');
  	};

  	const [fullName, setFullName] = useState(shippingAddress.fullName);
  	const [address, setAddress] = useState(shippingAddress.address);
  	const [city, setCity] = useState(shippingAddress.city);
  	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  	const [country, setCountry] = useState(shippingAddress.country);
  	const dispatch = useDispatch();

  	const submitHandler = (e) => {
    	e.preventDefault();
    	dispatch(
      		saveShippingAddress({ fullName, address, city, postalCode, country })
    	);
    	props.history.push('/payment');
  	};

  	return (
    	<div>
      		<Checkout step1 step2 />
      		<form className="form" onSubmit={submitHandler}>
        		<div>
          			<h1>Endereço de envio</h1>
        		</div>
        		<Input
          			htmlFor="fullName"
          			label="Nome Completo"
          			type="text"
          			id="fullName"
          			value={fullName}
          			onChange={(e) => setFullName(e.target.value)}
        		/>
        		<Input
          			htmlFor="address"
          			label="Endereço"
          			type="text"
          			id="address"
          			value={address}
          			onChange={(e) => setAddress(e.target.value)}
        		/>
        		<Input
          			htmlFor="city"
          			label="Cidade"
          			type="text"
          			id="city"
          			value={city}
          			onChange={(e) => setCity(e.target.value)}
        		/>
        		<Input
          			htmlFor="postalCode"
          			label="Código Postal(CEP)"
          			type="text"
          			id="postalCode"
         			value={postalCode}
          			onChange={(e) => setPostalCode(e.target.value)}
        		/>
        		<Input
          			htmlFor="country"
          			label="País"
          			type="text"
          			id="country"
          			value={country}
          			onChange={(e) => setCountry(e.target.value)}
        		/>
        		<div>
          			<label />
          			<Button type="submit">
            			Continuar
          			</Button>
        		</div>
      		</form>
    	</div>
  	);
}

export default Shipping;