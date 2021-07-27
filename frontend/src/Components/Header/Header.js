/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import Logo from '../../Assets/Logo.jfif';
// import Carrinho from '../../../Assets/carrinho-de-compras.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <img className="brand" href="/" className={styles.img} src={Logo} />
            <p className={styles.title}>GrifAfro</p>
            <ul className={styles.options}>
              <li><a href="/acessorios">Acessórios 💍 |</a></li>
              <li><a href="/meus_pedidos">Meus Pedidos 🛍️ |</a></li>
              <li ><a href="/signin">Entrar</a></li>
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;