import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../../Actions/ProductActions';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';

const ProductEdit = (props) => {
    const productId = props.match.params.id;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!product || product._id !== productId) {
            dispatch(detailsProduct(productId));
        } else {
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setCategory(product.category);
            setCountInStock(product.countInStock);
            setBrand(product.brand);
            setDescription(product.description);
        }
    }, [product, dispatch, productId]);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Edite o Produto {productId}</h1>
                </div>
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <>
                        <div>
                            <Input
                                htmlFor="name"
                                id="name"
                                type="text"
                                label="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="price"
                                id="price"
                                type="text"
                                label="Preço"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="image"
                                id="image"
                                type="text"
                                label="Imagem"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="category"
                                id="category"
                                type="text"
                                label="Categoria"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="brand"
                                id="brand"
                                type="text"
                                label="Marca"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="countInStock"
                                id="countInStock"
                                type="text"
                                label="Quantidade em Estoque"
                                value={countInStock}
                                onChange={(e) => setCountInStock(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Descrição</label>
                            <textarea
                                id="description"
                                rows="3"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label></label>
                            <Button className="primary" type="submit">
                                Atualizar
                            </Button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}

export default ProductEdit;