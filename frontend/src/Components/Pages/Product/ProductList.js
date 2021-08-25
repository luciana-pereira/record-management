import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, listProducts, deleteProduct } from '../../Actions/ProductActions';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';
import { PRODUCT_CREATE_RESET, PRODUCT_DELETE_RESET } from '../../Constants/ProductConstants'
import Button from '../../Forms/Button';

const ProductList = (props) => {
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    const productCreate = useSelector((state) => state.productCreate);

    const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      product: createdProduct,
    } = productCreate;

    const productDelete = useSelector((state) => state.productDelete);

    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = productDelete;

    const dispatch = useDispatch();
    useEffect(() => {
        if (successCreate) {
            dispatch({ type: PRODUCT_CREATE_RESET });
            props.history.push(`/product/${createdProduct._id}/edit`);
        } 
        
        if (successDelete) {
            dispatch({ type: PRODUCT_DELETE_RESET });
        }

        dispatch(listProducts());
    }, [createdProduct, dispatch, props.history, successCreate, successDelete]);

    const deleteHandler = (product) => {
        if (window.confirm('Are you sure to delete?')) {
            dispatch(deleteProduct(product._id));
        }
    }

    const createHandler = () => {
        dispatch(createProduct());
      };

    return (
        <div>
            <div className="row">
                <h1>Produto</h1>
                <Button type="button" className="primary" onClick={createHandler}>
                    Criar Produto
                </Button>
            </div>
            {loadingDelete && <Loading />}
            {errorDelete && <Message variant="danger">{errorDelete}</Message>}
            {loadingCreate && <Loading />}
            {errorCreate && <Message variant="danger">{errorCreate}</Message>}
            {loading ? (
                <Loading />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>PREÇO (un.)</th>
                            <th>CATEGORIA</th>
                            <th>MARCA</th>
                            <th>QUANTIDADE</th>
                            <th>AÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>R${product.price},00</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>{product.countInStock}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() =>
                                            props.history.push(`/product/${product._id}/edit`)
                                        }
                                    >
                                        Editar
                                    </button>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => deleteHandler(product)}
                                    >
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ProductList;