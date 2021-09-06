import Rating from '../../Rating/Rating';
// import Img from '`../../../Assets/1.jpeg`';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const { product } = props;
  	return (
    	<div key={product._id} className="card">
      		<Link to={`/product/${product._id}`}>
        		<img className="medium" src={product.image} alt={product.name} />
      		</Link>
      		<div className="card-body">
        		<Link to={`/product/${product._id}`}>
          			<h2>{product.name}</h2>
        		</Link>
        		<Rating rating={product.rating} numReviews={product.numReviews} />
        		<div className="price">R${product.price}</div>
      		</div>
    	</div>
  	);
}

export default Product;