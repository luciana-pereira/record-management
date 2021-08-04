import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../Actions/UserActions';
import Loading from '../../Loading/Loading';
import Message from '../../Message/Message';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import Error from '../../Helper/Error';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);

  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('A senha e a confirmação da senha não coincidem');
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Quer se cadastrar?</h1>
        </div>
        {loading && <Loading />}
        {error && <Message variant="danger">{error}</Message>}
        <Input
          htmlFor="name"
          label="Nome"
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          htmlFor="email"
          label="Email"
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
        <Input 
          htmlFor="confirmPassword" 
          label="Confirmar senha"
          type="password"
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Error error={error} />
        <div>
          <label />
          <Button type="submit">
            Finalizar cadastro
          </Button>
        </div>
        <div>
          <label />
          <div>
            Já possui uma conta?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Entre</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;