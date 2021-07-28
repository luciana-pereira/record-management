
const Cart = (props) => {
    const productId = props.match.params.id;
    const qtd = props.location.search
      ? Number(props.location.search.split('=')[1])
      : 1;

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