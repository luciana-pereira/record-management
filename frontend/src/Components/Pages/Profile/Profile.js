import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../../Actions/UserActions';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';
import Input from '../../Forms/Input';

const Profile = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);

    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Perfil</h1>
                </div>
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <>
                        <div>
                            <Input
                                htmlFor="nome"
                                label="Nome"
                                id="name"
                                type="text"
                                value={user.name}
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="email"
                                label="Email"
                                id="email"
                                type="email"
                                value={user.email}
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="password"
                                label="Senha"
                                id="password"
                                type="password"
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="confirmPassword"
                                label="Confirmar senha"
                                id="confirmPassword"
                                type="password"
                            />
                        </div>
                        <div>
                            <label />
                            <button className="primary" type="submit">
                                Atualizar
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}

export default Profile;