import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProduct, updateProduct } from '../../Actions/ProductActions';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import { PRODUCT_UPDATE_RESET } from '../../Constants/ProductConstants';

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

    const productUpdate = useSelector((state) => state.productUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = productUpdate;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successUpdate) {
            props.history.push('/productlist');
        }

        if (!product || product._id !== productId || successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET });
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
    }, [product, dispatch, productId, successUpdate, props.history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({
                _id: productId,
                name,
                price,
                image,
                category,
                brand,
                countInStock,
                description,
            })
        );
    };

    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
  
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setLoadingUpload(true);
        try {
            const { data } = await Axios.post('/api/uploads', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });

            setImage(data);
            setLoadingUpload(false);
        } catch (error) {
            setErrorUpload(error.message);
            setLoadingUpload(false);
        }
    };

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Edite o Produto {productId}</h1>
                </div>
                {loadingUpdate && <Loading />}
                {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
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
                                htmlFor="imageFile"
                                type="file"
                                id="imageFile"
                                label="Choose Image"
                                onChange={uploadFileHandler}
                            />
                            {loadingUpload && <Loading />}
                            {errorUpload && (
                                <Message variant="danger">{errorUpload}</Message>
                            )}
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