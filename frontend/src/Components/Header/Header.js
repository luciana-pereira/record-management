/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import Logo from '../../Assets/Logo.jfif';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../Actions/UserActions';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { Badge } from '../Badge/Badge';


const Header = () => {
	const userSignin = useSelector((state) => state.userSignin);
  	const { userInfo } = userSignin;
  	const dispatch = useDispatch();

  	const signoutHandler = () => {
    	dispatch(signout());
  	};

  	return (
    	<header className={styles.header}>
      		<nav className={`${styles.nav} container`}>
        		<img className="brand" href="/" className={styles.img} src={Logo} />
        		<Link to="/" className={styles.title}>GrifAfro</Link>
        		<div className={styles.options}>
          			<Badge />
          			{userInfo ? (
            			<div className="dropdown">
              				<Link to="#">
                				{userInfo.name} <i className="fa fa-caret-down"></i>{' '}
              				</Link>
              				<ul className="dropdown-content">
							  	<li>
                  					<Link to="/orderhistory" onClick={signoutHandler}>
										Histórico de pedidos
                  					</Link>
                				</li>
                				<li>
                  					<Link to="#signout" onClick={signoutHandler}>
                    					Sair
                  					</Link>
                				</li>
              				</ul>
            			</div>
          			) : (
            			<Link to="/signin">Entrar</Link>
          			)}
        		</div>
      		</nav>
    	</header>
  	);
}
  
export default Header;