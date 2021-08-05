import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Checkout from '../../Checkout/Checkout';

const PlaceOrder = (props) => {
    const cart = useSelector((state) => state.cart);
    if (!cart.paymentMethod) {
        props.history.push('/payment');
    }

    const toPrice = (num) => Number(num.toFixed(2)); 
  
    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const placeOrderHandler = () => {
    };

    return (

        <div>
            <Checkout step1 step2 step3 step4 />
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Dados de envio</h2>
                                <p>
                                    <strong>Nome:</strong> {cart.shippingAddress.fullName} <br />
                                    <strong>Endereço: </strong> {cart.shippingAddress.address},
                                    {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                                    ,{cart.shippingAddress.country}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Forma de Pagamento</h2>
                                <p>
                                    <strong>Metodo:</strong> {cart.paymentMethod}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Itens</h2>
                                <ul>
                                    {cart.cartItems.map((item) => (
                                        <li key={item.product}>
                                            <div className="row">
                                                <div>
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="small"
                                                    />
                                                </div>
                                                <div className="min-30">
                                                    <Link to={`/product/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </div>
                                                <div>
                                                    Quantidade = {item.qty} x R${item.price} = R${item.qty * item.price}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Resumo do pedido</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Itens</div>
                                    <div>R${cart.itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Envio</div>
                                    <div>R${cart.shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Taxa</div>
                                    <div>R${cart.taxPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        <strong> Total do pedido</strong>
                                    </div>
                                    <div>
                                        <strong>R${cart.totalPrice.toFixed(2)}</strong>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={placeOrderHandler}
                                    className="primary block"
                                    disabled={cart.cartItems.length === 0}
                                >
                                    Finalizar compra
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrder;