const Checkout = (props) => {
  	return (
    	<div className="row checkout-steps">
      		<div className={props.step1 ? 'active' : ''}>Entrada</div>
      		<div className={props.step2 ? 'active' : ''}>Compra 🛍️</div>
      		<div className={props.step3 ? 'active' : ''}>Pagamento 💳 </div>
      		<div className={props.step4 ? 'active' : ''}>Concluir o pedido</div>
    	</div>
  	);
}

export default Checkout;