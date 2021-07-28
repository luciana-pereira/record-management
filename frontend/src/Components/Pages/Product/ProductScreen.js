import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../Product/Actions/ProductActions';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';
import Rating from '../../Rating/Rating';
import Img from '../../../Assets/1.jpeg';


const ProductScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

    return (
      <div>
        {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Link to="/">⬅️ Voltar</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={Img}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Pirce : R${product.price}</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">R${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">Em Estoque</span>
                        ) : (
                          <span className="danger">Indisponível</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary block">Adicionar Cartão</button>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
      )}
      </div>
    );
  }

export default ProductScreen;
