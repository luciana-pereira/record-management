import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../../Actions/UserActions';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';
import Input from '../../Forms/Input';
import { USER_UPDATE_PROFILE_RESET } from '../../Constants/UserConstants';

const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
    const dispatch = useDispatch();
    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const {
        success: successUpdate,
        error: errorUpdate,
        loading: loadingUpdate,
    } = userUpdateProfile;

    useEffect(() => {
        if (!user) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userInfo._id));
        } else {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo._id, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('A senha e a confirmação da senha não correspondem.');
        } else {
            dispatch(updateUserProfile({ userId: user._id, name, email, password }));
        }
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
                        {loadingUpdate && <Loading /> }
                        {errorUpdate && (
                            <Message variant="danger">{errorUpdate}</Message>
                        )}
                        {successUpdate && (
                            <Message variant="success">
                                Perfil atualizado com sucesso
                            </Message>
                        )}
                        <div>
                            <Input
                                htmlFor="nome"
                                label="Nome"
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="email"
                                label="Email"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="password"
                                label="Senha"
                                id="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <Input
                                htmlFor="confirmPassword"
                                label="Confirmar senha"
                                id="confirmPassword"
                                type="password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
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