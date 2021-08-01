import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Badge = () => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <Link to="/cart">
            Meus Pedidos 🛍️ 
            {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
            )}  
        </Link>
    );
}

