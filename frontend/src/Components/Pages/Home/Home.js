import React, { useEffect} from 'react';
import Product from '../Product/Product';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Product/Actions/ProductActions';

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;