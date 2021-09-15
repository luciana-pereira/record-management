import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../../Actions/UserActions';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';


const  Signin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };

    useEffect(() => {
        if (userInfo) {
          props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
    
    return (
        <div className="form">
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Faça seu login</h1>
                </div>
                {loading && <Loading />}
                {error && <Message variant="danger">{error}</Message>}
                <Input
                    htmlFor="email"
                    label="E-mail"
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    htmlFor="password"
                    label="Senha"
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <label />
                    <Button type="submit">
                        Entrar
                    </Button>
                </div>
                <div>
                    <label />
                    <div>
                        Novo usuario? 
                        <Link to={`/register?redirect=${redirect}`}>
                            Crie sua conta.
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signin;