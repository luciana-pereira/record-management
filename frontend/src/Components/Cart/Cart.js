import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartActions, removeFromCart } from '../Actions/CartActions';
import Message from '../Message/Message';
import Img from '../../Assets/1.jpeg';
import Button from '../Forms/Button';

const Cart = (props) => {
  	const productId = props.match.params.id;
  	const qtd = props.location.search
  	? Number(props.location.search.split('=')[1])
  	: 1;

  	const cart = useSelector((state) => state.cart);
  	const { cartItems } = cart;

  	const dispatch = useDispatch();
  	useEffect(() => {
    	if (productId) {
      		dispatch(CartActions(productId, qtd));
    	}
  	}, [dispatch, productId, qtd]);

  	const removeFromCartHandler = (id) => {
    	dispatch(removeFromCart(id));
  	};
    
  	const checkoutHandler = () => {
    	props.history.push('/signin?redirect=shipping');
  	};

    return (
      	<div className="row top">
        	<div className="col-2">
          		<h1>Meus Pedidos</h1>
          		{cartItems.length === 0 ? (
            		<Message>
              			Carrinho esta vazio. 
              			<Link to="/">Bora para as compras?</Link>
            		</Message>
          		) : (
          			<ul>
            			{cartItems.map((item) => (
              				<li key={item.product}>
                				<div className="row">
                  					<div>
                    					<img
                      						src={Img}
                      						alt={item.name}
                      						className="small"
                    					/>
                  					</div>
                  					<div className="min-30">
                    					<Link to={`/product/${item.product}`}>{item.name}</Link>
                  					</div>
                  					<div>
                    					<select
                      						value={item.qty}
                      						onChange={(e) =>
                        						dispatch(
                          							CartActions(item.product, Number(e.target.value))
                        						)
                      						}
                    					>
                      						{[...Array(item.countInStock).keys()].map((x) => (
                        						<option key={x + 1} value={x + 1}>
                          							{x + 1}
                        						</option>
                      						))}
                   						</select>
                  					</div>
                  					<div>R${item.price}</div>
                  					<div>
                    					<Button
                      						type="button"
                      						onClick={() => removeFromCartHandler(item.product)}
                    					>
                      						Remover Item
                    					</Button>
                  					</div>
                				</div>
              				</li>
            			))}
          			</ul>
        		)}
      		</div>
      		<div className="col-1">
        		<div className="card card-body">
          			<ul>
            			<li>
              				<h2>
               					Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : R$
                				{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              				</h2>
            			</li>
           				<li>
              				<button
                				type="button"
                				onClick={checkoutHandler}
                				className="primary block"
                				disabled={cartItems.length === 0}
              				>
                				Finalizar Compra
              				</button>
            			</li>
          			</ul>
        		</div>
      		</div>
    	</div>
    );
  }

  export default Cart;