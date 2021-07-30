import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CartActions } from './Actions/CartActions';

const Cart = (props) => {
    const productId = props.match.params.id;
    const qtd = props.location.search
      ? Number(props.location.search.split('=')[1])
      : 1;

      const dispatch = useDispatch();
      useEffect(() => {
        if (productId) {
          dispatch(CartActions(productId, qtd));
        }
      }, [dispatch, productId, qtd]);

    return (
      <div>
        <h1>Minhas compras</h1>
        <p>
          Adicionar ao Carrinho : ProductID: {productId} Qtd: {qtd}
        </p>
      </div>
    );
  }

  export default Cart;